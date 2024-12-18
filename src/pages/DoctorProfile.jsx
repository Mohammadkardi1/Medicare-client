import {useEffect} from 'react'
import DoctorOverview from '../components/DoctorOverview/DoctorOverview'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDoctor } from '../redux/thunks/doctorThunks';
import LoadingModel from './../components/Loading/LoadingModel';
import ErrorModel from './../components/ErrorModel/ErrorModel';

const DoctorProfile = () => {

  const { doctorID } = useParams()
  const dispatch = useDispatch()

  const { doctor, doctorLoading, doctorError } = useSelector(state => state.doctor)


  useEffect(() => {
    dispatch(fetchDoctor(doctorID))
  }, [])
  

  // if (doctorLoading && !doctorError) {
  //     return <LoadingModel styles={"h-[40vh]"}/>
  // }

  // if (doctorError && !doctorLoading) {
  //     return <ErrorModel errorMsg={doctorError} styles={"h-[40vh]"}/>
  // }  

  return (
    <>
      {/* {!doctorLoading && !doctorError &&  */}
      <DoctorOverview doctorProfileData={doctor}/>
      {/* } */}
    </>
  )
}

export default DoctorProfile
