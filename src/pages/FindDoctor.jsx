import React from 'react'
import DoctorList from '../components/DoctorsList/DoctorList';

const FindDoctor = () => {
  return (
    <>
    <section className='bg-[#fff9ea]'>
      <div className='container text-center py-[5rem] space-y-8'>
        <h1 className='heading'>Find a Doctor</h1>

        <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between '>
          <input
            id='doctorName' 
            type='search'
            className=' py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none  placeholder:text-textColor text-headingColor'
            placeholder='Search Doctor'
          />
          <button className='btn mt-0 rounded-[0px] rounded-r-md'>
            Search
          </button>
        </div>
      </div>
    </section>


    <section>
      <div className='container'>


        <DoctorList/>
      </div>
    </section>


    </>
  )
}

export default FindDoctor
