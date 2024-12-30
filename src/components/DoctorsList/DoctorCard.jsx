import React from 'react'
import startIcon from '../../assets/images/Star.png'
import {Link} from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";



const DoctorCard = ({doctor}) => {


const {_id, name, specialization, photo, avgRating, reviews, totalPatients, hospital} = doctor

  return (
    <Link to={`/doctor/${_id}`}>
        <div className='p-3 lg:p-5 space-y-2 lg:space-y-3'>
            <div className="aspect-square w-full overflow-hidden rounded-xl group">
              <img className="object-cover h-full w-full group-hover:scale-110 transition"
                src={photo}/>
            </div>
            <h2 className='custom-cart-header'>{name}</h2>
            <div className='mt-2 lg:mt-4 flex items-center justify-between'>
                {specialization && 
                <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] lg:text-[16px] leading-4
                                lg:leading-7 font-semibold rounded'>
                    {specialization}
                </span>
                }
                <div className='flex items-center gap-[6px]'>
                    <span className='flex items-center gap-[6px] text-[14px] lg:text-[16px] leading-6 lg:leading-7 font-bold 
                                    text-headingColor'>
                        <img src={startIcon} alt='star-icon' />
                        {avgRating}
                    </span>
                    <span className='text-[14px] lg:text-[16px] leading-6 lg:leading-7 font-bold text-textColor'>
                        ({reviews ? reviews?.length : "0"})
                    </span>
                </div>
            </div>
            <div className='mt-[18px] lg:mt-5 flex items-center justify-between'>
                <div>
                    {totalPatients &&
                    <h3 className='text-[16px] lg:text-[18px] leading-7 lg:leading-[30px] font-semibold text-headingColor'>
                        +{totalPatients} patients
                    </h3>
                    }
                    {hospital &&
                    <p className='text-[14px] leading-6 font-[400] text-textColor'>
                        At {hospital}
                    </p>
                    }
                </div>
                <div className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex
                        items-center justify-center group hover:bg-primaryColor hover:border-none' >
                        <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default DoctorCard