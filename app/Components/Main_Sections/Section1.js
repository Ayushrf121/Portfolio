import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Section1() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-4 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4">
            <h1 data-aos="zoom-in" data-aos-duration="2000"  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              I am a <span data-aos="fade-right" data-aos-duration="3000"  className="text-orange-500">Developer</span>
            </h1>
            <p data-aos="fade-right" data-aos-duration="2500" className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
              I'm Ayush Rawat, a full-stack developer passionate about building scalable web
              applications, clean user interfaces, and reliable software solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
            <Link data-aos="flip-down" data-aos-duration="2800" href="/projects">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                View Projects
              </button>
            </Link>
            <a data-aos="flip-down" data-aos-duration="2800" href="#contact">
              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                Contact Me
              </button>
            </a>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-orange-500 rounded-full blur-3xl opacity-30"></div>

            {/* Profile circle */}
            <div data-aos="zoom-in" data-aos-duration="2000" className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full bg-linear-to-br from-orange-500 to-orange-600 p-1 hover:scale-105 transition-transform duration-500">
              <div  className="w-full h-full rounded-full overflow-hidden">
               
                <img
                  src="/Ayush_pic1.png"
                  alt="Ayush"
                  className="w-full h-full"
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}