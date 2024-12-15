import React from 'react'
import {useForm} from 'react-hook-form'
import { useSelector } from 'react-redux'
import LoadingModel from '../Loading/LoadingModel'
import { nameValidation, phoneValidation, ticketPriceValidation } from './../../utils/validation';

const DashboardForm = () => {

    const { userInfo, authError, loading } = useSelector((state) => state.auth)


    const {register, handleSubmit, formState: {errors}, reset, watch} = useForm(
    {
        defaultValues: userInfo
        }
    )




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
                    {...register("bio", phoneValidation)}
                />
            <p className={`plain-text text-red-600 ${errors.bio?.message ? "visible" : "invisible"}`}>
                {errors.bio?.message}.
            </p>
        </div>




        <div className=' grid grid-cols-3'>


        
            {/* Gender selection dropdown */}   
            <div>
                <label htmlFor='gender' className='form__label'>
                    Gender
                </label>
                <select
                    className="form__select"
                    {...register("gender", { 
                        required: "Select a Gender" 
                        })}
                    >
                    <option value="" disabled>Choose an option</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                </select>
                <p className={`plain-text text-red-600 ${errors.gender?.message ? "visible" : "invisible"}`}>
                    {errors.gender?.message}.
                </p>
            </div>




            {/* Specialization selection dropdown */}   
            <div>
                <label htmlFor='specialization' className='form__label'>
                    Specialization
                </label>
                <select
                    className="form__select"
                    {...register("specialization", { 
                        required: "Select a Specialization" 
                        })}
                    >
                    <option value="" disabled>Choose an option</option>
                    <option value='FamilyMedicine'>Family medicine</option>
                    <option value='Nephrologists'>Nephrologists</option>
                    <option value='Hematologists'>Hematologists</option>
                    <option value='Infectious'>Infectious</option>
                    <option value='Surgeon'>Surgeon</option>
                </select>
                <p className={`plain-text text-red-600 ${errors.specialization?.message ? "visible" : "invisible"}`}>
                    {errors.specialization?.message}.
                </p>
            </div>



            {/* Ticket Price selection dropdown */}   
            <div>
                <label htmlFor='ticketPrice' className='form__label'>
                    Ticket Price
                </label>
                <input
                    className="py-1 px-4 text-textColor outline outline-1 rounded-sm font-semibold text-[15px] leading-7 focus:outline-none focus:border focus:border-primaryColor"
                    {...register("ticketPrice", ticketPriceValidation)}
                    />
                <p className={`plain-text text-red-600 ${errors.ticketPrice?.message ? "visible" : "invisible"}`}>
                    {errors.ticketPrice?.message}.
                </p>
            </div>








        </div>








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
