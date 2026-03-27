"use client"
import React, { useRef } from 'react'
import ImageDiv from './ImageDiv'
import { motion, useInView } from 'framer-motion'

function RevealOnScroll({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : 0,
      x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
      scale: direction === 'zoom' ? 0.88 : 1,
    },
    visible: {
      opacity: 1, y: 0, x: 0, scale: 1,
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
      {children}
    </motion.div>
  )
}

const Particle = ({ style }) => (
  <motion.div
    className="absolute rounded-full bg-orange-500 pointer-events-none"
    style={style}
    animate={{ y: [0, -22, 0], opacity: [0.07, 0.18, 0.07] }}
    transition={{ duration: Math.random() * 4 + 4, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
  />
)

const particles = [
  { width: 6, height: 6, top: '10%', left: '3%' },
  { width: 4, height: 4, top: '70%', left: '6%' },
  { width: 7, height: 7, top: '30%', left: '94%' },
  { width: 5, height: 5, top: '80%', left: '90%' },
]

const images = [
  { src: '/Traversal.png',      alt: 'College_event_image',    delay: 0 },
  { src: '/glimpse_img1.png',   alt: 'Authentication_image',   delay: 0.1 },
  { src: '/glimpse_img3.png',   alt: 'Spotify_image',          delay: 0.2 },
  { src: '/glimpse_img4.1.png', alt: 'Pizzachio_image',        delay: 0.3 },
]

export default function ProjectGallery() {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Ambient blobs */}
      <motion.div
        className="absolute top-1/3 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-orange-500 rounded-full blur-[140px] opacity-[0.07] pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-orange-400 rounded-full blur-[120px] opacity-[0.06] pointer-events-none"
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

      {/* Particles */}
      {particles.map((p, i) => (
        <Particle key={i} style={{ width: p.width, height: p.height, top: p.top, left: p.left }} />
      ))}

      <div id="projects" className="min-h-screen text-white pt-24 sm:pt-32 px-4 sm:px-6 pb-12 sm:pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <RevealOnScroll direction="zoom">
            <div className="text-center mb-12 sm:mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-[2px] bg-orange-500 rounded-full inline-block" />
                <span className="text-orange-400 text-sm tracking-[0.2em] uppercase font-semibold">Gallery</span>
                <span className="w-8 h-[2px] bg-orange-500 rounded-full inline-block" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
                Project{' '}
                <span className="text-orange-500 relative inline-block">
                  Gallery
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[3px] bg-orange-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                </span>
              </h1>
              <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
                A glimpse into my selected work
              </p>
            </div>
          </RevealOnScroll>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {images.map((img, i) => (
              <ImageDiv key={i} src={img.src} alt={img.alt} delay={img.delay} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}