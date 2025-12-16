"use client"
import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ProjectSection from '../Components/Project_site/ProjectSection'
import Footer from '../Components/Footer/Footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Border from '../Components/Border'
export default function page() {
    useEffect(()=>{
        Aos.init()
      },[])
  return (
    <div>
      <main>
         <Link data-aos="fade-down-right" data-aos-duration="1500" href='/'className=" ml-6 mt-4 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"><ArrowLeft/><span>Back</span></Link>   
        <ProjectSection/>   
      </main>
      <Border/>
      <Footer/>
    </div>
  )
}
