import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApplicationPage = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/applications")
      .then((res) => setApplications(res.data))
      .catch((err) => console.error("Erreur de chargement des applications :", err));
  }, []);

  return (
    <div className="min-h-screen">
      <div className="relative bg-blue-900 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-15 text-center">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Expertise Technique en <span className="text-orange-400">Télécommunications</span>
          </h1>
          <div className="mt-6 inline-block px-6 py-3 rounded-full bg-orange-400 border border-orange-400 text-white text-2xl font-bold shadow-md">
            +9 ans d’expérience à votre service
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">
            <span>Nos domaines</span> <span className="text-orange-500">d'expertise</span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-blue-600 mx-auto">
            Des solutions d'infrastructure réseau fiables, rapides et adaptées aux professionnels exigeants.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((app, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={app.imageUrl}
                  alt={app.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{app.title}</h3>
                <p className="text-gray-600">{app.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-10 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="block">Besoin d'une expertise technique ?</span>
            <span className="block text-orange-400 mt-2">Nos ingénieurs vous conseillent</span>
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-800 bg-white hover:bg-gray-50"
              >
                Contactez Nous
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
