"use client"
import React from "react";
import project_data from "../Our_JSON_Data/project_data.json";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function RevealOnScroll({ children, delay = 0, direction = "up", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      scale: direction === "zoom" ? 0.88 : 1,
    },
    visible: {
      opacity: 1, y: 0, x: 0, scale: 1,
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

const Particle = ({ style }) => (
  <motion.div
    className="absolute rounded-full bg-orange-500 pointer-events-none"
    style={style}
    animate={{ y: [0, -22, 0], opacity: [0.07, 0.18, 0.07] }}
    transition={{ duration: Math.random() * 4 + 4, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
  />
);

const particles = [
  { width: 6, height: 6, top: "8%",  left: "4%" },
  { width: 4, height: 4, top: "65%", left: "7%" },
  { width: 8, height: 8, top: "25%", left: "94%" },
  { width: 5, height: 5, top: "80%", left: "91%" },
  { width: 3, height: 3, top: "45%", left: "50%" },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="relative bg-black overflow-hidden">
      {/* Ambient blobs */}
      <motion.div
        className="absolute top-1/4 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-orange-500 rounded-full blur-[140px] opacity-[0.07] pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-orange-400 rounded-full blur-[120px] opacity-[0.06] pointer-events-none"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,146,60,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(251,146,60,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Particles */}
      {particles.map((p, i) => (
        <Particle key={i} style={{ width: p.width, height: p.height, top: p.top, left: p.left }} />
      ))}

      <div className="min-h-screen text-white pt-32 px-6 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <RevealOnScroll direction="zoom">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-[2px] bg-orange-500 rounded-full inline-block" />
                <span className="text-orange-400 text-sm tracking-[0.2em] uppercase font-semibold">My Work</span>
                <span className="w-8 h-[2px] bg-orange-500 rounded-full inline-block" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-orange-500 relative inline-block">
                  Projects
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[3px] bg-orange-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                </span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                A collection of projects built while learning and growing
              </p>
            </div>
          </RevealOnScroll>

          {/* Project Cards */}
          <div className="space-y-8">
            {project_data.map((data, i) => (
              <RevealOnScroll key={i} direction={i % 2 === 0 ? "left" : "right"} delay={0.05}>
                <motion.div
                  className="bg-gray-900 rounded-2xl border-2 border-gray-800 overflow-hidden group"
                  whileHover={{ borderColor: "rgba(249,115,22,0.8)", scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Top accent line */}
                  <motion.div
                    className="h-[2px] bg-gradient-to-r from-orange-500 to-transparent"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  />

                  <div className="grid md:grid-cols-[300px_1fr] gap-6 p-6">
                    {/* Left Side */}
                    <div className="space-y-4">
                      {/* Image */}
                      <motion.div
                        className="relative aspect-video w-full rounded-xl overflow-hidden border border-gray-700 group-hover:border-orange-500 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={data.image}
                          alt={data.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Image overlay shimmer on hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                        />
                      </motion.div>

                      {/* Title */}
                      <h2 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300">
                        {data.title}
                      </h2>
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col justify-between">
                      <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        {data.description}
                      </p>

                      <div>
                        <motion.a
                          href={data.webLink}
                          target="_blank"
                          className="relative inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full overflow-hidden font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            Visit Project <ExternalLink size={18} />
                          </span>
                          {/* Shine sweep */}
                          <motion.span
                            className="absolute inset-0 bg-white/20 -skew-x-12"
                            initial={{ x: "-120%" }}
                            whileHover={{ x: "200%" }}
                            transition={{ duration: 0.5 }}
                          />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}