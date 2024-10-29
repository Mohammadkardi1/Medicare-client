import React from 'react'



const achievementsList = [
  {
    count: '30+' ,
    label: 'Years of Experience',
    borderColor: 'yellowColor'
  },
  {
    count: '15+' ,
    label: 'Clinic Location',
    borderColor: 'purpleColor'
  },
  ,
  {
    count: '100%' ,
    label: 'Patient Satisfaction',
    borderColor: 'irisBlueColor'
  }
]

const Home = () => {
  return (
    <div className='flex items-center mt-6'>
      <div className='container'>


        <div className='flex'>

          <div className='flex-1'>
            <h1 className='heading'>
              We help patients live a healthy, longer life.
            </h1>
            <p className='text__para'>
              Eiusmod in ea culpa consectetur. Ut excepteur duis exercitation fugiat. Ad ut velit laborum aliquip eu officia magna. 
              Laboris cupidatat quis proident sit duis eu fugiat incididunt deserunt reprehenderit esse magna commodo.  
              Magna culpa laborum magna esse mollit nisi et officia fugiat mollit quis nisi sint.
            </p>

            <button className='btn'>
              Request an Appointment
            </button>

            <div className='flex items-center justify-between mt-[3rem]'>
              {
                achievementsList.map((item,index) => (
                  <div key={index}>
                    <p 
                      className={`heading border-b-8 border-b-${item.borderColor}`}>
                      {item.count}
                    </p>
                    <p className='text__para'>{item.label}</p>
                  </div>
                ))
              }
              {/* <p className=' border-b-8 border-b-yellowColor'>
                30+
              </p> */}



              
            </div>

          </div>










          <div className='flex-1'>
            hero image
          </div>



        </div>
      </div>
    </div>
  )
}

export default Home
