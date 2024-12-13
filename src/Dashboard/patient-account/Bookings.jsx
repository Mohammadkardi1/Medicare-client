import React from 'react'
import ErrorModel from './../../components/ErrorModel/ErrorModel';
import LoadingModel from './../../components/Loading/LoadingModel';
import DoctorList from './../../components/DoctorsList/DoctorList';
import DoctorCard from '../../components/DoctorsList/DoctorCard';

const Bookings = () => {

  // Here you have to get the appointments of the patient via HTTP request

  
  const loading = false
  const patientError = ""
  const appointments = []


  if (loading && !patientError) {
    return <LoadingModel styles={"h-full"}/>
  }

  if(patientError && !loading) {
    return <ErrorModel errorMsg={patientError} styles={"pt-[10vh]"}/>
  }

  return (
    <>
      {!patientError && !loading && (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>



        </div>
      )}

      {!loading && !patientError && appointments.length === 0 && (
          <ErrorModel errorMsg={"You haven't booked any doctor appointments yet."} styles={"pt-[10vh]"}/>
      )}
    </>
  )
}

export default Bookings
