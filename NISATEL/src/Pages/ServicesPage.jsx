import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Styled Components
const ServicesPageContainer = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
  padding: 80px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h1 {
    font-size: 2.8rem;
    color: #2c3e50;
    margin-bottom: 15px;
    position: relative;
    display: inline-block;

    &:after {
      content: '';
      position: absolute;
      width: 70px;
      height: 4px;
      background-color: #3498db;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  p {
    font-size: 1.2rem;
    color: #7f8c8d;
    max-width: 800px;
    margin: 0 auto;
  }
`;

const ServiceSection = styled.section`
  margin-bottom: 80px;
`;

const ServiceContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ServiceText = styled.div`
  flex: 1;
  min-width: 300px;

  h2 {
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 20px;
    position: relative;
    display: inline-block;

    &:after {
      content: '';
      position: absolute;
      width: 50px;
      height: 3px;
      background-color: #f39c12;
      bottom: -10px;
      left: 0;
    }
  }

  p {
    margin-bottom: 20px;
    color: #555;
    font-size: 1.1rem;
  }

  ul {
    margin-bottom: 30px;
  }

  ul li {
    margin-bottom: 12px;
    color: #555;
    position: relative;
    padding-left: 25px;
    font-size: 1.05rem;

    &:before {
      content: '•';
      color: #3498db;
      font-size: 1.8rem;
      position: absolute;
      left: 0;
      top: -7px;
    }
  }
`;

const ServiceImageContainer = styled.div`
  flex: 1;
  min-width: 300px;
  position: relative;
  width: 350px;
  height: 350px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  border: 4px solid #3498db;
  margin: 0 auto;
  
  &:hover {
    border-color: #f39c12;
    transition: border-color 0.3s ease;
  }
`;

const ServiceImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;

  ${ServiceImageContainer}:hover & {
    transform: scale(1.1);
  }
`;

const ServiceButton = styled(motion.button)`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;

  &:hover {
    background-color: #2980b9;
  }

  i {
    margin-left: 8px;
  }
`;

const TelecomServicesSection = styled.section`
  background-color: #f9f9f9;
  padding: 80px 0;
  margin-top: 60px;
`;

const TelecomServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const TelecomServiceCard = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border-top: 4px solid #3498db;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #f39c12;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover:before {
    transform: scaleX(1);
  }
`;

const TelecomServiceIcon = styled.div`
  width: 70px;
  height: 70px;
  background-color: #e3f2fd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3498db;
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

