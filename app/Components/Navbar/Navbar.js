"use client"
import React, { useEffect, useState } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Download, X, Menu } from 'lucide-react';
import Border from '../Border';
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo - Responsive size */}
          <a data-aos="fade-down-right" data-aos-duration="1500" href="/" className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span data-aos="fade-right" className="text-orange-500">A</span>
            <span data-aos="fade-right" className="text-white">yush</span>
          </a>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a data-aos="fade-down-right" data-aos-duration="2000"
              href="#home"
              className="relative text-white text-lg hover:text-orange-500 transition-colors duration-300 group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a data-aos="fade-down-right" data-aos-duration="2800"
              href="/projects"
              className="relative text-white text-lg hover:text-orange-500 transition-colors duration-300 group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a data-aos="fade-down-right" data-aos-duration="2500"
              href="#about"
              className="relative text-white text-lg hover:text-orange-500 transition-colors duration-300 group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a data-aos="fade-down-right" data-aos-duration="3000"
              href='#contact'
              className="relative text-white text-lg hover:text-orange-500 transition-colors duration-300 group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Download Resume Button - Desktop */}
          <a
            href="/Ayush_Updated_Resume.pdf"
            download="Ayush_Updated_Resume.pdf"
            data-aos="fade-down-right"
            data-aos-duration="1500"
            className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
            aria-label="Download Resume"
          >
            <Download size={20} />
            Download Resume
          </a>


          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-orange-500 hover:text-orange-600 transition-colors"
          >
            {isMenuOpen ? <X data-aos="zoom-in" data-aos-duration="1500" size={28} /> : <Menu data-aos="fade-down-left" data-aos-duration="1500" size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
            <a data-aos="zoom-in" data-aos-duration="2000"
              href="#home"
              onClick={toggleMenu}
              className="text-white text-2xl sm:text-3xl hover:text-orange-500 transition-colors duration-300"
            >
              Home
            </a>
            <Border />
            <a
              data-aos="zoom-in" data-aos-duration="2800"
              href="/projects"
              onClick={toggleMenu}
              className="text-white text-2xl sm:text-3xl hover:text-orange-500 transition-colors duration-300"
            >
              Projects
            </a>
            <Border />
            <a
              data-aos="zoom-in" data-aos-duration="2500"
              href="#about"
              onClick={toggleMenu}
              className="text-white text-2xl sm:text-3xl hover:text-orange-500 transition-colors duration-300"
            >
              About
            </a>
            <Border />
            <a
              data-aos="zoom-in" data-aos-duration="3000"
              href='#contact'
              onClick={toggleMenu}
              className="text-white text-2xl sm:text-3xl hover:text-orange-500 transition-colors duration-300"
            >
              Contact
            </a>
            <Border />
            <a
              href="/Ayush_Updated_Resume.pdf"
              download="Ayush_Updated_Resume.pdf"
              data-aos="zoom-in"
              data-aos-duration="3000"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 text-lg sm:text-xl"
              aria-label="Download Resume"
            >
              <Download size={24} />
              Download Resume
            </a>


          </div>
        </div>
      )}
    </>
  );
}