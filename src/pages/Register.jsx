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
import { nameValidation, emailValidation, passwordValidation, validateImageType } from '../utils/validation'
import FormInput from './../components/Form/FormInput';
import FormSelect from './../components/Form/FormSelect';



const roleOptions = [
  { value: 'patient', label: 'patient' },
  { value: 'doctor', label: 'doctor' },
]

const genderOptions = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  { value: 'Other', label: 'Other' },
]

const Register = () => {

  const location = useLocation()
  const [showPassword, setShowPassword] = useState(false)
  const { authError, authLoading } = useSelector((state) => state.auth)
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
    <section className='px-5 mt-4 md:px-0 md:mt-6'>
      <div className='w-full max-w-[1170px] mx-auto p-4 md:p-10 rounded-lg shadow-md '>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* ========= Img Box ========= */}
          <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
            <figure className='rounded-l-lg'>
              <img src={signupImg} alt='' className='w-full rounded-l-lg'/>
            </figure>
          </div>
          {/* ========= Registeration Form ========= */}
          <div className='space-y-4 md:space-y-8 rounded-l-lg'>
            <h1 className='custom-header-md'>
              Create an <span className=' text-primaryColor'>account</span>
            </h1>
            <form className='space-y-4' onSubmit={handleSubmit(handleUserRegistration)}>
              {/* Name input field */}
              <FormInput fieldName="name" placeholder="Full Name" inputStyle="form__input__auth" 
                        register={register} validationRules={nameValidation} errors={errors}/>
              {/* Email input field */}
              <FormInput fieldName="email" placeholder="Email" inputStyle="form__input__auth" 
                        register={register} validationRules={emailValidation} errors={errors}/>
              {/* Password input field */}
              <div>
                  <div className={`flex items-center justify-between w-full overflow-hidden  
                                  ${errors?.password ? "bg-SemiTransparentBlue rounded-sm" : ""}`}>
                      <input type={showPassword ? 'text' : 'password'} placeholder="Password"
                            className={`form__input__auth bg-transparent`}
                            {...register("password", {
                                validate: passwordValidation
                            })}/>
                      <div className='p-2 lg:p-4 text-gray-500 cursor-pointer h-full'
                          onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <IoMdEyeOff size={25}/> : <MdRemoveRedEye size={25}/>}
                      </div>
                  </div>
                  <p className={`text-sm md:text-base text-red-600 ${errors.password?.message ? "visible" : "invisible"}`}>
                      {errors.password?.message}.
                  </p>
              </div>
              <div className='flex flex-col md:flex-row items-start md:items-center md:justify-between'>
                {/* Role selection dropdown */}  
                <FormSelect fieldName="role" labelText="Your Role:" labelStyle="form__label"
                            options={roleOptions} validationRules={{ required: 'Select a role' }}
                            register={register} errors={errors} selectStyle="form__select__auth" />
                {/* Gender selection dropdown */}
                <FormSelect fieldName="gender" labelText="Gender:" labelStyle="form__label" 
                            options={genderOptions} validationRules={{ required: 'Select a gender' }}
                            register={register} errors={errors} selectStyle="form__select__auth" />
              </div>
              {/* Image Input Field */}
              <div>
                <div className='flex items-center gap-3 '>
                  <figure className='w-[60px] h-[60px] md:w-[50px] md:h-[50px] rounded-full border-2 border-solid  border-primaryColor 
                      flex items-center justify-center'>
                    <img src={avatar} className='w-full rounded-full'/>
                  </figure>
                  <div className='relative w-[130px] h-[50px]'>
                    <input type='file'
                      className='absolute top-0 left-0 w-full h-full opacity-0 z-10'
                      {...register("photo", {
                        required: "Select a Photo",
                        validate: validateImageType
                      })}/>
                    <label htmlFor='customFile' 
                            className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] 
                              leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate z-1'>
                      Upload Photo
                    </label>
                  </div>
                </div>
                <p className={`text-sm md:text-base text-red-600 ${errors.photo?.message ? "visible" : "invisible"}`}>
                    {errors.photo?.message}.
                </p>
              </div>
              <div>
                <button type='submit' disabled={authLoading}
                  className={`${authLoading ? "opacity-[0.7]" : ""} w-full custom-button rounded-lg`}>
                  {authLoading ? <LoadingModel color='#FFFFFF'/> : "Register"}
                </button>
              </div>
              <div>
                <p className={`text-sm md:text-base text-red-600 text-center ${authError ? "visible" : "invisible"}`}>
                    {authError}.
                </p>
              </div>
              <div>
                <p className='custom-paragraph text-textColor text-center'>
                  Already have an account?
                  <Link to='/login' className=' text-primaryColor font-semibold ml-1'>
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
