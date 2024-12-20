import React from 'react'
import patientAvatar1 from '../../assets/images/doctor-img05.jpg'
import patientAvatar2 from '../../assets/images/doctor-img06.jpg'
import patientAvatar3 from '../../assets/images/doctor-img03.png'
import patientAvatar4 from '../../assets/images/hero-img01.png'


import TestimonialSlider from '../../components/Testimonial/TestimonialSlider'


const patientTestimonialsData = [
  {
    name: 'John Doe',
    review: 'Dr. Lee was quick and efficient without compromising on quality of care. The entire process, from consultation to prescription, was smooth and well-managed.',
    rating: 3,
    image: patientAvatar1
  },
  {
    name: 'Jane Smith',
    review: 'I was disappointed with my experience. The doctor seemed rushed and didn’t take the time to fully understand my concerns. I left the appointment feeling unheard and unsure about the next steps in my treatment.',
    rating: 1,
    image: patientAvatar2
  },
  {
    name: 'Mark Wilson',
    review: "I appreciated Dr. Johnson's kind and empathetic approach. He made me feel comfortable and reassured throughout the visit.",
    rating: 5,
    image: patientAvatar3
  },
  {
    name: 'John Doe',
    review: 'Dr. Smith demonstrated exceptional professionalism during the consultation. He listened attentively and addressed all my concerns thoroughly.',
    rating: 4,
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
