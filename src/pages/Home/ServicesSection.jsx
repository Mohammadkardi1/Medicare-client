import React from 'react'
import ServicesList from '../../components/ServicesList/ServicesList'

const ServicesSection = () => {
  return (
    <section>
      <div className='container'>
        <div className='max-w-[400px] lg:max-w-[600px] mx-auto'>
            <h1 className='custom-header text-center'>Our Medical Services</h1>
            <p className='custom-paragraph text-textColor mt-[10px] lg:mt-[18px] text-center'>World-Class care for everyone. Our health System offers unmatched, expert health care.</p>
        </div>

        <ServicesList/>
      </div>
    </section>
  )
}

export default ServicesSection
