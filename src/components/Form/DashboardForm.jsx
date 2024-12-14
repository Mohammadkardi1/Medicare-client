import React from 'react'
import {useForm} from 'react-hook-form'
import { useSelector } from 'react-redux'
import LoadingModel from '../Loading/LoadingModel'
import { nameValidation, phoneValidation } from './../../utils/validation';

const DashboardForm = () => {

    const { authError, loading } = useSelector((state) => state.auth)


    const {register, handleSubmit, formState: {errors}, reset, watch} = useForm()




    const handleFormSubmit = async (userInfo) => {

        console.log(userInfo)


        try {
        //   const res = await dispatch(loginUser(userInfo))
          if (!res.error) {
            // showToastSuccess("You have logged in successfully!", { position: "top-right", autoClose: 3000 })
            // navigate(redirectPath, {replace :true})
          }
        } catch (error) {
          console.log(error.message)
        }
      }



  return (
    <form className=' space-y-4' onSubmit={handleSubmit(handleFormSubmit)}>

        <div>
            <label className='form__label'>
                Name
            </label>
            <input type="text" placeholder="Full Name"
                    className={`form__input ${errors?.name ? "bg-SemiTransparentBlue rounded-sm" : ""}  `}
                    {...register("name", nameValidation)}
                />
            <p className={`plain-text text-red-600 ${errors.name?.message ? "visible" : "invisible"}`}>
                {errors.name?.message}.
            </p>
        </div>



        <div>
            <label className='form__label'>
                Phone Number
            </label>
            <input type="text" placeholder="Phone Number"
                    className={`form__input ${errors?.phone ? "bg-SemiTransparentBlue rounded-sm" : ""}  `}
                    {...register("phone", phoneValidation)}
                />
            <p className={`plain-text text-red-600 ${errors.phone?.message ? "visible" : "invisible"}`}>
                {errors.phone?.message}.
            </p>
        </div>



        <div>
            <label className='form__label'>
                Bio
            </label>
            <input type="text" placeholder="Bio"
                    className={`form__input ${errors?.bio ? "bg-SemiTransparentBlue rounded-sm" : ""}  `}
                    {...register("phone", phoneValidation)}
                />
            <p className={`plain-text text-red-600 ${errors.bio?.message ? "visible" : "invisible"}`}>
                {errors.bio?.message}.
            </p>
        </div>

        {/* Password input field */}
        {/* <div>
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
        </div> */}

        <div className='flex justify-center'>
            <button type='submit' disabled={loading}
                className={`${loading ? "opacity-[0.7]" : ""} px-14 py-3 bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg`}>
                {loading ? <LoadingModel color='#FFFFFF'/> : "Update"}
            </button>
        </div>


        {/* <div>
            <p className={`plain-text text-red-600 text-center ${authError ? "visible" : "invisible"}`}>
                {authError}.
            </p>
        </div> */}

    </form>
  )
}

export default DashboardForm
