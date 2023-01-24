import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroSection heading="Projects" text="Some Of My Recent Projects" />
      <Work />
      <Footer />  
    </div>
  )
}

export default Project