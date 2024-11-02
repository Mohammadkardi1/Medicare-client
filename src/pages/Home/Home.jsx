import React from 'react'
import About from './About'
import DoctorsSection from './DoctorsSection/DoctorsSection'
import Feature from './Feature'
import Hero from './Hero'
import HowItWorks from './HowItWorks'
import ServicesSection from './ServicesSection/ServicesSection'




const Home = () => {
  return (
    <>
      <Hero/>
      <HowItWorks/>
      <About/>
      <ServicesSection/>
      <Feature/>
      <DoctorsSection/>
    </>
  )
}

export default Home
