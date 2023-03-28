import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./NavbarStyles.css"
import Logo from "../assets/logo.jpg"
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {

    const [ click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const [color, setColor] = useState(false)
    const changecolor = () => {
        if(window.scrollY >= 100){
            setColor(true)

        }else{
            setColor(false)
        }
    }

    window.addEventListener("scroll" , changecolor)

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/"> <img src={Logo} alt="" /> </Link>
       <div className='headers'> 
        <h1 className='title1'>  मंगलूर रिफाइनरी एंड पेट्रोकेमिकल्स लिमिटेड </h1>
       <h1 className='title1'> Mangalore Refinery and Petrochemicals Limited</h1>
       <h4 className='title'>  (A Govt. of India Enterprise and a subsidiary of ONGC Ltd.)</h4>

       </div>


        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/"> Home </Link>
            </li>
            <li>

            <a href='https://connections.mrpl.co.in/homepage/login/' target="_blank" > LogIn </a>

            </li>
          
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (            <FaTimes size={20} style={{color: "#fff", marginRight: "20px"}} />
) : (            <FaBars size={20} style={{color: "#fff", marginRight: "20px"}} />
)}

        </div>
      
    </div>
  )
}

export default Navbar
