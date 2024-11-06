import React from 'react'
import About from './About'
import DoctorsSection from './DoctorsSection'
import FAQSection from './FAQSection'
import Feature from './Feature'
import Hero from './Hero'
import HowItWorks from './HowItWorks'
import ServicesSection from './ServicesSection'
import PatientTestimonials from './PatientTestimonials'




const Home = () => {
  return (
    <>
      <Hero/>
      <HowItWorks/>
      <About/>
      <ServicesSection/>
      <Feature/>
      <DoctorsSection/>
      <FAQSection/>
      <PatientTestimonials/>
    </>
  )
}

export default Home
