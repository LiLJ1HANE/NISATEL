import { useState, useEffect, useRef, useCallback } from 'react';
import { FaRobot, FaTimes, FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt, FaQuoteRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const chatbotConfig = {
  welcomeMessage: "Bonjour! Je suis l'assistant virtuel de NISATEL. Comment puis-je vous aider ?",
  services: {
    description: "NISATEL propose plusieurs services:",
    items: [
      "Conception sur-mesure et étude technique adaptées à chaque cahier des charges (CCTP)",
      "Fabrication des produits en interne à Témara",
      "Installation nationale ou sur demande à l'international",
      "Inspection, maintenance et expertise post-sinistre sur tous types de structures.",
      "Déploiement de réseaux WIFI professionnels et installation d'infrastructures fibre optique haut débit",
      "Mise en place de systèmes de balisage et de systèmes de paratonnerre normalisés"
    ],
    buttons: [
      { text: "Demande de devis", value: "service_quote", icon: <FaQuoteRight /> },
      { text: "Retour", value: "menu" }
    ]
  },
  products: {
    categories: {
      pylones: {
        title: "Pylônes & Structures",
        items: [
          "Pylônes treillis autoportants",
          "Pylônes monotubes",
          "Pylônes spéciaux (haubanés, rabattables)",
          "Renforcement de pylône existant",
        ]
      },
      signalisation: {
        title: "Mobilier Urbain et Signalisation",
        items: [
          "Potelets",
          "Poteaux flexibles",
          "Chaînes de délimitation",
          "Les barrières extensibles",
          "Les cônes de signalisation"
        ]
      },
      equipements: {
        title: "Matériel Fibre Optique",
        items: [
          "Câbles optiques",
          "ODF",
          "Jarretières et répartiteurs optiques",
          "Baies de raccordement",
          "Matériel pour tests FO"
        ]
      },
    },
    defaultButtons: [
      { text: "Retour aux catégories", value: "products" },
      { text: "Menu principal", value: "menu" },
      { text: "Demande de devis", value: "service_quote", icon: <FaQuoteRight /> },
    ]
  },
  contact: {
    phone: "0537410257",
    email: "contact@nisatel.ma",
    address: "06, Résidence Kader, Témara"
  }
};

const Chatbot = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    isOpen: false,
    messages: [],
    inputValue: '',
    currentView: 'menu',
    isTyping: false
  });

  const messagesEndRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const addMessage = (text, sender, options = {}) => {
    const newMessage = { text, sender, ...options };
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage]
    }));
  };

  const simulateTyping = useCallback((callback) => {
    setState(prev => ({ ...prev, isTyping: true }));
    setTimeout(() => {
      callback();
      setState(prev => ({ ...prev, isTyping: false }));
    }, 800);
  }, []);

  const handleResponse = useCallback((userInput) => {
    const input = userInput.toLowerCase();

    if (input === "menu") {
      simulateTyping(() => {
        addMessage(chatbotConfig.welcomeMessage, 'bot', {
          buttons: [
            { text: "Nos services", value: "services" },
            { text: "Nos produits", value: "products" },
            { text: "Contact", value: "contact" }
          ]
        });
        setState(prev => ({ ...prev, currentView: 'menu' }));
      });
    }
    else if (input === "services") {
      simulateTyping(() => {
        addMessage(chatbotConfig.services.description, 'bot', {
          listItems: chatbotConfig.services.items,
          buttons: chatbotConfig.services.buttons
        });
        setState(prev => ({ ...prev, currentView: 'services' }));
      });
    }
    else if (input === "products") {
      simulateTyping(() => {
        const categories = Object.values(chatbotConfig.products.categories).map(cat => ({
          text: cat.title,
          value: `product_category_${cat.title.toLowerCase().replace(/\s+/g, '_')}`
        }));
        
        addMessage("Nos catégories de produits:", 'bot', {
          buttons: [
            ...categories,
            { text: "Retour", value: "menu" }
          ]
        });
        setState(prev => ({ ...prev, currentView: 'products' }));
      });
    }
    else if (input.startsWith("product_category_")) {
      simulateTyping(() => {
        const categoryKey = input.replace("product_category_", "");
        const category = Object.entries(chatbotConfig.products.categories)
          .find(([key, val]) => val.title.toLowerCase().replace(/\s+/g, '_') === categoryKey)?.[1];
        
        if (category) {
          addMessage(category.title, 'bot', {
            listItems: category.items,
            buttons: chatbotConfig.products.defaultButtons
          });
          setState(prev => ({ ...prev, currentView: 'product_category' }));
        } else {
          addMessage("Catégorie inconnue. Veuillez choisir une catégorie valide.", 'bot', {
            buttons: [
              { text: "Retour aux catégories", value: "products" },
              { text: "Menu principal", value: "menu" }
            ]
          });
        }
      });
    }
    else if (input === "contact") {
      simulateTyping(() => {
        addMessage("Coordonnées de NISATEL:", 'bot', {
          contactInfo: true,
          buttons: [
            { text: "Retour", value: "menu" }
          ]
        });
      });
    }
    else {
      simulateTyping(() => {
        addMessage("Pouvez-vous préciser votre demande ?", 'bot', {
          buttons: [
            { text: "Voir le menu", value: "menu" },
          ]
        });
      });
    }
  }, [simulateTyping]);

  const handleUserAction = useCallback((value) => {
    if (!value.trim()) return;
    
    if (value === "service_quote") {
      setState(prev => ({ ...prev, isOpen: false }));
      navigate('/contact');
      return;
    }
    
    addMessage(value, 'user');
    setState(prev => ({ ...prev, inputValue: '' }));
    setTimeout(() => handleResponse(value), 300);
  }, [handleResponse, navigate]);

  useEffect(() => {
    if (state.isOpen && state.messages.length === 0) {
      simulateTyping(() => handleResponse("menu"));
    }
  }, [state.isOpen, handleResponse, simulateTyping]);

  useEffect(() => {
    scrollToBottom();
  }, [state.messages, scrollToBottom]);

  const renderMessageContent = (message) => {
    if (message.listItems) {
      return (
        <div>
          <p>{message.text}</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            {message.listItems.map((item, i) => (
              <li key={i} className="text-sm">{item}</li>
            ))}
          </ul>
        </div>
      );
    }
    
    if (message.contactInfo) {
      return (
        <div className="space-y-3">
          <div className="flex items-center p-2 bg-gray-50 rounded-lg">
            <div className="bg-orange-100 p-2 rounded-full mr-3">
              <FaPhone className="text-orange-600" />
            </div>
            <a href={`tel:${chatbotConfig.contact.phone}`} className="text-orange-600 hover:underline">
              {chatbotConfig.contact.phone}
            </a>
          </div>
          <div className="flex items-center p-2 bg-gray-50 rounded-lg">
            <div className="bg-purple-100 p-2 rounded-full mr-3">
              <FaEnvelope className="text-purple-600" />
            </div>
            <a href={`mailto:${chatbotConfig.contact.email}`} className="text-purple-600 hover:underline">
              {chatbotConfig.contact.email}
            </a>
          </div>
          <div className="flex items-center p-2 bg-gray-50 rounded-lg">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <FaMapMarkerAlt className="text-green-600" />
            </div>
            <span>{chatbotConfig.contact.address}</span>
          </div>
        </div>
      );
    }
    
    return <p>{message.text}</p>;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!state.isOpen ? (
        <button
          onClick={() => setState(prev => ({ ...prev, isOpen: true }))}
          className="relative bg-gradient-to-r from-orange-500 to-purple-600 text-white p-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          aria-label="Ouvrir le chatbot"
        >
          <FaRobot size={28} />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></span>
        </button>
      ) : (
        <div className="w-full max-w-md bg-white rounded-xl shadow-2xl flex flex-col border border-gray-100 overflow-hidden transform transition-all duration-300">
          {/* En-tête */}
          <div className="bg-gradient-to-r from-orange-600 to-purple-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
                  <FaRobot size={20} />
                </div>
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full border-2 border-orange-600"></span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Assistant NISATEL</h3>
                <p className="text-xs text-white/80">{state.isTyping ? 'En train de taper...' : 'En ligne'}</p>
              </div>
            </div>
            <button 
              onClick={() => setState(prev => ({ ...prev, isOpen: false }))}
              className="text-white/80 hover:text-white transition p-1 rounded-full hover:bg-white/10"
              aria-label="Fermer le chatbot"
            >
              <FaTimes />
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto h-96 space-y-3 bg-gradient-to-b from-gray-50 to-white">
            {state.messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white rounded-br-none'
                    : 'bg-gray-100 rounded-bl-none'
                } shadow-sm transition-all duration-200 hover:shadow-md`}>
                  {renderMessageContent(msg)}
                  {msg.buttons && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {msg.buttons.map((btn, j) => (
                        <button
                          key={j}
                          onClick={() => handleUserAction(btn.value)}
                          className={`text-xs px-3 py-1.5 rounded-full flex items-center transition ${
                            btn.value.includes('quote')
                              ? 'bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:shadow-md'
                              : btn.value === 'menu'
                                ? 'bg-gray-200 hover:bg-gray-300'
                                : 'bg-white border border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          {btn.icon && <span className="mr-1">{btn.icon}</span>}
                          {btn.text}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {state.isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Champ de saisie */}
          <div className="p-3 border-t border-gray-100 bg-white">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={state.inputValue}
                onChange={(e) => setState(prev => ({ ...prev, inputValue: e.target.value }))}
                onKeyPress={(e) => e.key === 'Enter' && handleUserAction(state.inputValue)}
                placeholder="Écrivez votre message..."
                className="flex-1 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm shadow-sm transition"
                aria-label="Champ de saisie du message"
                disabled={state.isTyping}
              />
              <button
                onClick={() => handleUserAction(state.inputValue)}
                disabled={!state.inputValue.trim() || state.isTyping}
                className={`p-3 rounded-xl ${
                  state.inputValue.trim() && !state.isTyping
                    ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white hover:shadow-md'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                } transition`}
                aria-label="Envoyer le message"
              >
                <FaPaperPlane />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Assistant virtuel NISATEL - Réponses instantanées
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;