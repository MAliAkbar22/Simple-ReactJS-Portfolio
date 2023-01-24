import React from 'react'
import "./FooterStyle.css"
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "white", marginRight: "2rem"}}/>
                    <div>
                        <p>Karachi, Sindh, Pakistan</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "white", marginRight: "2rem"}}/>0314-3227662</h4>
                </div>
                <div className="mail">
                    <h4><FaMailBulk size={20} style={{color: "white", marginRight: "2rem"}}/>aliakbar.30@iiee.edu.pk</h4>
                </div>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>I am Muhammad Ali Akbar, A Web Developer, MQL Developer & PineScript Developer</p>
                
                <div className="social">
                    <FaFacebook onClick={()=>{"www.google.com.pk"}} size={30} style={{color: "white", marginRight: "1rem"}}/>
                    <FaTwitter size={30} style={{color: "white", marginRight: "1rem"}}/>
                    <FaInstagram size={30} style={{color: "white", marginRight: "1rem"}}/>
                    <FaLinkedin size={30} style={{color: "white", marginRight: "1rem"}}/>
                    <FaGithub size={30} style={{color: "white", marginRight: "1rem"}}/>
                    <FaWhatsapp size={30} style={{color: "white", marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer