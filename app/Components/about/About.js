"use client"
import React,{useEffect} from 'react';
import { GraduationCap, Code, Database, Wrench, Target } from 'lucide-react';
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function About() {
  useEffect(()=>{
      AOS.init();
    },[])
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Languages",
      skills: ["C", "Java", "Python", "JavaScript"]
    },
    {
      icon: <Code size={24} />,
      title: "Web Technologies",
      skills: ["HTML", "CSS", "React", "Next.js"]
    },
    {
      icon: <Database size={24} />,
      title: "Databases",
      skills: ["MongoDB"]
    },
    {
      icon: <Wrench size={24} />,
      title: "Tools",
      skills: ["Git", "VS Code"]
    }
  ];

  return (
    <div id='about' className="min-h-screen bg-black text-white pt-24 sm:pt-32 px-4 sm:px-6 pb-12 sm:pb-20">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-orange-500">Me</span>
          </h1>
        </div>

        {/* 1. About Me - Introduction */}
        <div className="mb-12 sm:mb-16">
          <div data-aos="zoom-in" data-aos-duration="1500" className="bg-gray-900 p-6 sm:p-8 md:p-10 rounded-2xl border border-gray-800 hover:border-orange-500 transform transition duration-300">
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              I'm <span className="text-orange-500 font-semibold">Ayush Rawat</span>, a computer applications student and aspiring software developer. I enjoy building logical systems and user-focused web applications. My interests range from core programming in C and Java to modern web development using JavaScript and frameworks like React and Next.js.
            </p>
          </div>
        </div>

        {/* 2. Education */}
        <div data-aos="zoom-in" data-aos-duration="1500" className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
            <GraduationCap className="text-orange-500" size={28} />
            Education
          </h2>
          <div className="bg-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-800 hover:border-orange-500 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-orange-500 mb-2">
              Bachelor of Computer Applications (BCA)
            </h3>
            <p className="text-lg sm:text-xl text-gray-300 mb-3">
              Graphic Era Deemed to be University
            </p>
            <p className="text-gray-400">
              Status: <span className="text-white">Ongoing</span>
            </p>
          </div>
        </div>

        {/* 3. Skills */}
        <div data-aos="zoom-in" data-aos-duration="1500" className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
            <Code className="text-orange-500" size={28} />
            Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-900 p-5 sm:p-6 rounded-2xl border border-gray-800 hover:border-orange-500 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-orange-500 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-orange-500/10 text-orange-500 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-orange-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Goals / What I'm Looking For */}
        <div data-aos="zoom-in" data-aos-duration="2000" className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
            <Target className="text-orange-500" size={28} />
            What I'm Looking For
          </h2>
          <div className="bg-linear-to-r from-orange-500/10 to-transparent border border-orange-500/30 p-6 sm:p-8 rounded-2xl">
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              I'm currently seeking opportunities to <span className="text-orange-500 font-semibold">learn, collaborate, and grow</span> as a software developer through internships and real-world projects.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}