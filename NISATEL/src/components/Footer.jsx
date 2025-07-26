import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/LogoNisatel.jpg';
import { FaPhone, FaFax, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Footer = () => {
  return (
    <footer className="pt-12 pb-6 text-white bg-purple-900">
      <div className="container px-4 mx-auto">

        {/* Company info with logo */}
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div className="mb-6" data-aos="fade-up">
            <div className="flex items-center mb-4">
              <img
                src={logo}
                alt="Logo NISATEL"
                className="w-12 h-12 p-1 mr-3 bg-white border-2 border-violet-400 rounded-full"
              />
              <div className="pl-2 border-l-2 border-violet-400">
                <div className="text-xl font-bold text-orange-400">NISATEL</div>
                <div className="text-xs text-gray-400">Réseaux Télécom et Energie</div>
              </div>
            </div>
            <p className="mb-4 text-sm text-gray-300">
              Entreprise marocaine spécialisée dans le développement, la fabrication et l'installation de pylônes et infrastructures de télécommunication.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 transition hover:text-violet-400">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 transition hover:text-violet-400">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 transition hover:text-violet-400">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="pb-2 mb-4 text-lg font-semibold text-violet-400 border-b border-violet-400">LIENS RAPIDES</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-300 transition hover:text-violet-400">Accueil</a></li>
              <li><a href="#" className="text-sm text-gray-300 transition hover:text-violet-400">Notre Entreprise</a></li>
              <li><a href="#" className="text-sm text-gray-300 transition hover:text-violet-400">Services</a></li>
              <li><a href="#" className="text-sm text-gray-300 transition hover:text-violet-400">Produits</a></li>
              <li><a href="#" className="text-sm text-gray-300 transition hover:text-violet-400">Applications</a></li>
              <li><a href="#" className="text-sm text-gray-300 transition hover:text-violet-400">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="mb-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="pb-2 mb-4 text-lg font-semibold text-violet-400 border-b border-violet-400">SERVICES</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-300 transition hover:text-violet-400">Bureau d'études</a></li>
              <li><a href="#" className="text-sm text-gray-300 transition hover:text-violet-400">Fabrication</a></li>
              <li><a href="#" className="text-sm text-gray-300 transition hover:text-violet-400">Montage sur site</a></li>
              <li><a href="#" className="text-sm text-gray-300 transition hover:text-violet-400">Maintenance</a></li>
              <li><a href="#" className="text-sm text-gray-300 transition hover:text-violet-400">WiFi Pro</a></li>
              <li><a href="#" className="text-sm text-gray-300 transition hover:text-violet-400">Fibre Optique</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6" data-aos="fade-up" data-aos-delay="300">
            <h3 className="pb-2 mb-4 text-lg font-semibold text-violet-400 border-b border-violet-400">CONTACT</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaPhone className="flex-shrink-0 mt-1 mr-2 text-violet-400" />
                <span className="text-sm text-gray-300">+212 537 410 257</span>
              </li>
              <li className="flex items-start">
                <FaFax className="flex-shrink-0 mt-1 mr-2 text-violet-400" />
                <span className="text-sm text-gray-300">+212 537 410 226</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="flex-shrink-0 mt-1 mr-2 text-violet-400" />
                <a href="mailto:contact@nisatel.ma" className="text-sm text-gray-300 transition hover:text-violet-400">contact@nisatel.ma</a>
              </li>
              <li className="flex items-start">
                <FaGlobe className="flex-shrink-0 mt-1 mr-2 text-violet-400" />
                <a href="https://www.nisatel.ma" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 transition hover:text-violet-400">www.nisatel.ma</a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="flex-shrink-0 mt-1 mr-2 text-violet-400" />
                <span className="text-sm text-gray-300">06, Résidence Kader, Mers El Kheir, Témara</span>
              </li>
            </ul>
          </div>
        </div>

        {/* NOS VALEURS - Swiper slider */}
        <div className="p-6 mb-8 bg-gray-800 rounded-lg" data-aos="fade-up">
          <h3 className="mb-4 text-lg font-semibold text-center text-violet-400">NOS VALEURS</h3>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            loop
          >
            <SwiperSlide>
              <div className="p-4 bg-gray-700 rounded-lg">
                <p className="text-sm italic text-gray-300">
                  "Nous entreprenons chaque jour pour construire les réseaux de demain et créer un monde de progrès durable..."
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4 bg-gray-700 rounded-lg">
                <p className="text-sm italic text-gray-300">
                  "Nous apprenons avec humilité les uns des autres pour donner le meilleur de nous-même."
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4 bg-gray-700 rounded-lg">
                <p className="text-sm italic text-gray-300">
                  "La satisfaction de nos clients est notre fierté."
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
