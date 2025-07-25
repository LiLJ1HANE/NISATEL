import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Styled Components
const ProductsPageContainer = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  display: flex;
  min-height: 100vh;
  background: white;
`;

const Sidebar = styled.div`
  width: 390px;
  background: white;
  border-right: 1px solid #eee;
  padding: 40px 0;
`;

const SidebarTitle = styled.h3`
  padding: 0 30px 20px;
  margin-bottom: 20px;
  font-size: 1.3rem;
  color: #333;
  border-bottom: 1px solid #eee;
  padding-top: 50px;
  padding-right: 50px;
`;

const SidebarItem = styled(motion.div)`
  padding: 20px 30px;
  cursor: pointer;
  font-weight: ${props => props.active ? '600' : '400'};
  color: ${props => props.active ? '#f39c12' : '#333'};
  border-left: 3px solid ${props => props.active ? '#f39c12' : 'transparent'};
  transition: all 0.2s ease;

  &:hover {
    color: #f39c12;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 60px 80px;
  max-width: 900px;
`;

const PageHeader = styled.h1`
  font-size: 2.2rem;
  color: #333;
  margin-bottom: 40px;
  font-weight: 600;
  padding-top: 50px;
`;

const ProductSection = styled.section`
  margin-bottom: 60px;
`;

const ProductTitle = styled.h2`
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 2px solid #f39c12;
  display: inline-block;
`;

const FeatureList = styled.ul`
  margin: 25px 0;
  padding-left: 20px;
`;

const FeatureItem = styled.li`
  margin-bottom: 12px;
  color: #333;
  font-size: 1.05rem;
  line-height: 1.6;
  position: relative;
  padding-left: 25px;

  &:before {
    content: '•';
    color: #f39c12;
    font-size: 1.5rem;
    position: absolute;
    left: 0;
    top: -5px;
  }
`;

const ProductImage = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  margin: 30px 0;
  border: 1px solid #eee;
`;

const ReadMore = styled.a`
  color: #f39c12;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(5px);
  }

  &:after {
    content: '→';
    margin-left: 8px;
  }
`;

// Main Component
const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('autoportants');

  const productCategories = [
    {
      id: 'autoportants',
      name: 'Pylônes Treillis Autoportants',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      features: [
        'Accès par échelle intérieure/extérieure ou nacelle',
        'Silhouette constante ou à fruit',
        'Habillage sur demande',
        'Mise en peinture personnalisée',
        'Plateformes de travail et paliers de repos',
        'Système anti-chute de type rail ou câble',
        'Système anti intrusion',
        'Balisage diurne, nocturne, lumineux',
        'Supports d\'antennes',
        'Mise à la terre et système paratonnerre'
      ]
    },
    {
      id: 'monotubes',
      name: 'Pylônes Monotubes',
      image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      features: [
        'Accès par échelle intérieure/extérieure ou nacelle',
        'Radôme en fibre optionnel',
        'Cache publicitaire intégré',
        'Mise en peinture personnalisée',
        'Plateformes de travail et paliers de repos',
        'Système anti-chute de type rail ou câble',
        'Système anti intrusion',
        'Balisage diurne, nocturne, lumineux',
        'Supports d\'antennes',
        'Mise à la terre et système paratonnerre'
      ]
    },
    {
      id: 'speciaux',
      name: 'Pylônes Spéciaux',
      image: 'https://images.unsplash.com/photo-1581093057305-5e0d6a7cd5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      features: [
        'Pylône provisoire pour chantiers',
        'Pylône sur châssis mobile',
        'Pylône haubané pour grandes hauteurs',
        'Mât rabattable pour zones sensibles',
        'Solutions sur mesure selon besoins spécifiques'
      ]
    },
    {
      id: 'renforcement',
      name: 'Renforcement de Pylônes',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      features: [
        'Renforcement de massifs par surépaisseur',
        'Élargissement des fondations existantes',
        'Micropieux pour consolidation',
        'Ceinturage structurel',
        'Remplacement d\'éléments existants',
        'Juppage extérieur pour renforcement'
      ]
    }
  ];

  const currentCategory = productCategories.find(cat => cat.id === activeCategory);

  return (
    <ProductsPageContainer>
      <Sidebar>
        <SidebarTitle>Types de Pylônes</SidebarTitle>
        {productCategories.map((category) => (
          <SidebarItem
            key={category.id}
            active={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </SidebarItem>
        ))}
      </Sidebar>

      <MainContent>
        <PageHeader>Nos Produits</PageHeader>

        {currentCategory && (
          <ProductSection>
            <ProductTitle>{currentCategory.name}</ProductTitle>
            
            <FeatureList>
              {currentCategory.features.map((feature, index) => (
                <FeatureItem key={index}>
                  {feature}
                </FeatureItem>
              ))}
            </FeatureList>

            <ProductImage image={currentCategory.image} />

            <ReadMore href="#">
              Lire la suite...
            </ReadMore>
          </ProductSection>
        )}
      </MainContent>
    </ProductsPageContainer>
  );
};

export default ProductsPage;