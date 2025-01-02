import React, {useState} from 'react'
import {Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import {HiStar} from 'react-icons/hi'



const TestimonialSlider = ({ testimonialData, swiperSettings = {} }) => {

  const [expandedStates, setExpandedStates] = useState(
    testimonialData.map(() => false) 
  )

  const toggleText = (index) => {
    setExpandedStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    )
  }


  return (
    <div className='mt-[20px] lg:mt-[45px]'>
      <Swiper modules={[Pagination]} pagination={{ clickable: true }}
            breakpoints = {{
              640: {slidesPerView: 1, spaceBetween: 0},
              768: {slidesPerView: 2, spaceBetween: 20},
              1024: {slidesPerView: 3, spaceBetween: 30},
            }}
          {...swiperSettings} // Spread custom settings
          >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-5 border rounded-lg shadow-lg text-center space-y-2">
                <div className='flex items-center justify-center h-[30px] lg:h-[35px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-full  bg-gray-500 text-white   rounded-full">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                  </svg>
                </div>

                <div>
                  <h1 className="custom-testimonial-header">{testimonial.name}</h1>
                  <div className='flex items-center justify-center'>
                    {Array.from({ length: testimonial.rating }, (_, index) => (
                      <HiStar key={index} className='text-yellowColor w-[18px] h-5'/>
                    ))}
                  </div>
                </div>
                <p className='custom-testimonial-paragraph text-textColor'>
                  {expandedStates[index]
                    ? testimonial.review
                    : testimonial.review.split(' ').slice(0, 20).join(' ') + (testimonial.review.split(' ').length > 20 ? '...' : '')}
                    &nbsp;
                    {testimonial.review.split(' ').length > 20 && (
                      <span onClick={() => toggleText(index)} className="text-blue-500 hover:underline cursor-pointer">
                        {expandedStates[index] ? 'Read Less' : 'Read More'}
                      </span>
                    )}
                </p>
              </div>
            </SwiperSlide>
            ))}
      </Swiper>
    </div>
  )
}

export default TestimonialSlider
