import React from 'react'
import { formateDate } from '../../utils/formateDate';



const About = ({doctorInfo}) => {
  return (
    <div>
      {doctorInfo?.about && 
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
            About of
            <span className=' text-irisBlueColor font-bold text-[24px] leading-9'>
                Dr. {doctorInfo?.name}
            </span>
        </h3>
        <p className='text__para'>
          {doctorInfo?.about}
        </p>
      </div>
      }

      {doctorInfo?.hospital &&
      <div className='mt-12'>
        <h1 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
            Hospital
        </h1>
        <ul className='pt-4 md:p-5'>
            <li className='text-[16px] leading-6 font-medium text-textColor'>
              {doctorInfo?.hospital}
            </li>
        </ul>
      </div>
      }

      {doctorInfo?.phone &&
      <div className='mt-12'>
        <h1 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
            Phone Number
        </h1>
        <ul className='pt-4 md:p-5'>
            <li className='text-[16px] leading-6 font-medium text-textColor'>
              {doctorInfo?.phone}
            </li>
        </ul>
      </div>
      }

      {doctorInfo?.qualifications?.length !== 0 && 
      <div className='mt-12'>
        <h1 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
            Education
        </h1>
        <ul className='pt-4 md:p-5'>
          {doctorInfo?.qualifications?.map((item, index) => (
            <li key={index} className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className=' text-irisBlueColor text-[15px] leading-6 font-semibold'>
                        {formateDate(item.startingDate)} - {formateDate(item.endingDate)}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                      {item.degree}
                    </p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor'>
                  {item.institution}
                </p>
            </li>
          ))}
        </ul>
      </div>
      }




      {doctorInfo?.experiences?.length !== 0 && 
      <div className='mt-12'>
        <h1 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
            Experience
        </h1>


        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
          {doctorInfo?.experiences?.map((item, index) => (
            <li key={index} className=' p-4 rounded bg-[#fff9ea]'>
              <span className=' text-yellowColor text-[15px] leading-6 font-semibold'>
                  {formateDate(item.startingDate)} - {formateDate(item.endingDate)}
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>
                {item.position}
              </p>
              <p className='text-[14px] leading-5 font-medium text-textColor'>
                {item.company}
              </p>
            </li>
          ))}
        </ul>
      </div>
      }
    </div>
  )
}

export default About