// Main Component
const ServicesPage = () => {
  // Service data
  const mainServices = [
    {
      title: "Bureau d'Études",
      description: "Notre bureau d'études propose des solutions sur-mesure pour s'adapter à chaque cahier des charges client (CCTP).",
      features: [
        "Études techniques pour dimensionnement des pylônes selon normes (EUROCODES, BAEL, CM66, NV65, DTU...)",
        "Dimensionnement de structures métalliques et génie civil (fondations, ferraillage, ancrages...)",
        "Études de charge et avis de faisabilité sur structures existantes",
        "Solutions de renforcement pour augmentation de charge utile",
        "Logiciels spécialisés : ROBOT STRUCTURAL ANALYSIS, SOLIDWORKS, AUTOCAD"
      ],
      image: "https://images.unsplash.com/photo-1581093196277-1c8d47ab5b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      shape: "circle"
    },
    {
      title: "Fabrication",
      description: "Tous nos produits sont fabriqués en interne dans notre usine de 3500m² située à Témara.",
      features: [
        "Chaudronnerie et soudage par des professionnels qualifiés",
        "Galvanisation à chaud par notre partenaire historique",
        "Option de mise en peinture après galvanisation",
        "Contrôle qualité à chaque étape de production",
        "Capacité à répondre aux demandes spécifiques et urgentes"
      ],
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      shape: "rounded"
    },
    {
      title: "Montage sur Site",
      description: "Nos équipes de monteurs assurent l'installation de nos produits sur l'ensemble du territoire national.",
      features: [
        "Livraison et assemblage par personnel habilité",
        "Camions plateau équipés de grues auxiliaires",
        "Parc de poids lourds dédié",
        "Levage par grutage ou héliportage pour sites difficiles",
        "Monteurs formés et habilités"
      ],
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      shape: "hexagon"
    },
    {
      title: "Maintenance",
      description: "Nous proposons des prestations techniques sur tout type de structures métalliques.",
      features: [
        "Visites de contrôle régulières",
        "Maintenance préventive et corrective",
        "Expertises post-incendie, vandalisme ou événements climatiques",
        "Solutions de renforcement structurel",
        "Rapports détaillés avec préconisations techniques"
      ],
      image: "https://images.unsplash.com/photo-1581093057305-5e0d6a7cd5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      shape: "default"
    }
  ];

  const telecomServices = [
    {
      title: "Installation des réseaux télécom",
      icon: "fas fa-network-wired",
      description: "Déploiement complet d'infrastructures télécoms adaptées à vos besoins spécifiques."
    },
    {
      title: "Entretien des réseaux télécom",
      icon: "fas fa-tools",
      description: "Maintenance préventive et corrective pour garantir la continuité de service."
    },
    {
      title: "Téléphonie IP & VOIP",
      icon: "fas fa-phone-alt",
      description: "Solutions de téléphonie sur IP avec PABX/IPBX pour une communication unifiée."
    },
    {
      title: "Mobilité intra/inter site",
      icon: "fas fa-mobile-alt",
      description: "Gestion des communications mobiles entre différents sites géographiques."
    },
    {
      title: "Convergence fixe/mobile",
      icon: "fas fa-sync-alt",
      description: "Intégration parfaite entre vos systèmes de téléphonie fixe et mobile."
    },
    {
      title: "Interphone & contrôle d'accès",
      icon: "fas fa-door-open",
      description: "Systèmes de communication et sécurité pour vos accès physiques."
    },
    {
      title: "Visioconférence",
      icon: "fas fa-video",
      description: "Solutions professionnelles de communication visuelle haute qualité."
    },
    {
      title: "Couplage téléphonie-informatique",
      icon: "fas fa-laptop-code",
      description: "Intégration CTI pour optimiser vos processus métiers."
    }
  ];

  return (
    <ServicesPageContainer>
      <Container>
        <SectionHeader>
          <h1>Nos Services</h1>
          <p>
            Avec NISATEL, bénéficiez d'un accompagnement complet de la conception à la maintenance de vos infrastructures, 
            ainsi que de solutions télécoms innovantes pour optimiser vos communications.
          </p>
        </SectionHeader>

        {mainServices.map((service, index) => (
          <ServiceSection key={index}>
            <ServiceContent>
              {index % 2 === 0 ? (
                <>
                  <ServiceText>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                    <ul>
                      {service.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <ServiceButton
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      En savoir plus <i className="fas fa-arrow-right"></i>
                    </ServiceButton>
                  </ServiceText>
                  <ServiceImageContainer shape={service.shape}>
                    <ServiceImage image={service.image} />
                  </ServiceImageContainer>
                </>
              ) : (
                <>
                  <ServiceImageContainer shape={service.shape}>
                    <ServiceImage image={service.image} />
                  </ServiceImageContainer>
                  <ServiceText>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                    <ul>
                      {service.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <ServiceButton
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      En savoir plus <i className="fas fa-arrow-right"></i>
                    </ServiceButton>
                  </ServiceText>
                </>
              )}
            </ServiceContent>
          </ServiceSection>
        ))}

        <TelecomServicesSection>
          <Container>
            <SectionHeader>
              <h1>Services Télécoms</h1>
              <p>
                Avec NISATEL, vous disposez d'une large gamme d'équipements télécom, de services et de conseils 
                pour optimiser les performances de votre activité et réduire vos coûts.
              </p>
            </SectionHeader>

            <TelecomServicesGrid>
              {telecomServices.map((service, index) => (
                <TelecomServiceCard
                  key={index}
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <TelecomServiceIcon>
                    <i className={service.icon}></i>
                  </TelecomServiceIcon>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </TelecomServiceCard>
              ))}
            </TelecomServicesGrid>
          </Container>
        </TelecomServicesSection>
      </Container>
    </ServicesPageContainer>
  );
};

export default ServicesPage;