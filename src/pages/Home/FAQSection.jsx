import React from 'react'
import faqImg from '../../assets/images/faq-img.png'
import FAQList from '../../components/FAQList/FAQList'

const FAQSection = () => {
  return (
    <section>
      <div className='container'>
        <div className='flex justify-between gap-[30px] lg:gap-[40px] xl:gap-0 flex-col lg:flex-row'>
            {/* ========== Left FAQ Section ========== */}
            <div className='w-full lg:w-1/2 xl:w-[770px] z-0 order-2 lg:order-1 flex justify-center'>
                <img src={faqImg} alt='FAQ-Image'/>
            </div>
            {/* ========== Right FAQ Section ========== */}
            <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
              <h1 className='custom-header mb-4 lg:mb-8'>Most questions by our beloved patients</h1>
              <FAQList/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
