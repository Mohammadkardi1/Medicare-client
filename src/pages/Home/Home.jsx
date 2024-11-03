import React from 'react'
import About from './About'
import DoctorsSection from './DoctorsSection/DoctorsSection'
import FAQSection from './FAQSection/FAQSection'
import Feature from './Feature'
import Hero from './Hero'
import HowItWorks from './HowItWorks'
import ServicesSection from './ServicesSection/ServicesSection'
import Testimonial from './Testimonial/testimonial'




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
      <Testimonial/>
    </>
  )
}

export default Home
