import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaFax } from "react-icons/fa";
import headerImage from "../assets/Business-phones-entreprise.jpg";
import Select from 'react-select';
import axios from "axios";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    serviceConcerned: "",
    message: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSelectChange = (option) => {
    setFormData({ ...formData, serviceConcerned: option.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/contact", formData);
      alert("Votre message a été envoyé !");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        serviceConcerned: "",
        message: ""
      });
    } catch (err) {
      alert("Erreur lors de l'envoi !");
      console.error(err);
    }
  };

  const options = [
    { value: 'etudes', label: "Bureau d'études" },
    { value: 'fabrication', label: 'Fabrication' },
    { value: 'installation', label: 'Installation' },
    { value: 'maintenance', label: 'Maintenance' },
    { value: 'autre', label: 'Autre demande' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* En-tête */}
      <div className="relative">
        <img src={headerImage} alt="NISATEL Contact" className="w-full h-96 object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-orange-600/60 z-10" />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <motion.h1 className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              <span className="text-orange-400">Contactez</span> notre équipe
            </motion.h1>
            <motion.p className="text-xl font-medium text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}>
              Nous sommes à votre écoute pour répondre à vos questions.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Formulaire */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Informations de contact */}
        <div className="space-y-6">
          {[{
            icon: <FiPhone />, title: "Téléphone", info: "+212 5 37 41 02 57", link: "tel:+212537410257"
          }, {
            icon: <FaFax />, title: "Fax", info: "+212 5 37 41 02 26"
          }, {
            icon: <FiMail />, title: "Email", info: "contact@nisatel.ma", link: "mailto:contact@nisatel.ma"
          }, {
            icon: <FiMapPin />, title: "Adresse", info: "06, Résidence Kader, Mers El Kheir, Témara – Maroc"
          }].map((item, i) => (
            <div key={i} className="flex items-start p-6 bg-white rounded-lg shadow-sm">
              <div className="p-3 bg-blue-100 text-blue-900 rounded-lg">{item.icon}</div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                {item.link ? (
                  <a href={item.link} className="text-blue-700 hover:underline">{item.info}</a>
                ) : <p>{item.info}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input id="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Nom complet" className="p-3 border rounded w-full" />
            <input id="company" value={formData.company} onChange={handleChange} placeholder="Société" className="p-3 border rounded w-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="email" id="email" value={formData.email} onChange={handleChange} required placeholder="Email" className="p-3 border rounded w-full" />
            <input id="phone" value={formData.phone} onChange={handleChange} placeholder="Téléphone" className="p-3 border rounded w-full" />
          </div>
          <Select options={options} value={options.find(o => o.value === formData.serviceConcerned)} onChange={handleSelectChange} placeholder="Service concerné" className="w-full" />
          <textarea id="message" rows="4" value={formData.message} onChange={handleChange} required placeholder="Votre message" className="w-full p-3 border rounded" />
          <button type="submit" className="w-full flex justify-center items-center bg-blue-900 text-white p-3 rounded-md hover:opacity-90">
            Envoyer le message <FiSend className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
}
