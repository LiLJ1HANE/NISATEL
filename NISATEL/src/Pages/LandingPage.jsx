import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled, { keyframes } from 'styled-components';

// Animations
const pulseAnimation = keyframes`
  0% { transform: scale(1); opacity: 0.1; }
  50% { transform: scale(1.05); opacity: 0.2; }
  100% { transform: scale(1); opacity: 0.1; }
`;

// Styled Components
const LandingPageContainer = styled(motion.div)`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
  overflow-x: hidden;
  background: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
  h2 {
    font-size: 2.5rem;
    color: #154c79;
    margin-bottom: 15px;
    position: relative;
    display: inline-block;
    &:after {
      content: '';
      position: absolute;
      width: 50px;
      height: 3px;
      background-color: #154c79;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  p {
    font-size: 1.1rem;
    color: #7f8c8d;
    max-width: 700px;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    h2 { font-size: 2rem; }
    p { font-size: 1rem; }
  }
`;

// Hero Slider Styles
const HeroSlider = styled.div`
  position: relative;
  height: 80vh;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 50vh;
  }
  @media (max-width: 480px) {
    height: 35vh;
  }
`;

const Slide = styled.div`
  height: 80vh;
  background-size: cover;
  background-position: center;
  position: relative;
  background-image: ${props => props.bgImage ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${props.bgImage})` : 'none'};
  @media (max-width: 768px) {
    height: 50vh;
  }
  @media (max-width: 480px) {
    height: 35vh;
  }
`;

const SlideContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  width: 80%;
  max-width: 800px;
  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  p {
    font-size: 1.3rem;
    margin-bottom: 30px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 768px) {
    h1 { font-size: 2rem; }
    p { font-size: 1rem; }
  }
  @media (max-width: 480px) {
    h1 { font-size: 1.2rem; }
    p { font-size: 0.9rem; }
  }
`;

const CTAButton = styled(motion.button)`
  background-color: #154c79;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1.1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  @media (max-width: 480px) {
    padding: 10px 18px;
    font-size: 0.9rem;
  }
`;

// About Section Styles
const AboutSection = styled.section`
  padding: 100px 0;
  background-color: #f9f9f9;
`;

const AboutContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const AboutContent = styled(motion.div)`
  flex: 1;
  min-width: 300px;
  padding-right: 50px;

  h2 {
    font-size: 2.2rem;
    color: #2c3e50;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 15px;
    color: #555;
  }
`;

const LearnMoreButton = styled(motion.button)`
  background-color: #154c79;
  color: white;
  border: none;
  padding: 10px 25px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  font-weight: 600;
`;

const AboutImage = styled(motion.div)`
  flex: 1;
  min-width: 300px;
  position: relative;
  height: 400px;
`;

const CircularImageContainer = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  margin: 0 auto;
`;

const CircularImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-image: url('https://images.unsplash.com/photo-1581093196277-1c8d47ab5b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80');
  background-size: cover;
  background-position: center;
  z-index: 2;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const CircleDecoration = styled.div`
  position: absolute;
  width: 110%;
  height: 110%;
  border-radius: 50%;
  background-color: rgba(52, 152, 219, 0.1);
  top: -5%;
  left: -5%;
  z-index: 1;
  animation: ${pulseAnimation} 3s infinite;
`;

const CircleDecoration2 = styled.div`
  position: absolute;
  width: 120%;
  height: 120%;
  border-radius: 50%;
  border: 2px dashed rgba(52, 152, 219, 0.3);
  top: -10%;
  left: -10%;
  z-index: 0;
`;

// Services Section Styles
const ServicesSection = styled.section`
  padding: 100px 0;
  background-color: white;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ServiceCard = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: #e3f2fd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: #3498db;
  font-size: 2rem;
`;

const ServiceButton = styled(motion.button)`
  background-color: #154c79;
  color: white;
  border: none;
  padding: 8px 20px;
  font-size: 0.9rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
