import React, { useState } from 'react'
import { CiSquarePlus } from "react-icons/ci";
import { FaSquareMinus } from "react-icons/fa6";
// import { AiOutlineMinus, AiOutlinePlus  } from "react-icons/ai";


const FAQCard = ({faq}) => {

  const [ isVisible, setIsVisible ] = useState(false)



  const handleVisibility = () => {
    setIsVisible(!isVisible)
  }




  return (
    <div className='border-[1px] border-textColor rounded-[8px] p-5 space-y-4'>
      <div className='flex justify-between items-center'>
        <h1 className=' text-headingColor font-[600] leading-5 text-[18px] '>{faq.question}</h1>
        <div>
          <button onClick={handleVisibility}>
            {isVisible ? (
              <FaSquareMinus  size={30} className='text-primaryColor' />
            ): (
              <CiSquarePlus size={30} className=' hover:text-primaryColor'/>
            )}
          </button>
        </div>
      </div>
      {isVisible && (
        <p className='text-textColor'>{faq.answer}</p>
      )}
    </div>
  )
}

export default FAQCard
