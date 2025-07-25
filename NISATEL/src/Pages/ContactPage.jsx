import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaFax } from "react-icons/fa";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulaire simulé ! Merci pour votre message.");
  };

  return (
    <div className="min-h-screen pt-[150px] p-6 text-gray-800" style={{ background: 'linear-gradient(to bottom, #ff9800 0%, #fff 60%)' }}>
      {/* Titre principal */}
      <motion.h1
        className="mb-3 text-4xl font-bold text-center text-blue-900"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Contactez Nos Experts
      </motion.h1>

      <motion.p
        className="max-w-2xl mx-auto mb-12 text-lg text-center text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Nos équipes techniques sont à votre disposition pour étudier votre projet et vous proposer la solution la plus adaptée.
      </motion.p>

      {/* Informations de contact */}
      <motion.div
        className="grid max-w-6xl gap-8 mx-auto mb-16 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Téléphone */}
        <motion.div
          className="p-6 border-l-4 border-blue-600 shadow bg-blue-50 rounded-xl"
          whileHover={{ scale: 1.02 }}
        >
          <FiPhone className="mb-3 text-3xl text-blue-700" />
          <h3 className="mb-1 text-xl font-semibold">Téléphone</h3>
          <p>+212 5 37 41 02 57</p>
        </motion.div>

        {/* Fax */}
        <motion.div
          className="p-6 border-l-4 border-blue-600 shadow bg-blue-50 rounded-xl"
          whileHover={{ scale: 1.02 }}
        >
          <FaFax className="mb-3 text-3xl text-blue-700" />
          <h3 className="mb-1 text-xl font-semibold">Fax</h3>
          <p>+212 5 37 41 02 26</p>
        </motion.div>

        {/* Email */}
        <motion.div
          className="p-6 border-l-4 border-blue-600 shadow bg-blue-50 rounded-xl"
          whileHover={{ scale: 1.02 }}
        >
          <FiMail className="mb-3 text-3xl text-blue-700" />
          <h3 className="mb-1 text-xl font-semibold">Email</h3>
          <p>contact@nisatel.ma</p>
        </motion.div>

        {/* Adresse */}
        <motion.div
          className="p-6 border-l-4 border-blue-600 shadow bg-blue-50 rounded-xl md:col-span-2 lg:col-span-3"
          whileHover={{ scale: 1.02 }}
        >
          <FiMapPin className="mb-3 text-3xl text-blue-700" />
          <h3 className="mb-1 text-xl font-semibold">Adresse</h3>
          <p>06, Résidence Kader, Mers El Kheir, Témara – Maroc</p>
        </motion.div>
      </motion.div>

      {/* Formulaire de contact */}
      <motion.div
        className="max-w-4xl p-8 mx-auto bg-white border border-gray-100 shadow-lg rounded-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="mb-6 text-2xl font-bold text-blue-900">Envoyez-nous un message</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <input
            type="text"
            placeholder="Nom complet"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Société"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            placeholder="Téléphone"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
            required
          >
            <option value="">Service concerné</option>
            <option value="etudes">Bureau d'études</option>
            <option value="fabrication">Fabrication</option>
            <option value="installation">Installation</option>
            <option value="maintenance">Maintenance</option>
            <option value="autre">Autre demande</option>
          </select>
          <textarea
            placeholder="Décrivez votre projet"
            rows="5"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 bg-blue-600 rounded-md hover:bg-blue-700 md:col-span-2"
          >
            Envoyer la demande
          </button>
        </form>
      </motion.div>
    </div>
  );
}
import { Link } from 'react-router-dom';