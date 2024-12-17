import React from 'react'
import patientAvatar1 from '../../assets/images/doctor-img01.png'
import patientAvatar2 from '../../assets/images/doctor-img02.png'
import patientAvatar3 from '../../assets/images/doctor-img03.png'
import patientAvatar4 from '../../assets/images/hero-img01.png'


import TestimonialSlider from '../../components/Testimonial/TestimonialSlider'


const patientTestimonialsData = [
  {
    name: 'John Doe',
    review: 'I have medical services from then. There is a solution at the site of refusal to extend medical services.',
    rating: 1,
    image: patientAvatar1
  },
  {
    name: 'Jane Smith',
    review: 'I have medical services from then. There is a solution at the site of refusal to extend medical services.',
    rating: 4,
    image: patientAvatar2
  },
  {
    name: 'Mark Wilson',
    review: 'I have medical services from then. There is a solution at the site of refusal to extend medical services.',
    rating: 3,
    image: patientAvatar3
  },
  {
    name: 'John Doe',
    review: 'I have medical services from then. There is a solution at the site of refusal to extend medical services.',
    rating: 2,
    image: patientAvatar4
  }

]


const PatientTestimonials = () => {
  return (
    <section>
      <div className='container'>

      
        <div className='w-full max-w-[500px] mx-auto px-4 mb-8'>
            <h1 className='heading text-center'>What Our Patients Say</h1>
            <p className='text__para text-center'>
              World-Class care for everyone. Our health System offers unmatched, expert health care.
            </p>
        </div>

        <TestimonialSlider
          testimonialData={patientTestimonialsData}
          swiperSettings={{
            slidesPerView: 1,
            spaceBetween: 30,
            // loop: true, // Enables looping of slides
            // autoplay: { delay: 3000 } // Enables autoplay with a 3-second delay
          }}
        />


      </div>
    </section>
  )
}

export default PatientTestimonials
