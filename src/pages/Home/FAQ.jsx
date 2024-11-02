import React from 'react'
import faqImg from '../../assets/images/faq-img.png'

const FAQ = () => {
  return (
    <section>
      <div className='container'>
        <div className='flex justify-between gap-[50px] lg:gap-0'>
            <div className='w-1/2 hidden md:block'>
                <img src={faqImg} alt='FAQ-Image'/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
