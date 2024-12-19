import React from 'react'
import failureImg from '../../assets/images/failure.png'



const ErrorModel = ({errorMsg, styles}) => {
  return ( 
    <div className={`${styles} flex flex-col gap-2 justify-center items-center `}>
        <div className='text-center'>
            {/* <h1 className="font-bold text-[1.3rem] lg:text-[1.5rem]">{errorMsg}</h1> */}
            <p className="font-light text-[0.9rem] lg:text-[1.1rem] text-neutral-800 mt-2">{errorMsg}</p>
        </div>
    </div>
  )
}

export default ErrorModel
