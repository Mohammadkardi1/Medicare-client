import React from 'react'
import { formateDate } from '../../utils/formateDate';

const educationHistory = [
  {
  beginDate: '2005-09-01',
  completionDate: '2009-05-15',
  degree: 'Bachelor of Science in Biology',
  institution: 'University of California, Los Angeles',
  },
  {
    beginDate: '07-28-2009',
    completionDate: '08-12-2013',
    degree: 'Master in Surgery',
    institution: 'New Apollo Hospital, New York'
  }
]


const experienceHistory = [
  {
    startDate: '2005-09-01',
    endDate: '2009-05-15',
    position: 'Junior Biologist',
    company: 'Greenfield Environmental Research Institute',
    location: 'Los Angeles, CA',
  },
  {
    startDate: '2009-07-28',
    endDate: '2013-08-12',
    position: 'Surgical Resident',
    company: 'New Apollo Hospital',
    location: 'New York, NY',
  }
];


const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
            About of
            <span className=' text-irisBlueColor font-bold text-[24px] leading-9'>
                Dr. Saleh Mahmud
            </span>
        </h3>
        <p className='text__para'>
            Pariatur occaecat tempor laborum nulla sit est consectetur incididunt ut quis anim. Ad commodo consequat velit ut 
            non laborum quis. Quis in commodo sint voluptate culpa laborum consequat minim laborum anim consectetur irure sunt. 
            Consequat cupidatat aute non ipsum mollit cupidatat incididunt labore pariatur exercitation.
        </p>
      </div>


      <div className='mt-12'>
        <h1 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
            Education
        </h1>
        <ul className='pt-4 md:p-5'>
          {educationHistory.map((item, index) => (
            <li key={index} className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className=' text-irisBlueColor text-[15px] leading-6 font-semibold'>
                        {formateDate(item.beginDate)} - {formateDate(item.completionDate)}
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





      <div className='mt-12'>
        <h1 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
            Experience
        </h1>


        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
          {experienceHistory.map((item, index) => (
            <li key={index} className=' p-4 rounded bg-[#fff9ea]'>
              <span className=' text-yellowColor text-[15px] leading-6 font-semibold'>
                  {formateDate(item.startDate)} - {formateDate(item.endDate)}
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




    </div>
  )
}

export default DoctorAbout
