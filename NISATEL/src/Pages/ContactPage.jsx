import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaFax } from "react-icons/fa";
import headerImage from "../assets/Business-phones-entreprise.jpg";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pourriez ajouter la logique de soumission réelle
    alert("Votre message a été envoyé. Nous vous contacterons bientôt.");
  };

  const contactItems = [
    {
      icon: <FiPhone className="text-xl" />,
      title: "Téléphone",
      info: "+212 5 37 41 02 57",
      link: "tel:+212537410257",
      className: "bg-orange-100 text-orange-600",
    },
    {
      icon: <FaFax className="text-xl" />,
      title: "Fax",
      info: "+212 5 37 41 02 26",
      className: "bg-violet-100 text-violet-600",
    },
    {
      icon: <FiMail className="text-xl" />,
      title: "Email",
      info: "contact@nisatel.ma",
      link: "mailto:contact@nisatel.ma",
      className: "bg-orange-100 text-orange-600",
    },
    {
      icon: <FiMapPin className="text-xl" />,
      title: "Adresse",
      info: "06, Résidence Kader, Mers El Kheir, Témara – Maroc",
      className: "bg-violet-100 text-violet-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/80 to-orange-600/60 z-10" />
        <img 
          src={headerImage} 
          alt="NISATEL Contact" 
          className="w-full h-96 object-cover object-center"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contactez notre équipe
            </motion.h1>
            <motion.p
              className="text-lg text-orange-100 md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Nous sommes à votre écoute pour répondre à vos questions et vous accompagner dans vos projets.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Nos coordonnées</h2>
              <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
              <p className="mt-4 text-gray-600">
                N'hésitez pas à nous contacter par téléphone, email ou à nous rendre visite dans nos bureaux.
              </p>
            </div>

            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                whileHover={{ y: -2 }}
              >
                <div className={`p-3 rounded-lg ${item.className} flex-shrink-0`}>
                  {item.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      className="mt-1 text-gray-600 hover:text-orange-600 transition-colors duration-200 block"
                    >
                      {item.info}
                    </a>
                  ) : (
                    <p className="mt-1 text-gray-600">{item.info}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-sm"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Envoyez-nous un message</h2>
              <div className="w-20 h-1 bg-violet-500 rounded-full"></div>
              <p className="mt-4 text-gray-600">
                Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Société
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service concerné <span className="text-orange-500">*</span>
                </label>
                <select
                  id="service"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="etudes">Bureau d'études</option>
                  <option value="fabrication">Fabrication</option>
                  <option value="installation">Installation</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="autre">Autre demande</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Votre message <span className="text-orange-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-violet-600 text-white font-medium rounded-md hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
              >
                <span>Envoyer le message</span>
                <FiSend className="text-lg" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Notre localisation</h2>
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="Localisation NISATEL"
              src="https://maps.google.com/maps?q=06%2C%20Résidence%20Kader%2C%20Mers%20El%20Kheir%2C%20Témara%20Maroc&t=&z=17&ie=UTF8&iwloc=&output=embed"
              className="w-full h-96 border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="mt-4 text-center text-gray-600">
            <p>06, Résidence Kader, Mers El Kheir, Témara – Maroc</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}