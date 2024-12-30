import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';

const ServiceCard = ({item, index}) => {

    const {name, desc, bgColor, textColor} = item

  return (
    <div className='py-[20px] lg:py-[30px] px-3 lg:px-5'>
        <h1 className='custom-cart-header'>{name}</h1>
        <p className='custom-paragraph text-textColor mt-1 lg:mt-3'>{desc}</p>
        <div className='flex items-center justify-between mt-[15px] lg:mt-[30px]'>
            <Link to='#' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center 
                        justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5'/>
            </Link>
            <span className='w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]'
                style={{background: `${bgColor}`, color: `${textColor}`, borderRadius: "6px 0 0 6px"}}>
                {index + 1}
            </span>
        </div>
    </div>
  )
}

export default ServiceCard
