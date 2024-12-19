import React from 'react'
import featureImg from '../../assets/images/feature-img.png'
import { Link } from 'react-router-dom'
import videoIcon from '../../assets/images/video-icon.png'
import avatarIcon from '../../assets/images/avatar-icon.png'


const appointment_options = [
    "Schedule the appointment directly.",
    "Search for your physician here and contact their office.",
    "View your physician who are accepting new patients, use the online scheduling tool to select an appointment time.",
  ]

const Feature = () => {
  return (
    <section>
        <div className='container'>
            <div className='flex items-center justify-between flex-col lg:flex-row'>

                {/* ========== Left Feature Section ========== */}
                <div className='xl:w-[670px]'>
                    <h1 className='heading'>
                        Get virtual treatment <br/> anytime.
                    </h1>

                    <ol className="list-decimal list-inside space-y-2">
                        {appointment_options.map((item, index) => (
                            <li key={index} className='text__para'>
                                {item}
                            </li>
                        ))}
                    </ol>

                    <Link to='#'>
                        <button className='btn'>Learn More</button>
                    </Link>
                </div>
                            
                    
                {/* ========== Right Feature Section ========== */}
                <div className='relative z-0 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>

                    <img src={featureImg} alt='feature-image' className='w-3/4'/>

                    <div className='absolute w-[150px] lg:w-[248px] bg-white bottom-[50px] left-0 md:bottom-[100px] md:left-5 
                                    z-0 p-2 pb-5 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-[6px] lg:gap-3'>
                                <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
                                    Tue, 24
                                </p>
                                <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[500]'>
                                    10:00AM
                                </p>
                            </div>
                            <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor 
                                            rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                                <img src={videoIcon} alt='video-icon'/>
                            </span>
                        </div>
                        
                        <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px]
                                        lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full'>
                            Consultation
                        </div>

                        <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
                            <img src={avatarIcon} alt='avator-icon'/>
                            <h1 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor'>
                                James Ellison
                            </h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Feature
