import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/LogoNisatel.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileProducts, setShowMobileProducts] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const closeDropdownTimeout = useRef();
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile quand on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

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
          {["Accueil", "Services", "Produits", "Applications", "Contact"].map((item) =>
            item === "Produits" ? (
              <div
                key={item}
                className="relative"
                onMouseEnter={() => {
                  if (closeDropdownTimeout.current) clearTimeout(closeDropdownTimeout.current);
                  setIsProductsDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  closeDropdownTimeout.current = setTimeout(() => {
                    setIsProductsDropdownOpen(false);
                  }, 200);
                }}
              >
                <button
                  className="relative flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-orange-600 focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded={isProductsDropdownOpen}
                >
                  <span className="after:block after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-orange-400 after:to-orange-600 after:transition-all after:duration-300 group-hover:after:w-full">
                    {item}
                  </span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {/* Dropdown */}
                {isProductsDropdownOpen && (
                  <div className="absolute left-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-lg"
                    onMouseEnter={() => {
                      if (closeDropdownTimeout.current) clearTimeout(closeDropdownTimeout.current);
                      setIsProductsDropdownOpen(true);
                    }}
                    onMouseLeave={() => {
                      closeDropdownTimeout.current = setTimeout(() => {
                        setIsProductsDropdownOpen(false);
                      }, 200);
                    }}
                  >
                    <Link to="/pylônes" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">Pylônes</Link>
                    <Link to="/wireless" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">Solutions Wireless</Link>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">Energie</a>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item}
                to={item === "Accueil" ? "/" : item === "Solutions Wireless" ? "/wireless" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="relative text-sm font-medium text-gray-700 transition hover:text-orange-600"
              >
                <span className="after:block after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-orange-400 after:to-orange-600 after:transition-all after:duration-300 hover:after:w-full">
                  {item}
                </span>
              </Link>
            )
          )}
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
        <div 
          className="absolute left-0 right-0 px-6 pb-4 bg-white shadow-inner top-16 md:hidden"
          ref={mobileMenuRef}
        >
          {["Accueil", "Notre entreprise", "Services", "Produits", "Applications", "Contact"].map((item) =>
            item === "Produits" ? (
              <div key={item} className="">
                <button
                  className="flex items-center w-full py-2 text-sm text-left text-gray-700 border-b border-gray-200 hover:text-orange-600 focus:outline-none"
                  onClick={() => setShowMobileProducts((prev) => !prev)}
                  type="button"
                >
                  {item}
                  <svg 
                    className={`w-4 h-4 ml-1 transition-transform ${showMobileProducts ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showMobileProducts && (
                  <div className="pl-4">
                    <Link 
                      to="/products" 
                      className="block py-2 text-sm text-gray-700 border-b border-gray-200 hover:text-orange-600"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setShowMobileProducts(false);
                      }}
                    >
                      Pylône
                    </Link>
                    <Link 
                      to="/wireless" 
                      className="block py-2 text-sm text-gray-700 border-b border-gray-200 hover:text-orange-600"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setShowMobileProducts(false);
                      }}
                    >
                      Solutions Wireless
                    </Link>
                    <a 
                      href="#" 
                      className="block py-2 text-sm text-gray-700 border-b border-gray-200 hover:text-orange-600"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setShowMobileProducts(false);
                      }}
                    >
                      Energie
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item}
                to={item === "Accueil" ? "/" : item === "Solutions Wireless" ? "/wireless" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block py-2 text-sm text-gray-700 border-b border-gray-200 hover:text-orange-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Header;