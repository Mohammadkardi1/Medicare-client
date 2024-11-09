import React from 'react'

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
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className=' text-irisBlueColor text-[15px] leading-6 font-semibold'>
                        23 June, 2008
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                      PHD in Surgeon
                    </p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor'>
                  New Apollo Hospital, New York.
                </p>

            </li>
        </ul>
      </div>
    </div>
  )
}

export default DoctorAbout
