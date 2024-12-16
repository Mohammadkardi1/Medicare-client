import React from 'react'
import DoctorOverview from '../components/DoctorOverview/DoctorOverview'
import { useSelector } from 'react-redux';

const DoctorProfile = () => {

  const {userInfo} = useSelector(state => state.auth)
  

  return (
    <DoctorOverview doctorInfo={userInfo}/>
  )
}

export default DoctorProfile
