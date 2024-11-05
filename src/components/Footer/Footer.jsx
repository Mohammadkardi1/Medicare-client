import React from 'react'
import logoImg from '../../assets/images/logo.png'
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillYoutube, AiFillGithub, AiFillFacebook } from "react-icons/ai";
import {Link} from 'react-router-dom'

const iconSize = 18;


const socialProfiles = [
  {
    tag: <RiLinkedinFill size={iconSize}/>,
    color: '0077B5',
    url: ''
  },
  {
    tag: <AiFillYoutube size={iconSize} />,
    color: 'FF0033',
    url: ''
  }, 
  {
    tag: <AiFillGithub size={iconSize} />,
    color: '1F2328',
    url: ''
  }, 
  {
    tag: <AiFillFacebook size={iconSize} />,
    color: '0866FF',
    url: ''
  }
]

const QuickLinks = [
  {
    label: 'Home',
    url: '/home'
  },
  {
    label: 'About us',
    url: ''
  },
  {
    label: 'Services',
    url: '/services'
  },
  {
    label: 'Blog',
    url: ''
  }
]

const IWantToItems = [
  {
    label: 'Find a Doctor',
    url: '/doctors'
  },
  {
    label: 'Request an Apponitment',
    url: ''
  },
  {
    label: 'Find a Location',
    url: ''
  },
  {
    label: 'Get an Opinion',
    url: ''
  }
]

const SupportItems = [
  {
    label: 'Donate',
    url: ''
  },
  {
    label: 'Contact us',
    url: ''
  }
]



const navHeaderClasses = 'text-[20px] leading-[30px] font-[700] text-headingColor mb-3'
const navLinksClasses= 'text-[15px] leading-[30px] font-[500] text-textColor mt-1'



const Footer = () => {



  return (
    <div className='mb-4'>
      <div className='container'>
        <div className=' flex gap-8'>

          {/* ========== Copyright and Social Profiles Section ========== */}
          <div className='w-1/3 space-y-6'>
            <img src={logoImg} alt='logo-image'/>

            <p className='text-[14px] leading-[25px] font-[500] text-textColor'>
              Copyright &copy; 2024 Developed by Mohammad Kardi. All rights reserved.
            </p>

            <div className='flex gap-2'>


              {socialProfiles.map((icon, index) => (
                  <div key={index} 
                        className={`border-[1px] rounded-full p-2 border-headingColor hover:cursor-pointer`}>
                    {icon.tag}
                  </div>
              ))}
            </div>
          </div>
          

          {/* ========== Navigation Links Section ========== */}
          <div className='w-2/3 grid grid-cols-3'>


            <div>
              <h1 className={navHeaderClasses}>Quick Links</h1>
                {QuickLinks.map((item, index) => (
                  <Link key={index} to={item.url}>
                    <p className={navLinksClasses}>{item.label}</p>
                  </Link>
                ))}
            </div>


            <div>
              <h1 className={navHeaderClasses}>I want to</h1>
                {IWantToItems.map((item, index) => (
                  <Link key={index} to={item.url}>
                    <p className={navLinksClasses}>{item.label}</p>
                  </Link>
                ))}
            </div>


            <div>
              <h1 className={navHeaderClasses}>Support</h1>
                {SupportItems.map((item, index) => (
                  <Link key={index} to={item.url}>
                    <p className={navLinksClasses}>{item.label}</p>
                  </Link>
                ))}
            </div>


            
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Footer
