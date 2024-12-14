import React from 'react'


const availableTimeSolts = [
    {
        dayOfWeek : 'Sonday',
        timeRange: '09:00AM - 02:30PM'
    },
    {
        dayOfWeek : 'Tuesday',
        timeRange: '04:00PM - 09:30PM'
    },
    {
        dayOfWeek : 'Friday',
        timeRange: '06:00PM - 09:30PM'
    },
]

const SidePanel = ({doctorInfo, patientViewMode}) => {
  return (
    <div className=' shadow-panelShadow p-3 lg:p-5 rounded-md w-[400px]'>
        <div className='flex items-center justify-between'>
            <p className='text__para mt-0 font-semibold'>Ticket Price</p>
            <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>
                {doctorInfo?.ticketPrice} €
            </span>
        </div>

        <div className='mt-[30px]'>
            <p className='text__para mt-0 font-semibold text-headingColor'>
                Available Time Slots:
            </p>
            <ul className='mt-3'>
                {availableTimeSolts.map((item, index) => (
                    <li key={index} className='flex items-center justify-between mb-2'>
                        <p className='text-[15px] leading-6 text-textColor font-semibold'>
                            {item.dayOfWeek}
                        </p>
                        <p className='text-[15px] leading-6 text-textColor font-semibold'>
                            {item.timeRange}
                        </p>
                    </li>
                ))}
            </ul>
        </div>

        {patientViewMode &&
        <button className='btn px-2 w-full rounded-md'>
            Book Appointment
        </button>
        }
    </div>
  )
}

export default SidePanel
