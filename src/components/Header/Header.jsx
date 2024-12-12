import React, {useEffect, useRef} from 'react'
import logo from '../../assets/images/logo.png'
import {NavLink, Link, useLocation} from 'react-router-dom'
import userImg from '../../assets/images/avatar-icon.png'
import { BiMenu } from "react-icons/bi";
import { useSelector } from 'react-redux';
import { authThunks } from '../../redux/slices/authSlice';
import { useDispatch } from 'react-redux';

const navLinks = [
  {
    label: 'Home',
    path: '/home'
  },
  {
    label: 'Find a Doctor',
    path: '/findDoctor'
  },
  {
    label: 'Services',
    path: '/services'
  },
  {
    label: 'Contact',
    path: '/contact'
  },
]

const Header = () => {
  const location = useLocation()
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const dispatch = useDispatch()

  const {userInfo} = useSelector(state => state.auth)


  

  const pathSegment = location.pathname.split('/')[1]


  const logout = async () => {
    try {
        await dispatch(authThunks.logout())


    } catch (error) {
        console.log(error)
    }
  }



  // The handleStickyHeader function is used to add or remove a "sticky" class (sticky__header) to an HTML element when 
  // the user scrolls past a certain point on the page.
  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    handleStickyHeader()
    return () => window.removeEventListener('scroll', handleStickyHeader)
  })

  const toggleMenu = () => {
    menuRef.current.classList.toggle('show__menu')
  }

  return (
    <header className='header flex items-center' ref={headerRef}>
      <div className='container'>
        <div className='flex items-center justify-between'>

          {/* ========= logo ========= */}
          <div>
            <Link to='/home'>
              <img src={logo} alt='logo-image'/>
            </Link>
          </div>


          {/* ========= menu ========= */}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink 
                          to={link.path}
                          className={navClass => navClass.isActive 
                            ? 'text-primaryColor text-[16px] leading-7 font-[600]' 
                            : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>




          {/* ========= nav right ========= */}
            <div className='flex items-center gap-4'>


              <div>
                <Link to={userInfo?.role ? `/${userInfo?.role}/profile` : "/home"}>
                  <figure className='w-[35px] rounded-full cursor-pointer'>
                    <img src={userInfo?.photo ? userInfo.photo : userImg} className='w-full rounded-full' alt=''/>
                  </figure>
                </Link>
              </div>


              {userInfo?.name ?
                <button onClick={logout}
                  className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>
                  Logout
                </button>
                :
                <Link to= {pathSegment === "login" ? '/register' : '/login' }>
                  <button 
                    className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>
                    {pathSegment === "login" ? "Register" : "Login"}
                  </button>
                </Link>
              }





              <span className='md:hidden' onClick={toggleMenu}>
                <BiMenu className='w-6 h-6 cursor-pointer'/>
              </span>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
