// src/chatbotConfig.js
export const chatbotConfig = {
  fr: {
    language: 'fr',
    welcomeMessage: "Bonjour ! Je suis l'assistant virtuel de NISATEL. Comment puis-je vous aider ?",
    services: {
      description: "NISATEL propose plusieurs services:",
      items: [
        "Conception sur-mesure et étude technique",
        "Fabrication des produits en interne à Témara",
        "Installation nationale ou internationale",
        "Inspection et maintenance des structures"
      ],
      buttons: [
        { text: "Demande de devis", value: "service_quote" },
        { text: "Retour", value: "menu" }
      ]
    },
    products: {
      title: "Nos produits",
      categories: {
        pylons: {
          title: "Pylônes & Structures",
          items: [
            "Pylônes treillis autoportants",
            "Pylônes monotubes",
            "Pylônes spéciaux"
          ]
        }
      }
    },
    contact: {
      title: "Contactez-nous",
      phone: "0537410257",
      email: "contact@nisatel.ma",
      address: "06, Résidence Kader, Témara",
      buttons: [
        { text: "Appeler", value: "call" },
        { text: "Envoyer un email", value: "email" }
      ]
    },
    fallbackMessage: "Je n'ai pas compris. Pouvez-vous reformuler ?",
    menuOptions: [
      { text: "Nos services", value: "services" },
      { text: "Nos produits", value: "products" },
      { text: "Contact", value: "contact" }
    ]
  },
  en: {
    language: 'en',
    welcomeMessage: "Hello! I'm NISATEL's virtual assistant. How can I help you?",
    services: {
      description: "NISATEL offers several services:",
      items: [
        "Custom design and technical study",
        "In-house manufacturing in Témara",
        "National or international installation",
        "Structure inspection and maintenance"
      ],
      buttons: [
        { text: "Request a quote", value: "service_quote" },
        { text: "Back", value: "menu" }
      ]
    },
    products: {
      title: "Our products",
      categories: {
        pylons: {
          title: "Pylons & Structures",
          items: [
            "Self-supporting lattice pylons",
            "Monotube pylons",
            "Special pylons"
          ]
        }
      }
    },
    contact: {
      title: "Contact us",
      phone: "+212537410257",
      email: "contact@nisatel.ma",
      address: "06, Kader Residence, Témara",
      buttons: [
        { text: "Call", value: "call" },
        { text: "Send email", value: "email" }
      ]
    },
    fallbackMessage: "I didn't understand. Could you rephrase?",
    menuOptions: [
      { text: "Our services", value: "services" },
      { text: "Our products", value: "products" },
      { text: "Contact", value: "contact" }
    ]
  }
};

// Fonction utilitaire pour détecter la langue
export const detectLanguage = (text) => {
  if (!text || text.length < 3) return 'fr'; // Default
  
  // Liste de mots clés français pour confirmation
  const frenchKeywords = ['bonjour', 'merci', 'service', 'produit', 'adresse'];
  const englishKeywords = ['hello', 'thanks', 'service', 'product', 'address'];
  
  const hasFrench = frenchKeywords.some(word => text.toLowerCase().includes(word));
  const hasEnglish = englishKeywords.some(word => text.toLowerCase().includes(word));
  
  if (hasFrench && !hasEnglish) return 'fr';
  if (hasEnglish && !hasFrench) return 'en';
  
  // Fallback à franc.js si ambigu
  const franc = require('franc-min');
  const langCode = franc(text, { only: ['fra', 'eng'] });
  return langCode === 'fra' ? 'fr' : 'en';
};