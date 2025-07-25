import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulaire simulé ! Merci pour votre message.");
  };

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col gap-12 md:flex-row">
          {/* Infos */}
          <motion.div
            className="flex-1 min-w-[300px]"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-blue-900">Contactez Nos Experts</h2>
            <p className="mb-8 text-gray-600">
              Nos équipes techniques sont à votre disposition pour étudier votre projet et vous proposer la solution la plus adaptée.
            </p>
            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 text-xl text-blue-600 rounded-full bg-blue-50">
                  <FiPhone />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Téléphone</h4>
                  <a href="tel:+212537410257" className="text-blue-700 hover:underline">+212 5 37 41 02 57</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 text-xl text-blue-600 rounded-full bg-blue-50">
                  <FiMail />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <a href="mailto:contact@nisatel.ma" className="text-blue-700 hover:underline">contact@nisatel.ma</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 text-xl text-blue-600 rounded-full bg-blue-50">
                  <FiMapPin />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Adresse</h4>
                  <p>06, Résidence Kader, Mers El Kheir, Témara</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.form
            className="flex-1 min-w-[300px] space-y-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <div className="space-y-2">
              <label htmlFor="name" className="font-medium">Nom complet</label>
              <input type="text" id="name" placeholder="Votre nom" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="font-medium">Société</label>
              <input type="text" id="company" placeholder="Votre société" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="font-medium">Email</label>
              <input type="email" id="email" placeholder="Votre email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="font-medium">Téléphone</label>
              <input type="tel" id="phone" placeholder="Votre téléphone" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="space-y-2">
              <label htmlFor="service" className="font-medium">Service concerné</label>
              <select id="service" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                <option value="">Sélectionnez un service</option>
                <option value="etudes">Bureau d'études</option>
                <option value="fabrication">Fabrication</option>
                <option value="installation">Installation</option>
                <option value="maintenance">Maintenance</option>
                <option value="autre">Autre demande</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="font-medium">Message</label>
              <textarea id="message" rows="4" placeholder="Décrivez votre projet" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
            </div>
            <button type="submit" className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 bg-blue-600 rounded-md hover:bg-blue-700">
              Envoyer la demande
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
} 