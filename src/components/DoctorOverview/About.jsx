import React from 'react'
import { formateDate } from '../../utils/formateDate';



const About = ({doctorProfileData}) => {
  return (
    <div className='space-y-6 md:space-y-10'>
      {doctorProfileData?.about && 
      <div className='space-y-1 md:space-y-2'>
        <h3 className='custom-header-sm flex items-center gap-2'>
            About of<span className='text-irisBlueColor'>Dr. {doctorProfileData?.name}</span>
        </h3>
        <p className='custom-paragraph text-textColor'>{doctorProfileData?.about}</p>
      </div>
      }
      {doctorProfileData?.hospital &&
      <div className='space-y-1 md:space-y-2'>
        <h1 className='custom-header-sm'>Hospital</h1>
        <ul className='px-3 md:px-5'>
            <li className='custom-paragraph text-textColor'>{doctorProfileData?.hospital}</li>
        </ul>
      </div>
      }
      {doctorProfileData?.phone &&
      <div className=' space-y-1 md:space-y-2'>
        <h1 className='custom-header-sm'>Phone Number</h1>
        <ul className='px-3 md:px-5'>
            <li className='custom-paragraph text-textColor'>{doctorProfileData?.phone}</li>
        </ul>
      </div>
      }
      {doctorProfileData?.qualifications?.length !== 0 && 
      <div className='space-y-1 md:space-y-2'>
        <h1 className='custom-header-sm'>Education</h1>
        <ul className='px-3 md:px-5 space-y-3 md:space-y-4'>
          {doctorProfileData?.qualifications?.map((item, index) => (
            <li key={index}>
                <div>
                    <span className='custom-paragraph font-semibold text-irisBlueColor'>
                        {formateDate(item.startingDate)} - {formateDate(item.endingDate)}
                    </span>
                    <p className='custom-paragraph text-textColor'>{item.degree}</p>
                    <p className='custom-paragraph text-textColor'>{item.institution}</p>
                </div>
            </li>
          ))}
        </ul>
      </div>
      }
      {doctorProfileData?.experiences?.length !== 0 && 
      <div className='space-y-1 md:space-y-2'>
        <h1 className='custom-header-sm'>Experience</h1>
        <ul className='grid md:grid-cols-2  px-3 md:px-5 gap-[10px] md:gap-[30px]'>
          {doctorProfileData?.experiences?.map((item, index) => (
            <li key={index} className=' p-4 rounded bg-[#fff9ea]'>
              <span className='custom-paragraph font-semibold text-yellowColor'>
                  {formateDate(item.startingDate)} - {formateDate(item.endingDate)}
              </span>
              <p className='custom-paragraph text-textColor'>{item.position}</p>
              <p className='custom-paragraph text-textColor'>{item.company}</p>
            </li>
          ))}
        </ul>
      </div>
      }
    </div>
  )
}

export default About
