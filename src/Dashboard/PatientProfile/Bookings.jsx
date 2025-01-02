import React from 'react'
import ErrorModel from '../../components/Model/ErrorModel';
import LoadingModel from '../../components/Loading/LoadingModel';


const Bookings = () => {
  const authLoading = false
  const patientError = ""
  const appointments = []

  if (authLoading && !patientError) {
    return <LoadingModel styles={"h-full"}/>
  }
  if(patientError && !authLoading) {
    return <ErrorModel errorMsg={patientError} styles={"pt-[10vh]"}/>
  }
  return (
    <>
      {!patientError && !authLoading && (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        </div>
      )}
      {!authLoading && !patientError && appointments.length === 0 && (
          <ErrorModel errorMsg={"You haven't booked any doctor appointments yet."} styles={"pt-[10vh]"}/>
      )}
    </>
  )
}

export default Bookings
