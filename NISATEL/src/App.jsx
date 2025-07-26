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
import PylonesPage from './Pages/PylonesPage';
import ApplicationsPage from './Pages/ApplicationsPage';
import WirelessPage from './Pages/WirelessPage';
import Chatbot from './components/Chatbot';
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen App">
        <Header />
        <Chatbot />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Acceuil" element={<LandingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pylônes" element={<PylonesPage />} />
            <Route path="/applications" element={<ApplicationsPage />} />
            <Route path="/wireless" element={<WirelessPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
