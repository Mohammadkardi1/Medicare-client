import React from 'react'
import featureImg from '../../assets/images/feature-img.png'
import { Link } from 'react-router-dom'

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



                {/* ========== Left Feature Section  ========== */}
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

                    <Link to='/'>
                        <button className='btn'>Learn More</button>
                    </Link>
                </div>
                            
                    
                {/* ========== Right Feature Section  ========== */}
                <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
                    <img src={featureImg} alt='feature-image' className='w-3/4'/>
                    <div 
                        className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-5 
                            lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-[6px] lg:gap-3'>
                                <p>Tue, 24</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Feature
