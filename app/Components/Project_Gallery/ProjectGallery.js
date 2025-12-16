"use client"
import React,{useEffect} from 'react';
import ImageDiv from './ImageDiv';
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function ProjectGallery() {
   useEffect(()=>{
        AOS.init();
      },[])
  return (
    <section>
      <div id='projects' className="min-h-screen bg-black text-white pt-24 sm:pt-32 px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              Project <span className="text-orange-500">Gallery</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
              A glimpse into my selected work
            </p>
          </div>

          {/* Projects Grid - Zigzag Layout */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Project 1 */}
            <ImageDiv data-aos="zoom-in" data-aos-duration="2000"  src='/glimpse_img1.png' alt='College_event_image'/>
            
            {/* Project 2 */}
            
            <ImageDiv data-aos="zoom-in" data-aos-duration="2000"  src='/glimpse_img2.png' alt='Authentication_image'/>

            {/* Project 3 */}
            <ImageDiv data-aos="zoom-in" data-aos-duration="2000"  src='/glimpse_img3.png' alt='Spotify_image'/>

            {/* Project 4 */}
            <ImageDiv data-aos="zoom-in" data-aos-duration="2000"  src='/glimpse_img4.1.png' alt='Pizzachio_image'/>

          </div>

        </div>
      </div>
    </section>
  );
}