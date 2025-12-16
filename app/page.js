
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import MainDiv from './Components/MainDiv/MainDiv'
import Footer from './Components/Footer/Footer'
import Border from './Components/Border'
import Contact from './Components/contact/Contact'
import About from './Components/about/About'

export default function page() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <MainDiv/>
      <About/>
      <Border/>
      <Contact/>
      <Border/>
      <Footer/>
    </div>
  )
}
