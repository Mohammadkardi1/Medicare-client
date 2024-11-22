import React from 'react'
import logoImg from '../../assets/images/logo.png'
// import { AiFillLinkedin  } from "react-icons/ri";
import { AiFillYoutube, AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import {Link} from 'react-router-dom'

const iconSize = 18


const socialProfiles = [
  {
    icon: <AiFillLinkedin  className='group-hover:text-white' size={iconSize}/>,
    path: ''
  },
  {
    icon: <AiFillYoutube className='group-hover:text-white' size={iconSize} />,
    path: ''
  }, 
  {
    icon: <AiFillGithub className='group-hover:text-white' size={iconSize} />,
    path: ''
  }, 
  {
    icon: <AiFillFacebook className='group-hover:text-white' size={iconSize} />,
    path: ''
  }
]

const QuickLinks = [
  {
    label: 'Home',
    path: '/home'
  },
  {
    label: 'About us',
    path: ''
  },
  {
    label: 'Services',
    path: '/services'
  },
  {
    label: 'Blog',
    path: ''
  }
]

const IWantToItems = [
  {
    label: 'Find a Doctor',
    path: '/FindDoctor'
  },
  {
    label: 'Request an Apponitment',
    path: ''
  },
  {
    label: 'Find a Location',
    path: ''
  },
  {
    label: 'Get an Opinion',
    path: ''
  }
]

const SupportItems = [
  {
    label: 'Donate',
    path: ''
  },
  {
    label: 'Contact us',
    path: ''
  }
]

const navHeaderClasses = 'text-[20px] leading-[30px] font-[700] text-headingColor mb-3'
const navLinksClasses= 'text-[15px] leading-[30px] font-[500] text-textColor mt-1'


const Footer = () => {

  const year = new Date().getFullYear()


  return (
    <footer className='mb-4 mt-auto'>
      <div className='container'>
        <div className=' grid grid-cols-5 gap-8'>

          {/* ========== Copyright and Social Profiles ========== */}
          <div className='col-span-2 space-y-6'>
            <img src={logoImg} alt='logo-image'/>

            <p className='text-[14px] leading-[25px] font-[500] text-textColor'>
              Copyright &copy; {year} Developed by Mohammad Kardi. All rights reserved.
            </p>

            <div className='flex gap-2'>


              {socialProfiles.map((item, index) => (
                  <Link key={index} 
                        className={`border-[1px] rounded-full p-2 border-headingColor group hover:bg-primaryColor hover:border-none`}>
                    {item.icon}
                  </Link>
              ))}
            </div>
          </div>
          

          {/* ========== QuickLinks List ========== */}
          <div>
            <h1 className={navHeaderClasses}>Quick Links</h1>
            <ul>
              {QuickLinks.map((item, index) => (
                <li key={index} className={navLinksClasses}>
                  <Link to={item.path} >{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========== IWantTo List ========== */}
          <div>
            <h1 className={navHeaderClasses}>I want to</h1>
            <ul>
              {IWantToItems.map((item, index) => (
                <li key={index} className={navLinksClasses}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========== Support List ========== */}
          <div>
            <h1 className={navHeaderClasses}>Support</h1>
            <ul>
              {SupportItems.map((item, index) => (
                <li key={index} className={navLinksClasses}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>


          
        </div>
      </div>
    </footer>
  )
}

export default Footer