`;

// Products Section Styles
const ProductsSection = styled.section`
  padding: 100px 0;
  background-color: #f9f9f9;
`;

const ProductsTabs = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const TabsHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
`;

const TabButton = styled.button`
  flex: 1;
  padding: 15px;
  background: none;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props => props.active ? '#154c79' : '#7f8c8d'};
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: ${props => props.active ? '3px solid #154c79' : 'none'};

  &:hover {
    color: #154c79;
  }
`;

const TabPane = styled(motion.div)`
  padding: 30px;
`;

const ProductHighlight = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const ProductImage = styled.div`
  flex: 1;
  min-width: 300px;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  margin-right: 30px;
  background-image: ${props => props.bgImage ? `url(${props.bgImage})` : 'none'};
`;

const ProductDetails = styled.div`
  flex: 1;
  min-width: 300px;

  h3 {
    font-size: 1.8rem;
    color: #2c3e50;
    margin-bottom: 20px;
  }

  ul {
    margin-bottom: 25px;
  }

  ul li {
    margin-bottom: 10px;
    color: #555;
    position: relative;
    padding-left: 20px;

    &:before {
      content: '•';
      color: #3498db;
      font-size: 1.5rem;
      position: absolute;
      left: 0;
      top: -5px;
    }
  }
`;

const ProductButton = styled(motion.button)`
  background-color: #154c79;
  color: white;
  border: none;
  padding: 10px 25px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
`;

// Clients Section Styles
const ClientsSection = styled.section`
  padding: 100px 0;
  background-color: white;
`;

const ClientCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const ClientCategory = styled(motion.div)`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
`;

const CategoryIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: #e3f2fd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: #3498db;
  font-size: 2rem;
`;

// Testimonials Section Styles
const TestimonialsSection = styled.section`
  padding: 100px 0;
  background-color: #f9f9f9;
`;

const TestimonialsSlider = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const TestimonialCard = styled.div`
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin: 0 15px;
`;

const TestimonialContent = styled.div`
  text-align: center;

  p {
    font-size: 1.1rem;
    font-style: italic;
    color: #555;
    margin-bottom: 20px;
  }
`;

const TestimonialAuthor = styled.div`
  h4 {
    font-size: 1.2rem;
    color: #2c3e50;
    margin-bottom: 5px;
  }

  span {
    color: #7f8c8d;
    font-size: 0.9rem;
  }
`;

// Contact Section Styles
const ContactSectionStyled = styled.section`
  padding: 100px 0;
  background-color: white;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;

const ContactInfo = styled(motion.div)`
  flex: 1;
  min-width: 300px;

  h2 {
    font-size: 2.2rem;
    color: #2c3e50;
    margin-bottom: 20px;
  }

  p {
    color: #555;
    margin-bottom: 30px;
  }
`;

const ContactDetails = styled.div`
  margin-top: 40px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e3f2fd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3498db;
  font-size: 1.2rem;
  margin-right: 15px;
`;

const ContactForm = styled(motion.form)`
  flex: 1;
  min-width: 300px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #2c3e50;
  }

  input, textarea, select {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    transition: border 0.3s ease;

    &:focus {
      outline: none;
      border-color: #3498db;
    }
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }
`;

