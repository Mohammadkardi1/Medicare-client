import React from 'react'
import avatar from '../../assets/images/avatar-icon.png'
import { formateDate } from './../../utils/formateDate';
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from './FeedbackForm';


const DoctorFeedback = () => {
  return (
    <div>
      <div className='mb-[50px]'>

        <h1 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>
          All reviews (65)
        </h1>

        <div className='flex justify-between gap-10 mb-[30px]'>
          <div className=''>

            <div className='flex items-center gap-4'>
              <figure className='w-10 h-10 rounded-full'>
                <img src={avatar} alt='avatar-icon' className='w-full'/>
              </figure>

              <div>
                <h1 className='text-[16px] leading-6 text-primaryColor font-bold'>
                  Ali Ahmad
                </h1>

                <p className='text-[14px] leading-6 text-textColor'>
                  {formateDate('02-14-2023')}
                </p>
              </div>
            </div>

            <div>
              <p className='text__para mt-3 font-medium text-[15px]'>
                Good services, highly recommended
              </p>
            </div>
          </div>

          <div className='flex gap-1'>
            {[...Array(3).keys()].map((_, index) => (
              <AiFillStar key={index} className="text-yellowColor"/>
            ))}
          </div>



        </div>
      </div>


      {<FeedbackForm/>}
    </div>
  )
}

export default DoctorFeedback
