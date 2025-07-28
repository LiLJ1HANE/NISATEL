import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import axios from 'axios';

// Styled Components
const ProductsPageContainer = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  display: flex;
  min-height: 100vh;
  background: white;
  @media (max-width: 900px) {
    flex-direction: column;
    padding-top: 80px;
  }
`;

const Sidebar = styled.div`
  width: 390px;
  background: white;
  border-right: 1px solid #eee;
  padding: 40px 0;
  margin-top: 100px;
  @media (max-width: 900px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #eee;
    margin-top: 0;
    padding: 0 0 10px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }
`;

const SidebarTitle = styled.h3`
  padding: 0 30px 20px;
  margin-bottom: 20px;
  font-size: 1.3rem;
  color: #333;
  border-bottom: 1px solid #eee;
  padding-top: 50px;
  padding-right: 50px;
  @media (max-width: 900px) {
    width: 100%;
    padding: 10px 0 10px 0;
    margin-bottom: 10px;
    font-size: 1.1rem;
    border-bottom: none;
    text-align: center;
    padding-right: 0;
    padding-top: 10px;
  }
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
  @media (max-width: 900px) {
    border-left: none;
    border-bottom: 3px solid ${props => props.active ? '#f39c12' : 'transparent'};
    padding: 10px 16px;
    font-size: 0.98rem;
    border-radius: 8px 8px 0 0;
    margin-bottom: 0;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 60px 80px;
  max-width: 900px;
  @media (max-width: 900px) {
    padding: 30px 10px 20px 10px;
    max-width: 100%;
  }
`;

const PageHeader = styled.h1`
  font-size: 2.2rem;
  color: #174ea6;
  margin-bottom: 40px;
  font-weight: 700;
  padding-top: 90px;
  @media (max-width: 900px) {
    font-size: 1.4rem;
    margin-bottom: 20px;
    padding-top: 30px;
    text-align: center;
  }
`;

const ProductSection = styled.section`
  margin-bottom: 60px;
`;

const ProductTitle = styled.h2`
  font-size: 1.6rem;
  color: #174ea6;
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 2px solid #174ea6;
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
  height: 500px;
  background-image: url(${props => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 30px 0;
  border: 1px solid #eee;
  @media (max-width: 900px) {
    height: 380px;
    margin: 16px 0;
    background-size: contain;
  }
`;

// Bouton Lire la suite supprimé

// Main Component
const ProductsPage = () => {
  const [productCategories, setProductCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/api/products")
      .then((res) => {
        setProductCategories(res.data);
        if (res.data.length > 0) {
          setActiveCategory(res.data[0].id);
        }
      })
      .catch((err) => console.error("Erreur de chargement des produits :", err));
  }, []);

  const currentCategory = productCategories.find(cat => cat.id === activeCategory);

  return (
    <ProductsPageContainer>
      <Sidebar>
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
        <PageHeader>Nos Pylônes</PageHeader>

        {currentCategory && (
          <ProductSection>
            <ProductTitle>{currentCategory.name}</ProductTitle>

            <FeatureList>
              {currentCategory.features.map((feature, index) => (
                <FeatureItem key={index}>{feature}</FeatureItem>
              ))}
            </FeatureList>

            <ProductImage image={currentCategory.image} />
          </ProductSection>
        )}
      </MainContent>
    </ProductsPageContainer>
  );
};

export default ProductsPage;