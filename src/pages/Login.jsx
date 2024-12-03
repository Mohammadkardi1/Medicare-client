import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { loginUser } from '../redux/thunks/authThunks'
import { useDispatch, useSelector } from 'react-redux'
import { MdRemoveRedEye } from "react-icons/md"
import { IoMdEyeOff } from "react-icons/io"

const Login = () => {

  const dispatch = useDispatch()

  const { authError } = useSelector((state) => state.auth)
  const [showPassword, setShowPassword] = useState(false)

  const {register, handleSubmit, formState: {errors}, reset, watch} = useForm()
  

  const handleUserLogin = async (userInfo) => {

    try {
      const res = await dispatch(loginUser(userInfo))

    } catch (error) {
      console.log(error.message)
    }
  }


  return (
    <section className='px-5 mt-6 lg:px-0'>
      <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
          Hallo! <span className='text-primaryColor'>Welcome</span> Back
        </h3>


        <form className=' space-y-4' onSubmit={handleSubmit(handleUserLogin)}>

          {/* Name input field */}
          <div>
            <input type="text" placeholder="Email"
              className="form__input__auth"
              {...register("email", {
                required: "Enter your email"
              })}
            />
            <p className={`plain-text text-red-600 ${errors.email?.message ? "visible" : "invisible"}`}>
              {errors.email?.message}.
            </p>
          </div>

          {/* Password input field */}
          <div>
            <div className={`flex items-center justify-between w-full overflow-hidden `}>
                <input type={showPassword ? 'text' : 'password'} placeholder="Password"
                      className={`form__input__auth bg-transparent`}
                      {...register("password", {
                          required: "Enter your password",
                      })}
                  />
                <div className='p-2 lg:p-4 text-gray-500 cursor-pointer h-full'
                    onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <IoMdEyeOff size={25}/> : <MdRemoveRedEye size={25} />} 
                </div>
            </div>
            <p className={`plain-text text-red-600 ${errors.password?.message ? "visible" : "invisible"}`}>
                {errors.password?.message}.
            </p>
          </div>


          <div>
            <button type='submit' 
              className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>
              Login
            </button>
          </div>


          <div>
            <p className={`plain-text text-red-600 text-center ${authError ? "visible" : "invisible"}`}>
                {authError}.
            </p>
          </div>



          <div>
            <p className=' text-textColor text-center'>
              Don&apos;t have an account?
              <Link to='/register' className=' text-primaryColor font-semibold ml-1'>
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login
