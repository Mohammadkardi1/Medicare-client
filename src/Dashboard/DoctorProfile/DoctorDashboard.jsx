import {useState, useEffect} from 'react'
import LoadingModel from '../../components/Loading/LoadingModel';
import ErrorModel from '../../components/ErrorModel/ErrorModel';
import { useSelector, useDispatch } from 'react-redux';
import { BiMenu } from 'react-icons/bi'
import { useNavigate, useLocation } from 'react-router-dom';
import { authThunks } from '../../redux/slices/authSlice';
import Appointments from './Appointments';
import DoctorOverview from '../../components/DoctorOverview/DoctorOverview';
import DashboardForm from '../../components/Form/DashboardForm';




const sidebarItems = [
  {
      tab: "overview",
      label: "Overview"
  },
  {
      tab: "appointments",
      label: "Appointments"
  },
  {
      tab: "settings",
      label: "Settings"
  },
]


const DoctorDashboard = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  
  const [tab, setTab] = useState('overview')

  const {userInfo, authLoading, authError} = useSelector(state => state.auth)




  const queryParams = new URLSearchParams(location.search)
  const activeTabFromURL = queryParams.get('tab') || sidebarItems[0].tab


  const handleTabChange = (tab) => {
    setTab(tab)
    navigate(`?tab=${tab}`)
  }


  useEffect(() => {
    setTab(activeTabFromURL)
  }, [activeTabFromURL])


  const handleLogout = () => {
    dispatch(authThunks.logout())
    navigate('/home')
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
                  <button key={key} onClick={() => handleTabChange(item.tab)}
                      className={`${tab === item.tab ? " bg-indigo-100 text-primaryColor" : " bg-transparent text-headingColor" } 
                                      w-full btn mt-0 rounded-md`}>
                      {item.label}
                  </button>
              ))}
              <div className='mt-[50px] md:mt-[100px]'>
                  <button 
                      onClick={handleLogout} 
                      className='w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white'>
                      Logout
                  </button>
                  <button className='w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white'>
                      Delete Account
                  </button>
              </div>
            </div> 
          </div>


          {/* Right Sidebar */}
          <div className='lg:col-span-2'>
              {userInfo?.isApproved === 'pending' && (
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
                {tab === 'overview' && <DoctorOverview doctorInfo={userInfo} doctorViewMode={true}/>}
                {tab === 'appointments' && <Appointments/>}



                {tab === 'settings' && (
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
