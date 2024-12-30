import React from 'react'
import heroImg01 from '../../assets/images/hero-img01.png'
import heroImg02 from '../../assets/images/hero-img02.png'
import heroImg03 from '../../assets/images/hero-img03.png'

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

const Hero = () => {
  return (
    <section className='hero__section pt-[35px] lg:pt-[75px] 2xl:h-[800px]'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
          {/* ========== Left Hero Section ========== */}
          <div>
            <div className='lg:w-[570px]'>
              <h1 className='custom-header'>We help patients live a healthy, longer life.</h1>
              <p className='custom-paragraph text-textColor mt-[18px]'>
                Eiusmod in ea culpa consectetur. Ut excepteur duis exercitation fugiat. Ad ut velit laborum aliquip eu officia magna. 
                Laboris cupidatat quis proident sit duis eu fugiat incididunt deserunt reprehenderit esse magna commodo.  
                Magna culpa laborum magna esse mollit nisi et officia fugiat mollit quis nisi sint.
              </p>
              <button className='custom-button mt-[20px] lg:mt-[38px]'>Request an Appointment</button>
            </div>

            <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
              {achievementsList.map((item,index) => (
                <div key={index}>
                  <h1 className='custom-header'>{item.count}</h1>
                  <span className={`w-[100px] h-2 ${item.borderColor} rounded-full block mt-[-14px]`}></span>
                  <p className='custom-paragraph text-textColor mt-[8px]'>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          {/* ========== Right Hero Section ========== */}
          <div className='flex gap-[30px] justify-end'>
            <div>
              <img src={heroImg01} className='w-full'/>
            </div>
            <div className='mt-[30px]'>
              <img src={heroImg02} className='w-full mb-[30px]'/>
              <img src={heroImg03} className='w-full'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
