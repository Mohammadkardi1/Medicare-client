import React, {useEffect} from 'react'
import { doctorsData } from '../../assets/data/doctors'
import DoctorCard from './DoctorCard'
import { useSelector, useDispatch } from 'react-redux';
import { fetchDoctors } from './../../redux/thunks/doctorThunks';
import LoadingModel from './../Loading/LoadingModel';
import ErrorModel from '../Model/ErrorModel';


const DoctorList = () => {

  const dispatch = useDispatch()

  const { doctors, doctorLoading, doctorError } = useSelector(state => state.doctor)


  useEffect(() => {
    dispatch(fetchDoctors())
  }, [])

 
  if (doctorLoading && !doctorError) {
      return <LoadingModel styles={"h-[40vh]"}/>
  }

  if (doctorError && !doctorLoading) {
      return <ErrorModel errorMsg={doctorError} styles={"h-[40vh]"}/>
  }  

  return (
    <>
    {!doctorLoading && !doctorError && 
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
      {doctors?.map((doctor, index) => (
        <DoctorCard doctor={doctor} key={index}/>
      ))}
    </div>
    }
    </>
  )
}





export default DoctorList
