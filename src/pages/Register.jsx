import React, {useState, useEffect} from 'react'
import signupImg from '../assets/images/signup.gif'
import avatar from '../assets/images/doctor-img01.png'
import {Link, useLocation} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { MdRemoveRedEye } from "react-icons/md"
import uploadImageToCloudinary from './../utils/uplaodCloudinary'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../redux/thunks/authThunks'
import { IoMdEyeOff } from "react-icons/io"
import { authThunks } from './../redux/slices/authSlice';
import LoadingModel from '../components/Loading/LoadingModel'



// alexia.ar19990@gmail.com

const nameValidation =  {
  required: "Enter your name",
  minLength: {
      value: 4,
      message: "Your name must be at least 4 characters long"
  },
    pattern: {
        value: /^[a-zA-Z0-9\s]+$/,
        message: "Your name must be alphanumeric"
    }
}


const emailValidation = {
  required:"Enter your email",
  pattern: {
      value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
      message: "Enter a Valid Email"
  }
}


const passwordValidation = (value) => {
  if (!value) {
    return "Enter your password"
  }
  if (value.length < 8) {
    return "Password must be at least 8 characters long"
  }
  if (!/[A-Z]/.test(value)) {
    return "Password must contain at least one uppercase letter"
  }
  if (!/[a-z]/.test(value)) {
    return "Password must contain at least one lowercase letter"
  }
  if (!/\d/.test(value)) {
    return "Password must contain at least one number"
  }
  if (!/[$-/:-?{-~@#!"^_`\[\]]/.test(value)) {
    return "Password must contain at least one symbol"
  }
  return null
}

const validateImageType = (value) => {
    
  if (!value[0]) {
      return true
  }

  const file = value[0]

  const types = ['image/jpg', 'image/png', "image/jpeg"]

  if ( !types.includes(file.type)  ) {
    return 'Please select a valid photo JPG, PNG or JPEG';
  }

  return true
}



const Register = () => {

  const location = useLocation()
  
  const [showPassword, setShowPassword] = useState(false)
  const { authError, loading } = useSelector((state) => state.auth)

  const redirectPath = location.state?.path || '/home'


  const dispatch = useDispatch()

  const {register, handleSubmit, formState: {errors}, reset, watch} = useForm({
    defaultValues: {
      role: "", // Default to empty
      gender: ""
    },
  })


  useEffect(() => {
    dispatch(authThunks.clearAuthError())
  }, [])





  const handleUserRegistration = async (userInfo) => {

    dispatch(authThunks.setLoading(true))
  
    const photo = await uploadImageToCloudinary(userInfo?.photo[0])

    userInfo = {...userInfo , photo: photo.secure_url}

    try {
      const res = await dispatch(registerUser(userInfo))



    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <section className='px-5 xl:px-0 mt-6'>
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>


          {/* ========= Img Box ========= */}
          <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
            <figure className='rounded-l-lg'>
              <img src={signupImg} alt='' className='w-full rounded-l-lg'/>
            </figure>
          </div>

          {/* ========= Registeration Form ========= */}
          <div className='rounded-l-lg lg:pl-16 py-10'>


            <h1 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
              Create an <span className=' text-primaryColor'>account</span>
            </h1>

            <form className='space-y-4' onSubmit={handleSubmit(handleUserRegistration)}>

              {/* Name input field */}
              <div>
                <input type="text" placeholder="Full Name"
                      className={`form__input__auth ${errors?.name ? "bg-SemiTransparentBlue rounded-sm" : ""}  `}
                      {...register("name", nameValidation)}
                    />
                <p className={`plain-text text-red-600 ${errors.name?.message ? "visible" : "invisible"}`}>
                    {errors.name?.message}.
                </p>
              </div>


              {/* Email input field */}
              <div>
                  <input type="text" placeholder="Email"
                        className={`form__input__auth ${errors?.email ? "bg-SemiTransparentBlue rounded-sm" : ""}`}
                        {...register("email", emailValidation)}
                    />
                  <p className={`plain-text text-red-600 ${errors.email?.message ? "visible" : "invisible"}`}>
                      {errors.email?.message}.
                  </p>
              </div>


              {/* Password input field */}
              <div>
                  <div className={`flex items-center justify-between w-full overflow-hidden  
                                  ${errors?.password ? "bg-SemiTransparentBlue rounded-sm" : ""}`}>
                      <input type={showPassword ? 'text' : 'password'} placeholder="Password"
                            className={`form__input__auth bg-transparent`}
                            {...register("password", {
                                validate: passwordValidation
                            })}
                        />
                      <div className='p-2 lg:p-4 text-gray-500 cursor-pointer h-full'
                          onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <IoMdEyeOff size={25}/> : <MdRemoveRedEye size={25}/>}
                      </div>
                  </div>
                  <p className={`plain-text text-red-600 ${errors.password?.message ? "visible" : "invisible"}`}>
                      {errors.password?.message}.
                  </p>
              </div>



              <div className='flex items-center justify-between'>
                
                {/* Role selection dropdown */}
                <div>
                  <label htmlFor='role' className='text-headingColor font-bold text-[16px] leading-7'>
                    Your Role:
                    <select
                        className="form__select__auth"
                        {...register("role", { 
                          required: "Select a role" 
                          })}
                        >
                      <option value="" disabled>Choose an option</option>
                      <option value='patient'>Patient</option>
                      <option value='doctor'>Doctor</option>
                    </select>
                  </label>
                  <p className={`plain-text text-red-600 ${errors.role?.message ? "visible" : "invisible"}`}>
                      {errors.role?.message}.
                  </p>
                </div>



                {/* Gender selection dropdown */}
                <div>
                  <label htmlFor='gender' className='text-headingColor font-bold text-[16px] leading-7'>
                    Gender:
                    <select
                        className="form__select__auth"
                        {...register("gender", { 
                          required: "Select a gender" 
                          })}
                        >
                      <option value="" disabled>Choose an option</option>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                      <option value='other'>Other</option>
                    </select>
                  </label>
                  <p className={`plain-text text-red-600 ${errors.gender?.message ? "visible" : "invisible"}`}>
                      {errors.gender?.message}.
                  </p>
                </div>

              </div>






              {/* Image Input Field */}
              <div>
                <div className='flex items-center gap-3 '>
                  <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid  border-primaryColor flex items-center
                            justify-center'>
                    <img src={avatar} alt='' className='w-full rounded-full'/>
                  </figure>

                  <div className='relative w-[130px] h-[50px]'>
                    <input 
                      type='file'
                      className='absolute top-0 left-0 w-full h-full opacity-0 z-10'
                      {...register("photo", {
                        required: "Select a Photo",
                        validate: validateImageType
                      })}
                      />
                    <label htmlFor='customFile' 
                            className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] 
                              leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate z-1'>
                      Upload Photo
                    </label>

                  </div>
                </div>
                <p className={`plain-text text-red-600 ${errors.photo?.message ? "visible" : "invisible"}`}>
                    {errors.photo?.message}.
                </p>
              </div>



              <div>
                <button type='submit' disabled={loading}
                  className={`${loading ? "opacity-[0.7]" : ""} w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3`}>
                  
                  {
                    loading ? <LoadingModel color='#FFFFFF'/> : "Register"
                  }


                </button>
              </div>

              <div>
                <p className={`plain-text text-red-600 text-center ${authError ? "visible" : "invisible"}`}>
                    {authError}.
                </p>
              </div>



              <div>
                <p className='mt-5 text-textColor text-center'>
                  Already have an account?
                  <Link to='/login' className=' text-primaryColor font-medium ml-1'>
                    Login
                  </Link>
                </p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register
