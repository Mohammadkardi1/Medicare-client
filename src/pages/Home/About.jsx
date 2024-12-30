import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <section className='about__section'>
      <div className='container'>
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
          {/* ========== Left About Section ========== */}
          <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-0 order-2 lg:order-1'>
            <img src={aboutImg} alt='about-image'/>
            <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
              <img src={aboutCardImg} alt='about-card-image'/>
            </div>
          </div>
          {/* ========== Right About Section ========== */}
          <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
            <h1 className='custom-header'>Proud to be one of the nations best</h1>
            <p className='custom-paragraph text-textColor mt-[10px] lg:mt-[18px]'>
              Consequat occaecat voluptate elit labore adipisicing officia id occaecat duis consequat minim. 
              Aute consequat minim duis enim elit commodo nostrud enim 4.
            </p>
            <p className='custom-paragraph text-textColor mt-[18px] lg:mt-[30px]'>
              Eu reprehenderit Lorem culpa voluptate eu mollit velit cillum ad consequat aute reprehenderit. 
              Minim veniam incididunt eu ea deserunt ex cupidatat veniam velit aliquip officia ut veniam.
            </p>
            <button className='custom-button mt-[20px] lg:mt-[38px]'>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
