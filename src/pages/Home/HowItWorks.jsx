import React from 'react'
import {Link} from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";
import icon01 from '../../assets/images/icon01.png'
import icon02 from '../../assets/images/icon02.png'
import icon03 from '../../assets/images/icon03.png'

const servicesList = [
    {
      icon: icon01,
      title: 'Find a Doctor',
      description: 'Sit velit aliquip duis mollit deserunt est voluptate eu qui adipisicing dolor elit irure. Minim cillum ex nostrud magna aute culpa pariatur adipisicing in ipsum minim.',
      path: '/doctors'
    },
    {
      icon: icon02,
      title: 'Find a Location',
      description: 'Sit velit aliquip duis mollit deserunt est voluptate eu qui adipisicing dolor elit irure. Minim cillum ex nostrud magna aute culpa pariatur adipisicing in ipsum minim.',
      path: '/doctors'
    },
    {
      icon: icon03,
      title: 'Book Appointment',
      description: 'Sit velit aliquip duis mollit deserunt est voluptate eu qui adipisicing dolor elit irure. Minim cillum ex nostrud magna aute culpa pariatur adipisicing in ipsum minim.',
      path: '/doctors'
    }
  ]

const HowItWorks = () => {
  return (
    <section className='howitworks__section'>
        <div className='container'>

            <div className='lg:w-[470px] mx-auto'>
                <h1 className='heading text-center'>Providing the best medical services</h1>
                <p className='text__para text-center'>World-class care for everyone. Our health System offers unmatched, expert health care.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
                {servicesList.map((item, index) => (
                    <div key={index} className='py-[30px] px-5'>
                        <div className='flex items-center justify-center'>
                            <img src={item.icon} className='' alt=''/>
                        </div>


                        <div className='mt-[30px]'>
                            <h1 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>{item.title}</h1>
                            <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>{item.description}</p>
                            <Link to={item.path}
                                className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex
                                items-center justify-center group hover:bg-primaryColor hover:border-none' >
                                <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     </section>
  )
}

export default HowItWorks
