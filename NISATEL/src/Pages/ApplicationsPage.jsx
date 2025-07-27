import React from 'react';

const ApplicationPage = () => {
  const companyOverview = {
    title: "NISATEL - Excellence en télécommunications",
    description: "Leader marocain indépendant dans le développement, la fabrication et l'installation d'infrastructures de télécommunication haut de gamme. Nous concevons des solutions sur mesure pour les propriétaires, aménageurs et exploitants de réseaux radio à travers le Maroc et au-delà.",
    stats: [
      { value: "15+", label: "Ans d'expérience" },
      { value: "500+", label: "Projets réalisés" },
      { value: "100%", label: "Satisfaction client" }
    ]
  };

  const applications = [
    {
      image: "/images/mobile-networks.jpg",
      title: "Réseaux de téléphonie mobile",
      description: "Solutions complètes pour opérateurs mobiles avec une couverture optimale"
    },
    {
      image: "/images/emergency-comms.jpg",
      title: "Services de sécurité et secours",
      description: "Systèmes critiques pour Défense, Police, Pompiers et services d'urgence"
    },
    {
      image: "/images/transport-networks.jpg",
      title: "Réseaux de transports intelligents",
      description: "Infrastructures pour autoroutes, réseaux ferroviaires et aéroports"
    },
    {
      image: "/images/private-comms.jpg",
      title: "Radiocommunication privés",
      description: "Solutions dédiées pour taxis, services météo et entreprises"
    },
    {
      image: "/images/broadcasting.jpg",
      title: "Radiodiffusion professionnelle",
      description: "Infrastructures pour radios AM/FM de qualité studio"
    },
    {
      image: "/images/measurement.jpg",
      title: "Mâts de mesure technique",
      description: "Solutions précises pour parcs éoliens et mesures environnementales"
    }
  ];

  return (
    <div className="min-h-screen ">
      <div className="relative bg-blue-900  overflow-hidden">
        <div className="absolute inset-0 "></div>

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
            <span>Nos domaines</span>
            <span className=" text-orange-500 mt-2"><nbsp> </nbsp>d'expertise</span>
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
                  src={app.image}
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