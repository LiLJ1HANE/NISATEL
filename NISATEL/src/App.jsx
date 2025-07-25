import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import LandingPage from './Pages/LandingPage';
import ContactPage from './Pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';
import ServicesPage from './Pages/ServicesPage';
import ProductsPage from './Pages/ProductsPage';
import ApplicationsPage from './Pages/ApplicationsPage';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen App">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Acceuil" element={<LandingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/produits" element={<ProductsPage />} />
            <Route path="/applications" element={<ApplicationsPage />} />
            
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
