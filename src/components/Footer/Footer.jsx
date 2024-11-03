import React from 'react'
import logoImg from '../../assets/images/logo.png'
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillYoutube, AiFillGithub, AiFillFacebook } from "react-icons/ai";


const iconSize = 20;


const iconsItems = [
  {
    tag: <RiLinkedinFill size={iconSize}/>,
    color: '0077B5'
  },
  {
    tag: <AiFillYoutube size={iconSize} />,
    color: 'FF0033'
  }, 
  {
    tag: <AiFillGithub size={iconSize} />,
    color: '1F2328'
  }, 
  {
    tag: <AiFillFacebook size={iconSize} />,
    color: '0866FF'
  }
]



const Footer = () => {



  return (
    <div className='mb-8'>
      <div className='container'>
        <div className=' flex'>
          <div className='w-1/3'>
            <img src={logoImg} alt='logo-image'/>
            <p>Copyright &copy; 2024 Developed by Mohammad Kardi. All rights reserved.</p>

            <div className='flex gap-2'>


              {iconsItems.map((icon, index) => (
                  <div key={index} 
                        className={`border-[1px] rounded-full p-2 border-headingColor hover:cursor-pointer`}>
                    {icon.tag}
                  </div>
              ))}




            </div>





          </div>
          
          <div className='w-2/3'>
            Links
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
