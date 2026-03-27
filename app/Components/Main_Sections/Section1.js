'use client'

import React, { useRef, useState, useEffect, memo } from 'react'
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
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) { clearInterval(interval); setDone(true) }
      }, speed)
      return () => clearInterval(interval)
    }, startDelay)
    return () => clearTimeout(timeout)
  }, [text, speed, startDelay])

  return { displayed, done }
}

// ── Particle — memoized, GPU-only transform ──
const Particle = memo(({ x, y, size, duration, delay }) => (
  <motion.div
    className="absolute rounded-full bg-orange-500 pointer-events-none will-change-transform"
    style={{ width: size, height: size, left: `${x}%`, top: `${y}%` }}
    animate={{ y: [0, -18, 0], opacity: [0.1, 0.25, 0.1] }}
    transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
  />
))
Particle.displayName = 'Particle'

// Pre-computed — no Math.random at render
const PARTICLES = [
  { x: 3,  y: 10, size: 5, duration: 5.2, delay: 0 },
  { x: 6,  y: 65, size: 4, duration: 6.1, delay: 0.8 },
  { x: 12, y: 35, size: 3, duration: 4.8, delay: 1.5 },
  { x: 20, y: 80, size: 6, duration: 5.7, delay: 0.3 },
  { x: 30, y: 18, size: 4, duration: 6.5, delay: 2.1 },
  { x: 38, y: 90, size: 3, duration: 4.5, delay: 0.6 },
  { x: 46, y: 52, size: 5, duration: 5.9, delay: 1.2 },
  { x: 52, y: 8,  size: 4, duration: 6.3, delay: 1.8 },
  { x: 60, y: 72, size: 6, duration: 5.4, delay: 0.4 },
  { x: 67, y: 30, size: 3, duration: 4.9, delay: 2.4 },
  { x: 74, y: 85, size: 5, duration: 6.8, delay: 0.9 },
  { x: 80, y: 15, size: 7, duration: 5.1, delay: 1.6 },
  { x: 86, y: 55, size: 4, duration: 6.0, delay: 0.2 },
  { x: 91, y: 40, size: 5, duration: 5.6, delay: 2.8 },
  { x: 95, y: 78, size: 3, duration: 4.7, delay: 1.1 },
  { x: 25, y: 45, size: 4, duration: 5.3, delay: 1.9 },
  { x: 55, y: 92, size: 3, duration: 6.2, delay: 0.5 },
  { x: 70, y: 60, size: 5, duration: 5.0, delay: 2.2 },
]

