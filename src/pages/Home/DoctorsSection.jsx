import React from 'react'
import DoctorList from '../../components/DoctorsList/DoctorList'

const DoctorsSection = () => {
  return (
    <section>
      <div className='container'>
        <div className='w-full max-w-[500px] mx-auto px-4 mb-8'>
            <h1 className='heading text-center'>Our Great Doctors</h1>
            <p className='text__para text-center'>World-Class care for everyone. Our health System offers unmatched, expert health care.</p>
        </div>

        <DoctorList/>
      </div>
    </section>
  )
}

export default DoctorsSection
