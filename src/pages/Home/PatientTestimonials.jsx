import React from 'react'
import patientAvatar from '../../assets/images/patient-avatar.png'
import TestimonialSlider from '../../components/Testimonial/TestimonialSlider'


const patientTestimonialsData = [
  {
    name: 'John Doe',
    review: 'I have medical services from then. There is a solution at the site of refusal to extend medical services.',
    rating: 2,
    image: patientAvatar
  },
  {
    name: 'Jane Smith',
    review: 'I have medical services from then. There is a solution at the site of refusal to extend medical services.',
    rating: 4,
    image: patientAvatar
  },
  {
    name: 'Mark Wilson',
    review: 'I have medical services from then. There is a solution at the site of refusal to extend medical services.',
    rating: 3,
    image: patientAvatar
  },
  {
    name: 'John Doe',
    review: 'I have medical services from then. There is a solution at the site of refusal to extend medical services.',
    rating: 2,
    image: patientAvatar
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


        <div className='mt-[30px] lg:mt-[55px]'>


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


      </div>
    </section>
  )
}

export default PatientTestimonials
