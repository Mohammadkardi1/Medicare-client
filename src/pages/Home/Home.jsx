import {useEffect} from 'react'
import About from './About'
import DoctorsSection from './DoctorsSection'
import FAQSection from './FAQSection'
import Feature from './Feature'
import Hero from './Hero'
import HowItWorks from './HowItWorks'
import ServicesSection from './ServicesSection'
import PatientTestimonials from './PatientTestimonials'
import { useLocation } from 'react-router-dom'



const Home = () => {

  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])


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
