import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';




const SidePanel = ({doctorProfileData, doctorViewMode= false}) => {


    const { doctorID } = useParams()
    const { loggedInUser } = useSelector(state => state.auth)


  return (
    <div className=' shadow-panelShadow p-3 lg:p-5 rounded-md w-[400px]'>

        {doctorProfileData?.ticketPrice && 
        <div className='flex items-center justify-between'>
            <p className='text__para mt-0 font-semibold'>Ticket Price</p>
            <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>
                {doctorProfileData?.ticketPrice} €
            </span>
        </div>
        }

        {doctorProfileData?.timeSlots?.length !== 0 && 
        <div className='mt-[30px]'>
            <p className='text__para mt-0 font-semibold text-headingColor'>
                Available Time Slots:
            </p>
            <ul className='mt-3'>
                {doctorProfileData?.timeSlots?.map((item, index) => (
                    <li key={index} className='flex items-center justify-between mb-2'>
                        <p className='text-[15px] leading-6 text-textColor font-semibold'>
                            {item.dayOfWeek}
                        </p>
                        <p className='text-[15px] leading-6 text-textColor font-semibold'>
                            {item.startingTime} - {item.endingTime}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
        }
        {!doctorViewMode && doctorID !== loggedInUser?._id &&
            <button className='btn px-2 w-full rounded-md'>
                Book Appointment
            </button>
        }
    </div>
  )
}

export default SidePanel
