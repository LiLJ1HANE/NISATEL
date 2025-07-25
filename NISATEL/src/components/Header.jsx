import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/LogoNisatel.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[64px] z-50 transition-all duration-500 flex items-center ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-white shadow-lg"
      }`}
    >
      <div className="container flex items-center justify-between px-4 mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <img
            src={logo}
            alt="Logo"
            className="transition-transform duration-500 w-14 h-14 group-hover:rotate-6"
          />
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 font-poppins">
            NISATEL
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-6 md:flex">
          {[
            "Accueil",
            "Services",
            "Produits",
            "Applications",
            "Contact",
          ].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="relative text-sm font-medium text-gray-700 transition hover:text-orange-600"
            >
              <span className="after:block after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-orange-400 after:to-orange-600 after:transition-all after:duration-300 hover:after:w-full">
                {item}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-orange-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 6.75h15M4.5 12h15M4.5 17.25h15"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="px-6 pb-4 bg-white shadow-inner md:hidden">
          {[
            "Accueil",
            "Notre entreprise",
            "Services",
            "Produits",
            "Applications",
            "Contact",
          ].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="block py-2 text-sm text-gray-700 border-b border-gray-200 hover:text-orange-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
