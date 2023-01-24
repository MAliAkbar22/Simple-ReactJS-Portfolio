import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroSection heading="Contact With Me" text="Have Any Project In Your Mind? Just Say Hello! And Feel Free To Contact Me" />
      <Form />
      <Footer />  
    </div>
  )
}

export default Contact