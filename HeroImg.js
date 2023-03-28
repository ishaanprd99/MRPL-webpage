import React from 'react'
import "./HeroImgStyles.css"
import { Link } from 'react-router-dom'
import refinery from "../assets/refinery.jpg"


const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
  <img src={refinery} alt='' className='intro-img' />
       
      </div>

        <div className="content">
      <h1>Mangalore Refinery and Petrochemicals Limited</h1>
      
            <p> ONGC , MRPL</p>
           
        </div>

    </div>
  )
}

export default HeroImg
