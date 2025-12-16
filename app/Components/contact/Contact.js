"use client"
import React,{useEffect} from 'react';
import { Mail, Linkedin, Github, MapPin, Briefcase,Instagram } from 'lucide-react';
import Aos from 'aos';
import 'aos/dist/aos.css'
export default function Contact() {
  useEffect(()=>{
        Aos.init();
      },[])
  const contactMethods = [
    {
      id:1,
      icon: <Mail size={28} />,
      label: "Email",
      value: "ayushrf@gmail.com",
      link: "mailto:ayushrf@gmail.com"
    },
    {
      id:2,
      icon: <Linkedin size={28} />,
      label: "LinkedIn",
      value: "linkedin.com/ayushrawat",
      link: "https://www.linkedin.com/in/ayush-rawat-745854326?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    },
    {
      id:3,
      icon: <Github size={28} />,
      label: "GitHub",
      value: "github.com/ayushrawat",
      link: "https://github.com/Ayushrf121"
    },{
      id:4,
      icon: <Instagram size={28} />,
      label: "Instagram",
      value: "rawat_ayush",
      link: "https://www.instagram.com/_ayushrf_?igsh=MXJ3NGM1MnJleWhiZA=="
    }
  ];
  return (
    <div id='contact' className="min-h-screen bg-black text-white pt-24 sm:pt-32 px-4 sm:px-6 pb-12 sm:pb-20">
      <div className="max-w-4xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Let's <span className="text-orange-500">Connect</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
            Feel free to reach out for collaborations, learning opportunities, or discussions.
          </p>
        </div>

        {/* Primary Contact Methods */}
        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
          {contactMethods.map((method, index) => (
            <a
              data-aos={method.id % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-duration="2000"
              key={index}
              href={method.link}
              
              className="flex items-center gap-4 sm:gap-6 bg-gray-900 p-4 sm:p-6 rounded-2xl border border-gray-800 hover:border-orange-500 transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-orange-500 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                {method.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-gray-300 mb-1">
                  {method.label}
                </h3>
                <p className="text-white text-sm sm:text-lg group-hover:text-orange-500 transition-colors duration-300 truncate">
                  {method.value}
                </p>
              </div>
              <div className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                →
              </div>
            </a>
          ))}
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div data-aos='fade-right' data-aos-duration="2000" className="flex items-center gap-4 bg-gray-900/50 p-4 sm:p-6 rounded-xl border border-gray-800">
                   <div className="text-orange-500 flex-shrink-0">
                <MapPin size={24} />
              </div> 
              <div className="min-w-0">
                <h4 className="text-sm text-gray-400 mb-1">Location</h4>
                <p className="text-white font-medium">India</p>
              </div>
            </div>
            <div data-aos='fade-left' data-aos-duration="2000" className="flex items-center gap-4 bg-gray-900/50 p-4 sm:p-6 rounded-xl border border-gray-800">
                   <div className="text-orange-500 flex-shrink-0">
                <Briefcase size={24} />
              </div> 
              <div className="min-w-0">
                <h4 className="text-sm text-gray-400 mb-1">Availability</h4>
                <p className="text-white font-medium text-sm sm:text-base">Open to internships / projects</p>
              </div>
            </div>
        </div>

       
      </div>
    </div>
  );
}