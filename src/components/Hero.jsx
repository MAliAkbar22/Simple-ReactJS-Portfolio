import React from 'react'
import './HeroStyle.css'
import Homeimg from '../assets/Homeimg.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className='intro-img' src={Homeimg} alt="Intro Img" />
        </div>

        <div className="content">
            <p>Hi, I Am Muhammad Ali Akbar</p>
            <h1>Web Developer</h1>
            <div className="hero-btn">
                <Link to="/Project" className="btn">Download CV</Link>
                <Link to="https://wa.me/+923143227662" className="btn btn-light">Contact Me</Link>                
            </div>
        </div>
    </div>
  )
}

export default Hero