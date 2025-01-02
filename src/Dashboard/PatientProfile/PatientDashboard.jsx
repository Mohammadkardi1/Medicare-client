import {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { authThunks } from '../../redux/slices/authSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Bookings from './Bookings';
import Settings from './Settings';
import LoadingModel from '../../components/Loading/LoadingModel';
import ErrorModel from '../../components/Model/ErrorModel';
import { deletePatient } from './../../redux/thunks/patientThunks';
import { showToastFailure, showToastSuccess } from './../../utils/toastUtils';

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
        } else {
            showToastFailure("System error! Your account wasn't deleted. Please try again.", { position: "top-right", autoClose: 3000 })
        }
      }

    if (authLoading && !authError) {
        return <LoadingModel styles={"h-[40vh]"}/>
    }
    if (authError && !authLoading) {
        return <ErrorModel errorMsg={authError} styles={"h-[40vh]"}/>
    }

  return (
    <section className='mt-[20px] md:mt-[30px]'>
        {!authLoading && !authError && (
        <div className='max-w-[1170px] md:px-5 mx-auto'>
            <div className='grid md:grid-cols-3 gap-10 md:gap-4'>
                <div className='space-y-6 md:space-y-10 px-[20px] md:px-[5px] rounded-md'>
                    <div className='flex items-center justify-center'>
                        <figure className='w-[200px] border-full border-2 border-solid border-gray-400'>
                            <img src={loggedInUser?.photo} className='w-full'/>
                        </figure>
                    </div>
                    <div className='text-center'>
                        <h3 className='custom-header-sm'>{loggedInUser?.name}</h3>
                        <p className='text-textColor text-[13px] md:text-[15px] leading-6'>{loggedInUser?.email}</p>
                    </div>
                    <div className='w-full space-y-3 md:space-y-4'>
                        <button onClick={handleLogout} 
                            className='w-full px-4 md:px-6 py-1 md:py-2 text-base md:text-lg font-normal md:font-medium
                                bg-[#181A1E] text-white rounded-md hover:outline-none hover:ring-2 hover:ring-black
                                hover:ring-offset-2 transition-all duration-100 ease-in-out'>
                            Logout
                        </button>
                        <button onClick={DeletePatientAccount} className='w-full px-4 md:px-6 py-1 md:py-2 text-base md:text-lg 
                                font-normal md:font-medium leading-7 rounded-md bg-red-600 text-white hover:outline-none 
                                hover:ring-2 hover:ring-red-400 hover:ring-offset-2 transition-all duration-100 ease-in-out'>
                            {patientLoading ?  <LoadingModel/> : "Delete Account"}
                        </button>
                    </div>
                </div>
                <div className='md:col-span-2 md:px-[30px] space-y-4'>
                    <div className='flex justify-around'>
                        <button onClick={() => setTab('bookings')} disabled
                                className={`${tab === 'bookings' && ' bg-primaryColor text-white font-normal'}  
                                px-4 md:px-6 py-1 md:py-2 text-base md:text-lg md:font-medium rounded-md leading-7 
                                text-headingColor border border-solid border-primaryColor`}>
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
