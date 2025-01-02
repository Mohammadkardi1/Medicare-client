import React, {useEffect, useRef} from 'react'
import DoctorList from '../components/DoctorsList/DoctorList';
import PatientTestimonials from './Home/PatientTestimonials';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchDoctors } from '../redux/thunks/doctorThunks';
import { fetchDoctors } from './../redux/thunks/doctorThunks';


const FindDoctor = () => {

  const { pathname } = useLocation()
  const dispatch = useDispatch()

  const searchInputRef  = useRef(null)


  const handleInputChange = async () => {
    if (searchInputRef.current.value.trim() === '') {
      try {
        await dispatch(fetchDoctors())
      } catch (error) {
        console.log(error.message)
      }
    }
  }

  const handleDoctorSearch  = async () => {
    try {
      await dispatch(searchDoctors(searchInputRef.current.value))
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleDoctorSearch()
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])


  return (
    <>
    <section className='bg-[#fff9ea]'>
      <div className='container text-center py-[5rem] space-y-4 md:space-y-8'>
        <h1 className='custom-header'>Find a Doctor</h1>
        <div className='max-w-[570px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between '
              onKeyDown={handleKeyPress}>
          <input type='text' placeholder='Search Doctor' ref={searchInputRef} onChange={handleInputChange}
            className='py-2 pl-2 pr-1 md:py-4 md:pl-4 md:pr-2 font-[500] md:font-[600] mt-0 text-base sm:text-lg
            bg-transparent w-full focus:outline-none  placeholder:text-textColor text-headingColor'/>
          <button onClick={handleDoctorSearch} 
                  className='py-[8px] px-[20px] md:py-[15px] md:px-[35px] font-[500] md:font-[600] mt-0 text-base sm:text-lg
                  rounded-[0px] rounded-r-md bg-primaryColor text-white '>
            Search
          </button>
        </div>
      </div>
    </section>
    <div className='container'>
      <section><DoctorList/></section>
      <section><PatientTestimonials/></section>
    </div>
    </>
  )
}

export default FindDoctor