const SubmitButton = styled(motion.button)`
  background-color: #154c79;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  width: 100%;
`;

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('pylones');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceConcerned: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message envoyé avec succès !');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          serviceConcerned: '',
          message: '',
        });
      } else {
        alert("Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      console.error(error);
      alert("Erreur réseau.");
    }
  };
  
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Opérateur Télécom Majeur",
      comment: "NISATEL a fourni des solutions de pylônes robustes pour notre réseau 4G/5G avec un professionnalisme remarquable.",
      role: "Partenaire depuis 2017"
    },
    {
      id: 2,
      name: "Ministère de l'Intérieur",
      comment: "Leur expertise en infrastructures de communication critique a été essentielle pour nos opérations de sécurité.",
      role: "Client institutionnel"
    },
    {
      id: 3,
      name: "Société Autoroutière",
      comment: "Solutions de balisage et communication parfaitement adaptées à nos besoins le long des autoroutes.",
      role: "Client transport"
    }
  ];

  // Slide images
  const slideImages = [
    'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  ];

  // Product images
  const productImages = [
    'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  ];

  return (
    <LandingPageContainer 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Slider Section */}
      <HeroSlider>
        <Slider {...sliderSettings}>
          {slideImages.map((image, index) => (
            <Slide key={index} bgImage={image}>
              <SlideContent>
                <motion.h1 variants={itemVariants}>
                  {index === 0 && "Solutions Complètes en Télécommunications"}
                  {index === 1 && "Expertise Technique Certifiée"}
                  {index === 2 && "Couverture Nationale"}
                </motion.h1>
                <motion.p variants={itemVariants}>
                  {index === 0 && "Conception, fabrication et installation d'infrastructures haut de gamme"}
                  {index === 1 && "Normes EUROCODES, BAEL, CM66, NV65, DTU"}
                  {index === 2 && "Installation et maintenance sur tout le territoire marocain"}
                </motion.p>
                <CTAButton 
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {index === 0 && "Découvrez nos services"}
                  {index === 1 && "Nos certifications"}
                  {index === 2 && "Nos réalisations"}
                </CTAButton>
              </SlideContent>
            </Slide>
          ))}
        </Slider>
      </HeroSlider>

      {/* About Section with Circular Image */}
      <AboutSection>
        <AboutContainer>
          <AboutContent
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>NISATEL - Expertise Marocaine en Télécoms</h2>
            <p>
              Fondée en 2016, NISATEL est une entreprise marocaine indépendante spécialisée dans le développement, 
              la fabrication et l'installation de pylônes et infrastructures de télécommunication. 
              Nous travaillons en étroite collaboration avec les propriétaires, aménageurs et exploitants 
              de réseaux radio pour proposer des solutions sur mesure.
            </p>
            <p>
              Notre usine de 3500m² à Témara et notre bureau d'études intégré nous permettent 
              de maîtriser toute la chaîne de valeur, de la conception à l'installation.
            </p>
            <LearnMoreButton
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Notre histoire
            </LearnMoreButton>
          </AboutContent>
          <AboutImage
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <CircularImageContainer>
              <CircularImage />
              <CircleDecoration />
              <CircleDecoration2 />
            </CircularImageContainer>
          </AboutImage>
        </AboutContainer>
      </AboutSection>

      {/* Services Preview Section */}
      <ServicesSection>
        <Container>
          <SectionHeader>
            <h2>Nos Services Clés</h2>
            <p>Des solutions complètes pour vos besoins en télécommunications</p>
          </SectionHeader>
          
          <ServicesGrid>
            <ServiceCard
              whileHover={{ y: -10, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ServiceIcon>
                <i className="fas fa-drafting-compass"></i>
              </ServiceIcon>
              <h3>Bureau d'Études</h3>
              <p>Conception sur-mesure selon normes EUROCODES, BAEL, CM66 avec nos logiciels spécialisés (ROBOT STRUCTURAL ANALYSIS, SOLIDWORKS).</p>
              <ServiceButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir plus
              </ServiceButton>
            </ServiceCard>

            <ServiceCard
              whileHover={{ y: -10, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceIcon>
                <i className="fas fa-industry"></i>
              </ServiceIcon>
              <h3>Fabrication</h3>
              <p>Production dans notre usine de 3500m² à Témara par des chaudronniers et soudeurs qualifiés, avec galvanisation à chaud.</p>
              <ServiceButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir plus
              </ServiceButton>
            </ServiceCard>

            <ServiceCard
              whileHover={{ y: -10, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ServiceIcon>
                <i className="fas fa-tools"></i>
              </ServiceIcon>
              <h3>Maintenance</h3>
              <p>Visites de contrôle, expertises post-incident et solutions de renforcement pour prolonger la durée de vie de vos installations.</p>
              <ServiceButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir plus
              </ServiceButton>
            </ServiceCard>
          </ServicesGrid>
        </Container>
      </ServicesSection>

      {/* Products Preview Section */}
      <ProductsSection>
        <Container>
          <SectionHeader>
            <h2>Nos Produits Phares</h2>
            <p>Des solutions adaptées à chaque besoin technique</p>
          </SectionHeader>
          
          <ProductsTabs>
            <TabsHeader>
              <TabButton 
                active={activeTab === 'pylones'}
                onClick={() => setActiveTab('pylones')}
              >
                Pylônes
              </TabButton>
              <TabButton 
                active={activeTab === 'wireless'}
                onClick={() => setActiveTab('wireless')}
              >
                Solutions Wireless
              </TabButton>
              <TabButton 
                active={activeTab === 'energie'}
                onClick={() => setActiveTab('energie')}
              >
                Énergie
              </TabButton>
            </TabsHeader>
            
            <div>
              {activeTab === 'pylones' && (
                <TabPane
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductHighlight>
                    <ProductImage bgImage={productImages[0]} />
                    <ProductDetails>
                      <h3>Pylônes Treillis Autoportants</h3>
                      <ul>
                        <li>Accès par échelle intérieure/extérieure ou nacelle</li>
                        <li>Silhouette constante ou à fruit</li>
                        <li>Options d'habillage et peinture personnalisée</li>
                        <li>Systèmes anti-chute et anti-intrusion intégrés</li>
                      </ul>
                      <ProductButton
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Voir la gamme
                      </ProductButton>
                    </ProductDetails>
                  </ProductHighlight>
                </TabPane>
              )}
              
              {activeTab === 'wireless' && (
                <TabPane
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductHighlight>
                    <ProductImage bgImage={productImages[1]} />
                    <ProductDetails>
                      <h3>Solutions Wireless Haut Débit</h3>
                      <ul>
                        <li>Équipements réseaux de 2Mbps à 40Gbps</li>
                        <li>Couverture Ethernet et transport optique</li>
                        <li>Installation et test de fibre optique</li>
                        <li>Réflectométrie et qualification</li>
                      </ul>
                      <ProductButton
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Voir les solutions
                      </ProductButton>
                    </ProductDetails>
                  </ProductHighlight>
                </TabPane>
              )}
              
              {activeTab === 'energie' && (
                <TabPane
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductHighlight>
                    <ProductImage bgImage={productImages[2]} />
                    <ProductDetails>
                      <h3>Solutions Énergétiques</h3>
                      <ul>
                        <li>Ateliers d'énergie de 300A à 3000A</li>
                        <li>Batteries étanches ou plomb ouvert</li>
                        <li>Onduleurs haute performance</li>
                        <li>Coffrets d'alimentation AC/DC sur mesure</li>
                      </ul>
                      <ProductButton
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Voir les configurations
                      </ProductButton>
                    </ProductDetails>
                  </ProductHighlight>
                </TabPane>
              )}
            </div>
          </ProductsTabs>
        </Container>
      </ProductsSection>

      {/* Clients & Applications Section */}
      <ClientsSection>
        <Container>
          <SectionHeader>
            <h2>Nos Domaines d'Intervention</h2>
            <p>Nous accompagnons les principaux acteurs des télécommunications et de la sécurité</p>
          </SectionHeader>
          
          <ClientCategories>
            <ClientCategory
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <CategoryIcon>
                <i className="fas fa-mobile-alt"></i>
              </CategoryIcon>
              <h3>Opérateurs Télécoms</h3>
              <p>Solutions pour réseaux 4G/5G et infrastructures partagées</p>
            </ClientCategory>
            
            <ClientCategory
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <CategoryIcon>
                <i className="fas fa-shield-alt"></i>
              </CategoryIcon>
              <h3>Sécurité & Défense</h3>
              <p>Réseaux critiques pour police, gendarmerie et protection civile</p>
            </ClientCategory>
            
            <ClientCategory
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <CategoryIcon>
                <i className="fas fa-broadcast-tower"></i>
              </CategoryIcon>
              <h3>Radiodiffusion</h3>
              <p>Mâts et infrastructures pour radio AM/FM</p>
            </ClientCategory>
            
            <ClientCategory
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <CategoryIcon>
                <i className="fas fa-truck-monster"></i>
              </CategoryIcon>
              <h3>Transport</h3>
              <p>Solutions pour autoroutes, voies ferrées et aéroports</p>
            </ClientCategory>
          </ClientCategories>
        </Container>
      </ClientsSection>

      {/* Testimonials Section */}
      <TestimonialsSection>
        <Container>
          <SectionHeader>
            <h2>Ils Nous Font Confiance</h2>
            <p>Témoignages de nos clients et partenaires</p>
          </SectionHeader>
          
          <TestimonialsSlider>
            <Slider {...sliderSettings}>
              {testimonials.map(testimonial => (
                <TestimonialCard key={testimonial.id}>
                  <TestimonialContent>
                    <p>"{testimonial.comment}"</p>
                    <TestimonialAuthor>
                      <h4>{testimonial.name}</h4>
                      <span>{testimonial.role}</span>
                    </TestimonialAuthor>
                  </TestimonialContent>
                </TestimonialCard>
              ))}
            </Slider>
          </TestimonialsSlider>
        </Container>
      </TestimonialsSection>

      {/* Contact Section */}
      <ContactSectionStyled>
        <Container>
          <ContactContainer>
            <ContactInfo
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Contactez Nos Experts</h2>
              <p>Nos équipes techniques sont à votre disposition pour étudier votre projet et vous proposer la solution la plus adaptée.</p>
              
              <ContactDetails>
                <ContactItem>
                  <ContactIcon>
                    <i className="fas fa-phone-alt"></i>
                  </ContactIcon>
                  <div>
                    <h4>Téléphone</h4>
                    <a href="tel:+212537410257">+212 5 37 41 02 57</a>
                  </div>
                </ContactItem>
                
                <ContactItem>
                  <ContactIcon>
                    <i className="fas fa-envelope"></i>
                  </ContactIcon>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:contact@nisatel.ma">contact@nisatel.ma</a>
                  </div>
                </ContactItem>
                
                <ContactItem>
                  <ContactIcon>
                    <i className="fas fa-map-marker-alt"></i>
                  </ContactIcon>
                  <div>
                    <h4>Adresse</h4>
                    <p>06, Résidence Kader, Mers El Kheir, Témara</p>
                  </div>
                </ContactItem>
              </ContactDetails>
            </ContactInfo>
            
            <ContactForm
              onSubmit={handleSubmit}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FormGroup>
                <label htmlFor="fullName">Nom complet</label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Votre nom" 
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="company">Société</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Votre société" 
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre email" 
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="phone">Téléphone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Votre téléphone" 
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="serviceConcerned">Service concerné</label>
                <select 
                  id="serviceConcerned"
                  name="serviceConcerned"
                  value={formData.serviceConcerned}
                  onChange={handleChange}
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="etudes">Bureau d'études</option>
                  <option value="fabrication">Fabrication</option>
                  <option value="installation">Installation</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="autre">Autre demande</option>
                </select>
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4" 
                  placeholder="Décrivez votre projet"
                  required
                ></textarea>
              </FormGroup>
              
              <SubmitButton
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Envoyer la demande
              </SubmitButton>
            </ContactForm>
          </ContactContainer>
        </Container>
      </ContactSectionStyled>
    </LandingPageContainer>
  );
};

export default LandingPage;