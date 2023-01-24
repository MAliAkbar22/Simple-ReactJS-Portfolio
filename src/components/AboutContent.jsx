import React from 'react'
import { Link } from 'react-router-dom'
import "./AboutContentStyle.css"
import project1 from "../assets/project1.jpg"
import project2 from "../assets/project2.jpg"

function AboutContent() {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I Design and Develop Web Apps, Responsive Websites, Templates and Themes. I also Develop Automated Trading Scripts, Indicators & Expert Advisors (EA) for MT4, MT5 & TradingView Platform.</p>
            <Link to="/contact" ><button className='btn'>Contact</button></Link>
        </div>
        
        <div className="right">
            <div className="image-container">
                <div className="img-stack top">
                    <img src={project1} className="img" alt="Contact Image"/>
                </div>
                <div className="img-stack bottom">
                    <img src={project2} className="img" alt="Contact Image"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent