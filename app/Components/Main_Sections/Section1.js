'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// ── Typewriter hook ──
function useTypewriter(text, speed = 80, startDelay = 600) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    setDisplayed('')
    setDone(false)
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1))
        i++
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
      return () => clearInterval(interval)
    }, startDelay)
    return () => clearTimeout(timeout)
  }, [text, speed, startDelay])

  return { displayed, done }
}

// ── Floating particle ──
const Particle = ({ style }) => (
  <motion.div
    className="absolute rounded-full bg-orange-500 opacity-20 pointer-events-none"
    style={style}
    animate={{ y: [0, -30, 0], x: [0, 10, 0], opacity: [0.1, 0.3, 0.1] }}
    transition={{
      duration: Math.random() * 4 + 3,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: Math.random() * 2,
    }}
  />
)

// ── Variants ──
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}
const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}
const flipDown = {
  hidden: { opacity: 0, rotateX: -90, y: -20 },
  visible: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}
const zoomIn = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

const particles = [
  { width: 8, height: 8, top: '15%', left: '5%' },
  { width: 5, height: 5, top: '70%', left: '8%' },
  { width: 10, height: 10, top: '35%', left: '92%' },
  { width: 6, height: 6, top: '80%', left: '88%' },
  { width: 4, height: 4, top: '55%', left: '50%' },
  { width: 7, height: 7, top: '20%', left: '75%' },
]

export default function Section1() {
  const { displayed, done } = useTypewriter('Developer', 90, 700)

  // Magnetic cursor effect
  const imageRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 })

  const handleMouseMove = (e) => {
    if (!imageRef.current) return
    const rect = imageRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - (rect.left + rect.width / 2)) * 0.12)
    mouseY.set((e.clientY - (rect.top + rect.height / 2)) * 0.12)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Ambient glow blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-orange-500 rounded-full blur-[120px] opacity-10 pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-orange-400 rounded-full blur-[100px] opacity-10 pointer-events-none"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.06, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <Particle key={i} style={{ width: p.width, height: p.height, top: p.top, left: p.left }} />
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(251,146,60,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(251,146,60,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">

        {/* ── Left Content ── */}
        <motion.div
          className="space-y-4 sm:space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow label — slightly larger on mobile */}
          <motion.div variants={fadeRight} className="flex items-center gap-3">
            <span className="inline-block w-8 sm:w-10 h-[2px] mb-30 bg-orange-500 rounded-full" />
            <span className="text-orange-400 text-2xl pb-30 sm:text-base md:text-3xl tracking-[0.18em] uppercase font-semibold">
              Full-Stack Developer
            </span>
          </motion.div>

          <div className="space-y-3 sm:space-y-4">
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              I am a{' '}
              {/* Typewriter effect on "Developer" */}
              <span className="text-orange-500 relative inline-block">
                {displayed}
                {/* Blinking cursor — fades away once typing is done */}
                <motion.span
                  className="inline-block w-[3px] h-[0.85em] bg-orange-400 align-middle ml-1 rounded-sm"
                  animate={{ opacity: done ? 0 : [1, 0, 1] }}
                  transition={
                    done
                      ? { duration: 0.4, delay: 0.8 }
                      : { duration: 0.6, repeat: Infinity, ease: 'easeInOut' }
                  }
                />
                {/* Underline slides in after typing finishes */}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] bg-orange-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: done ? '100%' : 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeRight}
              className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg"
            >
              I'm <span className="text-white font-semibold">Ayush Rawat</span>, a full-stack
              developer passionate about building scalable web applications, clean user
              interfaces, and reliable software solutions.
            </motion.p>
          </div>

          {/* Tech stack badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'Node.js', 'TypeScript'].map((tech) => (
              <motion.span
                key={tech}
                className="text-xs px-3 py-1 rounded-full border border-orange-500/30 text-orange-400 bg-orange-500/5"
                whileHover={{
                  borderColor: 'rgba(249,115,22,0.8)',
                  backgroundColor: 'rgba(249,115,22,0.1)',
                  scale: 1.05,
                }}
                transition={{ duration: 0.2 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4" variants={containerVariants}>
            <motion.div variants={flipDown}>
              <Link href="/projects">
                <motion.button
                  className="relative bg-orange-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10">View Projects</span>
                  <motion.span
                    className="absolute inset-0 bg-white/20 -skew-x-12"
                    initial={{ x: '-120%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div variants={flipDown}>
              <a href="#contact">
                <motion.button
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Contact Me
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Right Content – Profile Image ── */}
        <motion.div
          className="flex justify-center md:justify-end mt-20"
          initial="hidden"
          animate="visible"
          variants={zoomIn}
        >
          <div className="relative" ref={imageRef} onMouseLeave={handleMouseLeave}>
            {/* Outer orbit ring */}
            <motion.div
              className="absolute inset-[-16px] rounded-full border border-orange-500/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_8px_2px_rgba(249,115,22,0.6)]" />
            </motion.div>

            {/* Second orbit ring */}
            <motion.div
              className="absolute inset-[-36px] rounded-full border border-orange-500/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              <motion.div className="absolute bottom-0 right-4 w-2 h-2 bg-orange-400/60 rounded-full" />
            </motion.div>

            {/* Glow */}
            <div className="absolute inset-0 bg-orange-500 rounded-full blur-3xl opacity-25" />

            {/* Image with magnetic spring */}
            <motion.div
              style={{ x: springX, y: springY }}
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full p-[3px] cursor-pointer"
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              {/* Conic shimmer */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent 0%, rgba(251,146,60,0.6) 30%, transparent 60%)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full bg-black p-1 hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/Ayush_Updated_img.png"
                    alt="Ayush"
                    width={100}
                    height={100}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Badge – Available for work */}
            <motion.div
              className="absolute -bottom-2 -left-4 sm:-left-8 bg-gray-900 border border-orange-500/40 rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.06 }}
            >
              <motion.span
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-xs text-gray-300 font-medium whitespace-nowrap">
                Available for work
              </span>
            </motion.div>

            {/* Badge – React & Next.js */}
            <motion.div
              className="absolute -top-2 -right-4 sm:-right-6 bg-gray-900 border border-orange-500/30 rounded-xl px-3 py-2 shadow-xl"
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.06 }}
            >
              <span className="text-xs text-orange-400 font-semibold">⚛ React & Next.js</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}