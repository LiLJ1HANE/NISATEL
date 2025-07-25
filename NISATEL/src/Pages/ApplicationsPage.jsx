import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaMobileAlt, FaShieldAlt, FaBroadcastTower, FaRoad, FaTaxi, FaWind } from 'react-icons/fa';

// Styled Components
const ApplicationsContainer = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
  position: relative;
  overflow: hidden;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(rgba(52, 152, 219, 0.1) 2px, transparent 2px);
  background-size: 40px 40px;
  z-index: 0;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 60px;

  h2 {
    font-size: 3rem;
    color: #2c3e50;
    margin-bottom: 20px;
    background: linear-gradient(to right, #3498db, #2c3e50);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }

  p {
    font-size: 1.2rem;
    color: #7f8c8d;
    max-width: 700px;
    margin: 0 auto;
  }
`;

const ApplicationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ApplicationCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border-top: 4px solid #3498db;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
    z-index: 0;
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: white;
  font-size: 1.8rem;
  box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
`;

const ApplicationTitle = styled.h3`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 15px;
`;

const ApplicationList = styled.ul`
  margin-top: auto;
`;

const ApplicationItem = styled.li`
  position: relative;
  padding-left: 25px;
  margin-bottom: 10px;
  color: #555;
  font-size: 1rem;
  line-height: 1.5;

  &:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #3498db;
    font-weight: bold;
  }
`;

const HighlightBar = styled(motion.div)`
  height: 5px;
  background: linear-gradient(90deg, #3498db, #2c3e50);
  border-radius: 5px;
  margin-top: 30px;
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

const ApplicationsPage = () => {

    const applications = [
        {
          id: 1,
          title: "Téléphonie Mobile",
          icon: <FaMobileAlt />,
          items: [
            "Réseaux pour tout opérateur",
            "Infrastructures 4G/5G",
            "Sites partagés",
            "Solutions multi-opérateurs"
          ]
        },
        {
          id: 2,
          title: "Sécurité & Secours",
          icon: <FaShieldAlt />,
          items: [
            "Réseaux pour la Défense",
            "Solutions pour SDIS",
            "Communications Police/Gendarmerie",
            "Réseaux d'urgence critiques"
          ]
        },
        {
          id: 3,
          title: "Transports",
          icon: <FaRoad />,
          items: [
            "Infrastructures autoroutières",
            "Réseaux ferroviaires",
            "Communications aéroportuaires",
            "Systèmes de signalisation"
          ]
        },
        {
          id: 4,
          title: "Radiocommunication Privée",
          icon: <FaTaxi />,
          items: [
            "Réseaux pour taxis",
            "Systèmes météorologiques",
            "Communications industrielles",
            "Réseaux professionnels"
          ]
        },
        {
          id: 5,
          title: "Radiodiffusion",
          icon: <FaBroadcastTower />,
          items: [
            "Radio AM/FM",
            "Tour de transmission",
            "Antennes de diffusion",
            "Solutions haute puissance"
          ]
        },
        {
          id: 6,
          title: "Mâts de Mesure",
          icon: <FaWind />,
          items: [
            "Solutions éoliennes",
            "Stations météo",
            "Capteurs environnementaux",
            "Infrastructures de surveillance"
          ]
        }
      ];
  return (
    <ApplicationsContainer>
      <BackgroundPattern />
      <ContentWrapper>
        <SectionHeader
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Principaux Domaines d'Applications</h2>
          <p>Nos solutions s'adaptent à divers secteurs nécessitant des infrastructures de télécommunication robustes et fiables</p>
        </SectionHeader>

        <ApplicationsGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {applications.map((app, index) => (
            <ApplicationCard
              key={app.id}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
            >
              <CardContent>
                <IconWrapper>
                  {app.icon}
                </IconWrapper>
                <ApplicationTitle>{app.title}</ApplicationTitle>
                <ApplicationList>
                  {app.items.map((item, i) => (
                    <ApplicationItem key={i}>{item}</ApplicationItem>
                  ))}
                </ApplicationList>
                <HighlightBar
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                />
              </CardContent>
            </ApplicationCard>
          ))}
        </ApplicationsGrid>
      </ContentWrapper>
    </ApplicationsContainer>
  );
};

export default ApplicationsPage;