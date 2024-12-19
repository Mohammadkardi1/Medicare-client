import React from 'react'
import Avatar from '../../assets/images/avatar-icon.png'
import { formateDate } from './../../utils/formateDate';

const appointments = [
  {
    name: "Ali Ahmand",
    gender: "Male",
    isPaid: false,
    price: 100,
    Booked_on: "Sep 3, 2022" 
  }
]

const Appointments = () => {
  return (
    <table className='w-full text-left text-sm text-gray-500'>
      <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
        <tr>
          <th scope='col' className='px-6 py-3'>
            Name
          </th>
          <th scope='col' className='px-6 py-3'>
            Gender
          </th>
          <th scope='col' className='px-6 py-3'>
            Payment
          </th>
          <th scope='col' className='px-6 py-3'>
            Price
          </th>
          <th scope='col' className='px-6 py-3'>
            Booked on
          </th>
        </tr>
      </thead>
      <tbody>
        {appointments?.map((item, index) => (
          <tr key={index}>
            <th scope='row' className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap'>
              <img src={Avatar} className='w-10 h-10 rounded-full'/>
              <div className='pl-3'>
                <div className='text-base font-semibold'>Ali Ahmad</div>
                <div className='text-normal text-gray-500'>mohammadKardi@gmail.com</div>

              </div>
            </th>
            <td className='px-6 py-4'>Male</td>
            <td className='px-6 py-4'>
              {item?.isPaid ? (
                <div className='flex items-center'>
                  <div className='h-2.5 w-2.5 rounded-full bg-green-500 mr-2'></div>
                  Paid
                </div>
                ) : (
                <div className='flex items-center'>
                  <div className='h-2.5 w-2.5 rounded-full bg-red-500 mr-2'></div>
                  Unpaid
                </div>
              )}
            </td>
            <td className='px-6 py-4'>100</td>
            <td className='px-6 py-4'>
              Sep 3, 2022 
              {/* formateDate(item?.createdAt) */}
            </td>

          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Appointments
