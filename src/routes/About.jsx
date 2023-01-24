import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroSection heading="About Me" text="About Me, Who Am I?" />
      <AboutContent />
      <Footer />  
    </div>
  )
}

export default About