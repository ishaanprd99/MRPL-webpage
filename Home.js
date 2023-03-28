import React from 'react'
import HeroImg from '../components/HeroImg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutMain from '../components/AboutMain'
import WorkCard from '../components/WorkCard'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <AboutMain/>
   <WorkCard />
      <Footer />
    </div>
  )
}

export default Home
