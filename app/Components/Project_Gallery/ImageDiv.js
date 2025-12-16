import React from 'react'
import Image from 'next/image'
export default function ImageDiv(params) {
    return (
        <div data-aos="zoom-in" data-aos-duration="2000" className="group relative overflow-hidden rounded-2xl border-2 border-gray-800 hover:border-orange-500 transition-all duration-300">
              <div  className="aspect-video overflow-hidden relative">
                <Image 
                
                  src={params.src} 
                  alt={params.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
    )
}
