"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

export default function ImageDiv({ src, alt, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.88, y: 30 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border-2 border-gray-800"
      whileHover={{ borderColor: 'rgba(249,115,22,0.8)', scale: 1.02 }}
    >
      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 to-transparent z-10"
        initial={{ scaleX: 0, originX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.7, delay: delay + 0.15 }}
      />

      <div className="aspect-video overflow-hidden relative">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Hover gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-orange-500/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        />
      </div>
    </motion.div>
  )
}