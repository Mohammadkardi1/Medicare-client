import React from 'react'
import ServiceList from './ServiceList'

const ServicesSection = () => {
  return (
    <section>
      <div className='container'>
        <div className='w-full max-w-[500px] mx-auto px-4'>
            <h1 className='heading text-center mb-6'>Our Medical Services</h1>
            <p className='text__para text-center'>World-Class care for everyone. Our health System offers unmatched, expert health care.</p>
        </div>

        <ServiceList/>
      </div>
    </section>
  )
}

export default ServicesSection
