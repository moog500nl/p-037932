
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    closeMenu();
    
    if (!isHomePage) {
      // If not on home page, navigate to home and then scroll
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link 
          to="/"
          className="flex items-center space-x-2"
          aria-label="Brandweave"
        >
          <img 
            src="/lovable-uploads/50e85708-1147-4423-ac40-ca8500df82a5.png" 
            alt="Brandweave Logo" 
            className="h-16 sm:h-20" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className="nav-link"
          >
            Home
          </Link>
          {isHomePage ? (
            <>
              <a 
                href="#features" 
                className="nav-link" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('features');
                }}
              >
                About
              </a>
              <a 
                href="#details" 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('details');
                }}
              >
                Contact
              </a>
            </>
          ) : (
            <>
              <Link to="/#features" className="nav-link">About</Link>
              <Link to="/#details" className="nav-link">Contact</Link>
            </>
          )}
          <Link to="/blog" className="nav-link">Blog</Link>
        </nav>

        {/* Mobile menu button - increased touch target */}
        <button 
          className="md:hidden text-gray-700 p-3 focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - improved for better touch experience */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-8 items-center mt-8">
          <Link 
            to="/"
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={closeMenu}
          >
            Home
          </Link>
          {isHomePage ? (
            <>
              <a 
                href="#features" 
                className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('features');
                }}
              >
                About
              </a>
              <a 
                href="#details" 
                className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('details');
                }}
              >
                Contact
              </a>
            </>
          ) : (
            <>
              <Link 
                to="/#features" 
                className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                to="/#details" 
                className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
                onClick={closeMenu}
              >
                Contact
              </Link>
            </>
          )}
          <Link 
            to="/blog" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={closeMenu}
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
