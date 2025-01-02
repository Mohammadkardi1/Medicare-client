import React from 'react'
import failureImg from '../../assets/images/failure.png'



const ErrorModel = ({errorMsg, styles}) => {
  return ( 
    <div className={`${styles} flex flex-col gap-2 justify-center items-center `}>
        <div className='text-center'>
            <p className="font-light text-[1rem] md:text-[1.2rem] text-neutral-800 mt-2">{errorMsg}</p>
        </div>
    </div>
  )
}

export default ErrorModel
