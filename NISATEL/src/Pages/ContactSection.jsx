import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function ContactSection({ formData, handleChange, handleSubmit }) {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col gap-12 md:flex-row">
          <motion.div
            className="flex-1"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-blue-900">Contactez Nos Experts</h2>
            <p className="mb-8 text-gray-600">Nos équipes techniques sont à votre disposition.</p>
            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <FiPhone />
                <a href="tel:+212537410257" className="text-blue-700 hover:underline">+212 5 37 41 02 57</a>
              </div>
              <div className="flex items-center gap-4">
                <FiMail />
                <a href="mailto:contact@nisatel.ma" className="text-blue-700 hover:underline">contact@nisatel.ma</a>
              </div>
              <div className="flex items-center gap-4">
                <FiMapPin />
                <p>06, Résidence Kader, Mers El Kheir, Témara</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="flex-1 space-y-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { id: "fullName", label: "Nom complet", required: true },
              { id: "company", label: "Société" },
              { id: "email", label: "Email", type: "email", required: true },
              { id: "phone", label: "Téléphone" },
              { id: "serviceConcerned", label: "Service concerné", type: "select" },
              { id: "message", label: "Message", type: "textarea", required: true }
            ].map(({ id, label, type = "text", required }) => (
              <div key={id} className="space-y-2">
                <label htmlFor={id} className="font-medium">{label}</label>
                {type === "textarea" ? (
                  <textarea
                    id={id}
                    name={id}
                    rows="4"
                    value={formData[id]}
                    onChange={handleChange}
                    required={required}
                    className="w-full p-3 border rounded"
                  />
                ) : type === "select" ? (
                  <select
                    id={id}
                    name={id}
                    value={formData[id]}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="etudes">Bureau d'études</option>
                    <option value="fabrication">Fabrication</option>
                    <option value="installation">Installation</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="autre">Autre demande</option>
                  </select>
                ) : (
                  <input
                    id={id}
                    name={id}
                    type={type}
                    value={formData[id]}
                    onChange={handleChange}
                    required={required}
                    className="w-full p-3 border rounded"
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full px-6 py-3 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Envoyer la demande
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