// Variants — defined outside component (stable refs, no recreation)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.15 } },
}
const fadeUp    = { hidden: { opacity: 0, y: 28 },  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }
const fadeRight = { hidden: { opacity: 0, x: -28 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }
const flipDown  = { hidden: { opacity: 0, rotateX: -70, y: -14 }, visible: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }
const zoomIn    = { hidden: { opacity: 0, scale: 0.75 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }

export default function Section1() {
  const { displayed, done } = useTypewriter('Developer', 90, 700)

  const imageRef = useRef(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const springX = useSpring(rawX, { stiffness: 55, damping: 18 })
  const springY = useSpring(rawY, { stiffness: 55, damping: 18 })

  const handleMouseMove = (e) => {
    if (!imageRef.current) return
    const rect = imageRef.current.getBoundingClientRect()
    rawX.set((e.clientX - (rect.left + rect.width / 2)) * 0.1)
    rawY.set((e.clientY - (rect.top + rect.height / 2)) * 0.1)
  }
  const handleMouseLeave = () => { rawX.set(0); rawY.set(0) }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* CSS-only blobs (zero JS overhead) */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-orange-500 rounded-full blur-[120px] opacity-[0.09] pointer-events-none blob-a" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-orange-400 rounded-full blur-[100px] opacity-[0.07] pointer-events-none blob-b" />

      {/* Grid overlay — pure CSS */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(251,146,60,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(251,146,60,0.5) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Particles */}
      {PARTICLES.map((p, i) => <Particle key={i} {...p} />)}

      {/* Grid layout */}
      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">

        {/* ── Left ── */}
        <motion.div className="space-y-4 sm:space-y-6" variants={containerVariants} initial="hidden" animate="visible">

          {/* Eyebrow */}
          <motion.div variants={fadeRight} className="flex items-center gap-3">
            <span className="inline-block w-8 sm:w-10 h-[2px] bg-orange-500 rounded-full" />
            <span className="text-orange-400 text-sm sm:text-base tracking-[0.18em] uppercase font-semibold">
              Full-Stack Developer
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-3 sm:space-y-4">
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              I am a{' '}
              <span className="text-orange-500 relative inline-block">
                {displayed}
                <motion.span
                  className="inline-block w-[3px] h-[0.82em] bg-orange-400 align-middle ml-[2px] rounded-sm will-change-opacity"
                  animate={{ opacity: done ? 0 : [1, 0, 1] }}
                  transition={done ? { duration: 0.3, delay: 0.6 } : { duration: 0.55, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] bg-orange-500 rounded-full will-change-transform"
                  initial={{ width: 0 }}
                  animate={{ width: done ? '100%' : 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
            </motion.h1>

            <motion.p variants={fadeRight} className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg">
              I'm <span className="text-white font-semibold">Ayush Rawat</span>, a full-stack
              developer passionate about building scalable web applications, clean user
              interfaces, and reliable software solutions.
            </motion.p>
          </div>

          {/* Tech badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'Node.js', 'TypeScript'].map((tech) => (
              <motion.span
                key={tech}
                className="text-xs px-3 py-1 rounded-full border border-orange-500/30 text-orange-400 bg-orange-500/5 cursor-default"
                whileHover={{ borderColor: 'rgba(249,115,22,0.8)', backgroundColor: 'rgba(249,115,22,0.1)', scale: 1.06 }}
                transition={{ duration: 0.18 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4" variants={containerVariants}>
            <motion.div variants={flipDown}>
              <Link href="/projects">
                <motion.button
                  className="relative bg-orange-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span className="relative z-10">View Projects</span>
                  <motion.span
                    className="absolute inset-0 bg-white/20 -skew-x-12"
                    initial={{ x: '-120%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.45 }}
                  />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div variants={flipDown}>
              <a href="#contact">
                <motion.button
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Contact Me
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Right — Profile Image ── */}
        <motion.div className="flex justify-center md:justify-end" initial="hidden" animate="visible" variants={zoomIn}>
          <div className="relative" ref={imageRef} onMouseLeave={handleMouseLeave}>

            {/* Orbit rings */}
            <motion.div
              className="absolute inset-[-16px] rounded-full border border-orange-500/20 will-change-transform"
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_8px_2px_rgba(249,115,22,0.6)]" />
            </motion.div>

            <motion.div
              className="absolute inset-[-36px] rounded-full border border-orange-500/10 will-change-transform"
              animate={{ rotate: -360 }}
              transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute bottom-0 right-4 w-2 h-2 bg-orange-400/60 rounded-full" />
            </motion.div>

            {/* Static glow */}
            <div className="absolute inset-0 bg-orange-500 rounded-full blur-3xl opacity-[0.18] pointer-events-none" />

            {/* Image */}
            <motion.div
              style={{ x: springX, y: springY }}
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-[3px] cursor-pointer will-change-transform"
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 180, damping: 22 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full will-change-transform"
                style={{ background: 'conic-gradient(from 0deg, transparent 0%, rgba(251,146,60,0.55) 28%, transparent 56%)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
              />
              <div className="relative w-full h-full rounded-full bg-black p-[3px]">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/Ayush_Updated_img.png"
                    alt="Ayush"
                    width={320}
                    height={320}
                    priority
                    className="w-full h-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Badge — Available */}
            <motion.div
              className="absolute -bottom-2 -left-4 sm:-left-8 bg-gray-900 border border-orange-500/40 rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl"
              initial={{ opacity: 0, y: 16, scale: 0.82 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.06 }}
            >
              <motion.span
                className="w-2 h-2 bg-green-400 rounded-full will-change-opacity"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />
              <span className="text-xs text-gray-300 font-medium whitespace-nowrap">Available for work</span>
            </motion.div>

            {/* Badge — Stack */}
            <motion.div
              className="absolute -top-2 -right-4 sm:-right-6 bg-gray-900 border border-orange-500/30 rounded-xl px-3 py-2 shadow-xl"
              initial={{ opacity: 0, y: -16, scale: 0.82 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.06 }}
            >
              <span className="text-xs text-orange-400 font-semibold">⚛ React & Next.js</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* CSS keyframes for blobs */}
      <style jsx>{`
        @keyframes blobA { 0%,100%{transform:scale(1);opacity:.09} 50%{transform:scale(1.13);opacity:.14} }
        @keyframes blobB { 0%,100%{transform:scale(1.1);opacity:.07} 50%{transform:scale(1);opacity:.04} }
        .blob-a { animation: blobA 7s ease-in-out infinite }
        .blob-b { animation: blobB 8s ease-in-out infinite 1.2s }
      `}</style>
    </section>
  )
}