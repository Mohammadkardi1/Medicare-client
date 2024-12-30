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
      path: '#'
    },
    {
      icon: icon02,
      title: 'Find a Location',
      description: 'Sit velit aliquip duis mollit deserunt est voluptate eu qui adipisicing dolor elit irure. Minim cillum ex nostrud magna aute culpa pariatur adipisicing in ipsum minim.',
      path: '#'
    },
    {
      icon: icon03,
      title: 'Book Appointment',
      description: 'Sit velit aliquip duis mollit deserunt est voluptate eu qui adipisicing dolor elit irure. Minim cillum ex nostrud magna aute culpa pariatur adipisicing in ipsum minim.',
      path: '#'
    }
  ]

const HowItWorks = () => {
  return (
    <section className='howitworks__section'>
        <div className='container'>
            <div className='max-w-[400px] lg:max-w-[600px] mx-auto'>
                <h1 className='custom-header text-center'>Providing the best medical services</h1>
                <p className='custom-paragraph text-textColor mt-[18px] text-center'>World-class care for everyone. Our health System offers unmatched, expert health care.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
                {servicesList.map((item, index) => (
                    <div key={index} className='py-[20px] lg:py-[30px] px-5'>
                        <div className='flex items-center justify-center'>
                            <img src={item.icon} className='' alt=''/>
                        </div>
                        <div className='mt-[20px] lg:mt-[30px]'>
                            <h1 className='custom-cart-header text-center'>{item.title}</h1>
                            <p className='custom-paragraph text-textColor mt-1 lg:mt-3 text-center'>{item.description}</p>
                            <Link to={item.path}
                                className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[15px] lg:mt-[30px] mx-auto flex
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
