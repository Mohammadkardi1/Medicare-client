import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import {Link} from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";


const achievementsList = [
  {
    count: '30+' ,
    label: 'Years of Experience',
    borderColor: 'bg-yellowColor'
  },
  {
    count: '15+' ,
    label: 'Clinic Location',
    borderColor: 'bg-purpleColor'
  },
  ,
  {
    count: '100%' ,
    label: 'Patient Satisfaction',
    borderColor: 'bg-irisBlueColor'
  }
]


const servicesList = [
  {
    icon: icon01,
    title: 'Find a Doctor',
    description: 'Sit velit aliquip duis mollit deserunt est voluptate eu qui adipisicing dolor elit irure. Minim cillum ex nostrud magna aute culpa pariatur adipisicing in ipsum minim.'
  },
  {
    icon: icon02,
    title: 'Find a Location',
    description: 'Sit velit aliquip duis mollit deserunt est voluptate eu qui adipisicing dolor elit irure. Minim cillum ex nostrud magna aute culpa pariatur adipisicing in ipsum minim.'
  },
  {
    icon: icon03,
    title: 'Book Appointment',
    description: 'Sit velit aliquip duis mollit deserunt est voluptate eu qui adipisicing dolor elit irure. Minim cillum ex nostrud magna aute culpa pariatur adipisicing in ipsum minim.'
  }
]


const Home = () => {
  return (
    <>
      {/* ========== Start Hero Section  ========== */}
      <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            {/* ========== Left Hero content  ========== */}
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='heading'>We help patients live a healthy, longer life.</h1>
                <p className='text__para'>
                  Eiusmod in ea culpa consectetur. Ut excepteur duis exercitation fugiat. Ad ut velit laborum aliquip eu officia magna. 
                  Laboris cupidatat quis proident sit duis eu fugiat incididunt deserunt reprehenderit esse magna commodo.  
                  Magna culpa laborum magna esse mollit nisi et officia fugiat mollit quis nisi sint.
                </p>
                <button className='btn'>Request an Appointment</button>
              </div>

              {/* ========== hero counter ========== */}
              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                {achievementsList.map((item,index) => (
                  <div key={index}>
                    <h1 className='heading'>{item.count}</h1>
                    <span className={`w-[100px] h-2 ${item.borderColor} rounded-full block mt-[-14px]`}></span>
                    <p className='text__para'>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ========== Right Hero content  ========== */}
            <div className='flex gap-[30px] justify-end'>
              <div>
                <img src={heroImg01} alt='' className='w-full'/>
              </div>
              <div className='mt-[30px]'>
                <img src={heroImg02} alt='' className='w-full mb-[30px]'/>
                <img src={heroImg03} alt='' className='w-full'/>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== End Hero Section  ========== */}


      {/* ========== Start HowItWorks Section  ========== */}
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
                  <Link to='/doctors' 
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
      {/* ========== End HowItWorks Section  ========== */}



    </>
  )
}

export default Home
