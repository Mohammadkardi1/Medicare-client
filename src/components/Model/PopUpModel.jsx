import React from 'react'
import { MdOutlineClose } from "react-icons/md";


export const PopUpModel = ({isModelOpen, setIsModelOpen, message}) => {
  return (
    <>
    {isModelOpen && 
      <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-20'>
        <div className='w-[250px] sm:w-[350px] lg:w-[500px] bg-white rounded-lg p-4 space-y-2 md:space-y-4'>
          <div className='flex justify-end'>
            <MdOutlineClose onClick={() => setIsModelOpen(!isModelOpen)} size={28}
                className='cursor-pointer text-black p-1'/>
          </div>
          <div className='custom-paragraph text-textColor'>
            {message}
          </div>
          <div className='flex justify-end'>
            <button className='px-4 md:px-6 py-1 md:py-2 text-white bg-red-600 rounded-sm text-base md:text-lg font-normal
                md:font-medium hover:outline-none hover:ring-2 hover:ring-red-400 hover:ring-offset-2 transition-all duration-100
                ease-in-out'
              onClick={() => setIsModelOpen(!isModelOpen)}>
              Close
            </button>
          </div>
        </div>
      </div>
      }
    </>
  )
}