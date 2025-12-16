import React from 'react';
import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          
          {/* Name/Brand */}
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold">
            <span className="text-orange-500">A</span>
            <span className="text-white">yush</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 sm:gap-8">
            <a 
              href="https://github.com/Ayushrf121" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-all duration-300 hover:scale-125 transform"
              aria-label="GitHub"
            >
              <Github size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ayush-rawat-745854326?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-all duration-300 hover:scale-125 transform"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a 
              href="https://www.instagram.com/_ayushrf_?igsh=MXJ3NGM1MnJleWhiZA==" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-all duration-300 hover:scale-125 transform"
              aria-label="Instagram"
            >
              <Instagram size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a 
              href="mailto:ayushrf@gmail.com"
              className="text-gray-400 hover:text-orange-500 transition-all duration-300 hover:scale-125 transform"
              aria-label="Email"
            >
              <Mail size={24} className="sm:w-7 sm:h-7" />
            </a>
          </div>

          {/* Simple Tagline */}
          <p className="text-gray-500 text-center text-sm sm:text-base px-4">
            Building the future, one line of code at a time.
          </p>

        </div>
      </div>
    </footer>
  );
}