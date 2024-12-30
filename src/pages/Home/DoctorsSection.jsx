import React from 'react'
import DoctorList from '../../components/DoctorsList/DoctorList'

const DoctorsSection = () => {
  return (
    <section>
      <div className='container'>
        <div className='max-w-[400px] lg:max-w-[600px] mx-auto'>
            <h1 className='custom-header text-center'>Our Great Doctors</h1>
            <p className='custom-paragraph text-textColor mt-[10px] lg:mt-[18px] text-center'>
              World-Class care for everyone. Our health System offers unmatched, expert health care.
            </p>
        </div>

        <DoctorList/>
      </div>
    </section>
  )
}

export default DoctorsSection
