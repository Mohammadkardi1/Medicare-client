import {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { authThunks } from '../../redux/slices/authSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Bookings from './Bookings';
import Settings from './Settings';
import LoadingModel from '../../components/Loading/LoadingModel';
import ErrorModel from '../../components/ErrorModel/ErrorModel';
import { deletePatient } from './../../redux/thunks/patientThunks';
import { showToastSuccess } from './../../utils/toastUtils';

const PatientDashboard = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { pathname } = useLocation()


    const [tab, setTab] = useState('bookings')

    const {loggedInUser, authLoading, authError} = useSelector(state => state.auth)
    const { patientLoading } = useSelector(state => state.patient)



    useEffect(() => {
      window.scrollTo(0, 0); 
    }, [pathname])

    const handleLogout = () => {
        dispatch(authThunks.logout())
        navigate('/home')
    }


    const DeletePatientAccount = async () => {
        const res = await dispatch(deletePatient(loggedInUser._id))
    
        if (!res.error) {
          dispatch(authThunks.syncLocalStorage())
          showToastSuccess("Your account has been deleted successfully!", { position: "top-right", autoClose: 3000 })
          navigate('/home')
        }
      }


    if (authLoading && !authError) {
        return <LoadingModel styles={"h-[40vh]"}/>
    }

    if (authError && !authLoading) {
        return <ErrorModel errorMsg={authError} styles={"h-[40vh]"}/>
    }


  return (
    <section className='mt-[75px]'>
        {!authLoading && !authError && (
        <div className='max-w-[1170px] px-5 mx-auto'>
            <div className='grid md:grid-cols-3 gap-10'>
                <div className='pb=[50px] px-[30px] rounded-md'>
                    <div className='flex items-center justify-center'>
                        <figure className='w-[200px] border-full border-2 border-solid border-gray-400'>
                            <img src={loggedInUser?.photo} className='w-full'/>
                        </figure>
                    </div>


                    <div className='text-center mt-4'>
                        <h3 className='text-[18px] leading-[30px] text-headingColor font-bold'>{loggedInUser?.name}</h3>
                        <p className='text-textColor text-[15px] leading-6 font-medium'>{loggedInUser?.email}</p>
                        {/* <p className='text-textColor text-[15px] leading-6 font-medium'>
                            Blood Type:
                            <span className='ml-2 text-headingColor text-[22px] leading-8'>
                                o-
                            </span>
                        </p> */}
                    </div>

                    <div className='w-full mt-[50px] md:mt-[100px]'>
                        <button onClick={handleLogout} className='w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white'>
                            Logout
                        </button>
                        <button onClick={DeletePatientAccount} className='w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white'>
                            {patientLoading ?  <LoadingModel/> : "Delete Account"}
                        </button>
                    </div>

                </div>
            
                <div className='md:col-span-2 md:px-[30px] space-y-4'>
                    <div className='flex justify-around'>
                        <button onClick={() => setTab('bookings')} disabled
                                className={`${tab === 'bookings' && ' bg-primaryColor text-white font-normal'} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border 
                                            border-solid border-primaryColor`}>
                            My Bookings
                        </button>
                        {/* <button onClick={() => setTab('settings')} 
                                className={`${tab === 'settings' && ' bg-primaryColor text-white font-normal'} py-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border 
                                            border-solid border-primaryColor`}>
                            Profile Settings
                        </button> */}
                    </div>

                    {tab === 'settings' ? <Settings/> : <Bookings/>}
                </div>
            </div>
        </div>
        )}
    </section>
  )
}

export default PatientDashboard
