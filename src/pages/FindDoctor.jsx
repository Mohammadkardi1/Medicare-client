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
      <div className='container text-center py-[5rem] space-y-8'>
        <h1 className='heading'>Find a Doctor</h1>

        <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between '
              onKeyDown={handleKeyPress}>
          <input
            type='text'
            className=' py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none  placeholder:text-textColor text-headingColor'
            placeholder='Search Doctor'
            ref={searchInputRef}
            onChange={handleInputChange}
          />
          <button onClick={handleDoctorSearch} className='btn mt-0 rounded-[0px] rounded-r-md'>
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
