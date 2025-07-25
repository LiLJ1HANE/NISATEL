import React from 'react';

const applications = [
  {
    title: "Téléphonie Mobile",
    description: "Réseaux de téléphonie mobile pour tout opérateur",
    image: null,
  },
  {
    title: "Sécurité & Secours",
    description: "Réseaux des services de sécurité et secours (Défense, SDIS, Police, Gendarmerie, ...)",
    image: null,
  },
  {
    title: "Transports",
    description: "Réseaux de transports (autoroutes, ferroviaire, aérien)",
    image: null,
  },
  {
    title: "Radiocommunication Privée",
    description: "Réseaux de radiocommunication privée (taxis, météo, ...)",
    image: null,
  },
  {
    title: "Radiodiffusion",
    description: "Radiodiffusion (radio AM, radio FM)",
    image: null,
  },
  {
    title: "Mâts de mesure",
    description: "Mâts de mesure (Éolien, ...)",
    image: null,
  },
];

const topImage = "/src/assets/enterprise-wireless-network.jpg";
const midImage1 = "/src/assets/Pylones_treillis_autoportants.jpg";
const midImage2 = "/src/assets/Business-phones-entreprise.jpg";

export default function ApplicationsPage() {
  return (
    <section className="w-full px-0 py-0 md:py-0 pt-[72px]">
      {/* Image en haut en full width avec overlay blur et titre */}
      <div className="relative w-full h-[320px] md:h-[480px] flex items-center justify-center overflow-hidden">
        <img
          src={topImage}
          alt="Applications télécom"
          className="absolute inset-0 object-cover object-center w-full h-full transition-transform duration-700 ease-in-out scale-100 md:scale-105 animate-fade-in"
        />
        {/* Overlay blur + foncé */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
        {/* Titre centré */}
        <h1 className="absolute inset-0 z-10 flex items-center justify-center text-3xl font-bold text-center text-orange-500 select-none md:text-5xl drop-shadow-lg animate-slide-down">
          <span className="w-full">Applications</span>
        </h1>
      </div>
      {/* Description */}
      <p className="max-w-2xl px-4 mx-auto mt-6 mb-10 text-base text-center text-gray-700 md:text-lg animate-fade-in">
        Découvrez les principaux domaines d'application de nos produits et solutions pour les réseaux de télécommunication et d'énergie.
      </p>
      {/* Applications list avec animation */}
      <div className="grid max-w-4xl gap-8 px-4 mx-auto mb-12 md:grid-cols-2">
        {applications.map((app, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 p-5 transition-transform duration-500 rounded-lg shadow bg-white/80 hover:-translate-y-2 hover:shadow-xl animate-fade-in"
            style={{ animationDelay: `${150 + idx * 80}ms` }}
          >
            <span className="flex-shrink-0 mt-1">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline-block text-orange-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <div>
              <h2 className="mb-1 text-lg font-semibold text-blue-500">
                {app.title}
              </h2>
              <p className="text-base text-gray-800">{app.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Deux images au milieu avec animation */}
      <div className="flex flex-col items-center justify-center max-w-4xl gap-6 px-4 mx-auto mb-8 md:flex-row">
        <img src={midImage1} alt="Pylônes treillis" className="object-cover w-full transition-transform duration-700 rounded-lg shadow-md md:w-1/2 max-h-56 hover:scale-105 animate-fade-in" style={{ animationDelay: '100ms' }} />
        <img src={midImage2} alt="Téléphonie entreprise" className="object-cover w-full transition-transform duration-700 rounded-lg shadow-md md:w-1/2 max-h-56 hover:scale-105 animate-fade-in" style={{ animationDelay: '200ms' }} />
      </div>
      {/* Animations CSS */}
      <style>{`
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.8s forwards;
        }
        .animate-slide-down {
          opacity: 0;
          transform: translateY(-30px);
          animation: slideDown 0.7s forwards;
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        @keyframes slideDown {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}