"use client"
import React, { useRef } from 'react'
import { GraduationCap, Code, Database, Wrench, Target, Sparkles } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

// ── Reusable scroll-triggered wrapper ──
function RevealOnScroll({ children, delay = 0, direction = 'up', className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      scale: direction === 'zoom' ? 0.85 : 1,
    },
    visible: {
      opacity: 1, y: 0, x: 0, scale: 1,
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ── Floating particle ──
const Particle = ({ style }) => (
  <motion.div
    className="absolute rounded-full bg-orange-500 pointer-events-none"
    style={style}
    animate={{ y: [0, -25, 0], opacity: [0.08, 0.2, 0.08] }}
    transition={{ duration: Math.random() * 4 + 4, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
  />
)

const particles = [
  { width: 6, height: 6, top: '10%', left: '3%' },
  { width: 4, height: 4, top: '60%', left: '6%' },
  { width: 8, height: 8, top: '30%', left: '95%' },
  { width: 5, height: 5, top: '80%', left: '90%' },
  { width: 3, height: 3, top: '50%', left: '48%' },
]

const skillCategories = [
  { icon: <Code size={22} />, title: 'Languages',        skills: ['C', 'Java', 'Python', 'JavaScript'] },
  { icon: <Code size={22} />, title: 'Web Technologies', skills: ['HTML', 'CSS', 'React', 'Next.js'] },
  { icon: <Database size={22} />, title: 'Databases',    skills: ['MongoDB'] },
  { icon: <Wrench size={22} />, title: 'Tools',          skills: ['Git', 'VS Code'] },
]

// Section heading component
function SectionHeading({ icon, title, delay = 0 }) {
  return (
    <RevealOnScroll delay={delay} direction="left">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
        <span className="text-orange-500">{icon}</span>
        {title}
      </h2>
    </RevealOnScroll>
  )
}

export default function About() {
  return (
    <div id="about" className="relative min-h-screen bg-black text-white pt-24 sm:pt-32 px-4 sm:px-6 pb-12 sm:pb-20 overflow-hidden">

      {/* Ambient blobs */}
      <motion.div
        className="absolute top-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-500 rounded-full blur-[140px] opacity-[0.07] pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 left-0 w-56 h-56 sm:w-80 sm:h-80 bg-orange-400 rounded-full blur-[120px] opacity-[0.06] pointer-events-none"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(251,146,60,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(251,146,60,0.6) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <Particle key={i} style={{ width: p.width, height: p.height, top: p.top, left: p.left }} />
      ))}

      <div className="max-w-5xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-12 sm:mb-16">
          <RevealOnScroll direction="zoom">
            {/* Eyebrow */}
            <motion.div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-orange-500 rounded-full inline-block" />
              <span className="text-orange-400 text-sm tracking-[0.2em] uppercase font-semibold">Who I Am</span>
              <span className="w-8 h-[2px] bg-orange-500 rounded-full inline-block" />
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              About{' '}
              <span className="text-orange-500 relative inline-block">
                Me
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] bg-orange-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
            </h1>
          </RevealOnScroll>
        </div>

        {/* ── 1. Introduction ── */}
        <div className="mb-12 sm:mb-16">
          <RevealOnScroll direction="zoom" delay={0.05}>
            <motion.div
              className="relative bg-gray-900 p-6 sm:p-8 md:p-10 rounded-2xl border border-gray-800 overflow-hidden group"
              whileHover={{ borderColor: 'rgba(249,115,22,0.7)', scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Corner sparkle */}
              <motion.div
                className="absolute top-4 right-4 text-orange-500 opacity-30 group-hover:opacity-70"
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles size={20} />
              </motion.div>

              {/* Left accent bar */}
              <motion.div
                className="absolute left-0 top-6 bottom-6 w-[3px] bg-orange-500 rounded-r-full"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />

              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed pl-4">
                I'm{' '}
                <span className="text-orange-500 font-semibold">Ayush Rawat</span>, a computer
                applications student and aspiring software developer. I enjoy building logical systems
                and user-focused web applications. My interests range from core programming in C and
                Java to modern web development using JavaScript and frameworks like React and Next.js.
              </p>
            </motion.div>
          </RevealOnScroll>
        </div>

        {/* ── 2. Education ── */}
        <div className="mb-12 sm:mb-16">
          <SectionHeading icon={<GraduationCap size={28} />} title="Education" />

          <RevealOnScroll direction="up" delay={0.1}>
            <motion.div
              className="relative bg-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-800 overflow-hidden group"
              whileHover={{ borderColor: 'rgba(249,115,22,0.7)', scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated gradient bg on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Top accent line */}
              <motion.div
                className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-orange-500 to-transparent rounded-full"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
              />

              <h3 className="text-xl sm:text-2xl font-bold text-orange-500 mb-2">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="text-lg sm:text-xl text-gray-300 mb-3">
                Graphic Era Deemed to be University
              </p>
              <div className="flex items-center gap-2">
                <motion.span
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <p className="text-gray-400">
                  Status: <span className="text-white font-medium">Ongoing</span>
                </p>
              </div>
            </motion.div>
          </RevealOnScroll>
        </div>

        {/* ── 3. Skills ── */}
        <div className="mb-12 sm:mb-16">
          <SectionHeading icon={<Code size={28} />} title="Skills" delay={0} />

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {skillCategories.map((category, index) => (
              <RevealOnScroll
                key={index}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 0.1}
              >
                <motion.div
                  className="bg-gray-900 p-5 sm:p-6 rounded-2xl border border-gray-800 group h-full"
                  whileHover={{ borderColor: 'rgba(249,115,22,0.7)', scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="text-orange-500"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        className="bg-orange-500/10 text-orange-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-orange-500/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: index * 0.08 + idx * 0.06 }}
                        whileHover={{
                          backgroundColor: 'rgba(249,115,22,0.2)',
                          borderColor: 'rgba(249,115,22,0.6)',
                          scale: 1.08,
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* ── 4. What I'm Looking For ── */}
        <div className="mb-12 sm:mb-16">
          <SectionHeading icon={<Target size={28} />} title="What I'm Looking For" delay={0} />

          <RevealOnScroll direction="up" delay={0.1}>
            <motion.div
              className="relative border border-orange-500/30 p-6 sm:p-8 rounded-2xl overflow-hidden group"
              style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.08) 0%, transparent 60%)' }}
              whileHover={{ borderColor: 'rgba(249,115,22,0.6)', scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated corner glow */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500 rounded-full blur-2xl opacity-10 group-hover:opacity-20"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Pulsing target icon */}
              <motion.div
                className="absolute top-4 right-4 text-orange-500/20"
                animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Target size={40} />
              </motion.div>

              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed relative z-10">
                I'm currently seeking opportunities to{' '}
                <span className="text-orange-500 font-semibold">learn, collaborate, and grow</span>{' '}
                as a software developer through internships and real-world projects.
              </p>

              {/* Bottom progress bar decoration */}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-orange-500 to-orange-300 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          </RevealOnScroll>
        </div>

      </div>
    </div>
  )
}