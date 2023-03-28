import "./FooterStyles.css"
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaVimeo} from "react-icons/fa"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color: "#fff",marginRight:"2rem" }} />

                <div>
                    <p> Kuthethoor P.O., Via Katipalla, </p>
                    <p> MANGALORE, INDIA - 575 030 </p>
                </div>
            </div>
            <div className="phone">
                <h4>        <FaPhone size={20} style={{color: "#fff",marginRight:"2rem" }} />
                (91-824) 2270400</h4>

                <h4>        <FaPhone size={20} style={{color: "#fff",marginRight:"2rem" }} />
                (91-824) 2271404</h4>
     
     
            </div>
           

            
      
        </div>

      
      

        <div className="right">
        <div className="email">
            <p> GST : 29AAACM5132A1ZZ </p>
            <p>  CIN : L23209KA1988GOI008959</p>
            </div>
        <h5> COPYRIGHT © 2023 ALL RIGHTS RESERVED </h5>
        <h6> Developed by Ishaan Prasad </h6>
        </div>
      </div>
    </div>
  )
}

export default Footer

