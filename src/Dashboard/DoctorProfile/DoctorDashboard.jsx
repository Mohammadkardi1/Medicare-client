import {useState, useEffect} from 'react'
import LoadingModel from '../../components/Loading/LoadingModel';
import ErrorModel from '../../components/Model/ErrorModel';
import { useSelector, useDispatch } from 'react-redux';
import { BiMenu } from 'react-icons/bi'
import { useNavigate, useLocation } from 'react-router-dom';
import { authThunks } from '../../redux/slices/authSlice';
import Appointments from './Appointments';
import DoctorOverview from '../../components/DoctorOverview/DoctorOverview';
import DashboardForm from '../../components/Form/DashboardForm';
import { showToastFailure, showToastSuccess } from './../../utils/toastUtils';
import { deleteDoctor } from './../../redux/thunks/doctorThunks';




const sidebarItems = [
  {
      panel: "overview",
      label: "Overview"
  },
  {
      panel: "appointments",
      label: "Appointments"
  },
  {
      panel: "settings",
      label: "Settings"
  },
]


const DoctorDashboard = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const { pathname } = useLocation()

  
  const [panel, setPanel] = useState('overview')

  const {loggedInUser, authLoading, authError} = useSelector(state => state.auth)
  const { doctorLoading } = useSelector(state => state.doctor)


  const queryParams = new URLSearchParams(location.search)
  const activePanelFromURL = queryParams.get('panel') || sidebarItems[0].panel


  const handlePanelChange = (panel) => {
    setPanel(panel)
    navigate(`?panel=${panel}`)
  }

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    setPanel(activePanelFromURL)
  }, [activePanelFromURL])


  const handleLogout = () => {
    dispatch(authThunks.logout())
    navigate('/home')
  }

  const DeleteDoctorAccount = async () => {
    const res = await dispatch(deleteDoctor(loggedInUser._id))

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
    <section className='mt-[75px] max-width-[1170px] px-5 mx-auto'>
    {!authLoading && !authError && (
        <div className='grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]'>


        


          {/* Left Sidebar */}
          <div>
            <span className='lg:hidden'>
                <BiMenu className='w-6 h-6 cursor-pointer'/>
            </span>
            <div className='hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md'>
              {sidebarItems.map((item, key) => (
                  <button key={key} onClick={() => handlePanelChange(item.panel)}
                      className={`${panel === item.panel ? " bg-indigo-100 text-primaryColor" : " bg-transparent text-headingColor" } 
                                      w-full btn mt-0 rounded-md`}>
                      {item.label}
                  </button>
              ))}
              <div className='w-full mt-[50px] md:mt-[100px]'>
                  <button 
                      onClick={handleLogout} 
                      className='w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white'>
                      Logout
                  </button>
                  
                  <button onClick={DeleteDoctorAccount} className='w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white'>
                   {doctorLoading ? <LoadingModel/> : "Delete Account"}
                  </button>
              </div>
            </div> 
          </div>


          {/* Right Sidebar */}
          <div className='lg:col-span-2'>
              {loggedInUser?.isApproved === 'pending' && (
                <div className='flex p-4 text-yellow-800 bg-yellow-50 rounded-lg'>

                  <svg aria-hidden="true"
                        className="flex-shrink-0 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 
                        1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd">
                  </path>
                  </svg>

                {/* <span className='sr-only'>Info</span> */}
                <div className='ml-3 text-sm font-medium'>
                  To get approval please complete your profile. We&apos;ll review manually and approve within 3 days.
                </div>
                </div>
              )}



              <div>
                {panel === 'overview' && <DoctorOverview doctorProfileData={loggedInUser} doctorViewMode={true}/>}
                {panel === 'appointments' && <Appointments/>}



                {panel === 'settings' && (
                  <div>
                    <h2 className='text-headingColor font-bold text-[24px] leading-9 mb-10'>
                      Profile Information
                    </h2>
                    <DashboardForm/>
                  </div>
                )}
              </div>

          </div>

        </div>
    )}

    </section>
  )
}

export default DoctorDashboard
