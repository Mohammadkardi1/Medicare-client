import React from 'react'
import {useForm, useFieldArray } from 'react-hook-form'
import { useSelector } from 'react-redux'
import LoadingModel from '../Loading/LoadingModel'
import { nameValidation, phoneValidation, bioValidation, ticketPriceValidation } from './../../utils/validation';
import { AiOutlineDelete } from "react-icons/ai";




const DashboardForm = () => {

    const { userInfo, authError, loading } = useSelector((state) => state.auth)


    console.log(userInfo)



    const {register, control, handleSubmit, formState: {errors}, reset, watch} = useForm(
    {
        defaultValues: userInfo
        }
    )

    const { fields: qualificationsFields, remove: removeQualification, append:appendQualification } = useFieldArray({
        control,
        name: 'qualifications', // Name of the array in your form state
      })


    const { fields: experiencesFields, remove: removeExperience, append:appendExperience } = useFieldArray({
    control,
    name: 'experiences', // Name of the array in your form state
    })




    



    const handleFormSubmit = async (submitedData) => {

        console.log("HandleSubmit", submitedData)


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


        {/* Name Input Field */}
        <div>
            <label className='form__label'>Name</label>
            <input type="text" placeholder="Full Name"
                    className={`form__input ${errors?.name ? "bg-SemiTransparentBlue rounded-sm" : ""}  `}
                    {...register("name", nameValidation)}
                />
            <p className={`plain-text text-red-600 ${errors.name?.message ? "visible" : "invisible"}`}>
                {errors.name?.message}.
            </p>
        </div>



        {/* Phone number input field */}
        <div>
            <label className='form__label'>Phone Number</label>
            <input type="text" placeholder="Phone Number"
                    className={`form__input ${errors?.phone ? "bg-SemiTransparentBlue rounded-sm" : ""}  `}
                    {...register("phone", phoneValidation)}
                />
            <p className={`plain-text text-red-600 ${errors.phone?.message ? "visible" : "invisible"}`}>
                {errors.phone?.message}.
            </p>
        </div>


        {/* Bio input field */}
        <div>
            <label className='form__label'>Bio</label>
            <input type="text" placeholder="Bio"
                    className={`form__input ${errors?.bio ? "bg-SemiTransparentBlue rounded-sm" : ""}  `}
                    {...register("bio", bioValidation)}
                />
            <p className={`plain-text text-red-600 ${errors.bio?.message ? "visible" : "invisible"}`}>
                {errors.bio?.message}.
            </p>
        </div>


        {/* About textarea field */}
        <div>
            <label className='form__label'>About</label>
            <textarea rows={4} type="text" placeholder="About"
                    className={`form__input ${errors?.about ? "bg-SemiTransparentBlue rounded-sm" : ""}  `}
                    {...register("about",)}
                />
            <p className={`plain-text text-red-600 ${errors.about?.message ? "visible" : "invisible"}`}>
                {errors.about?.message}.
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



        <div>
            <label className='form__label'>Qualifications</label>
            {qualificationsFields.map((item, index) => (
                <div key={index} className=' mb-[50px]'>
                    <div  className='grid grid-cols-2 gap-2'>

                        <div>
                            <label className='form__label__branch'>Degree</label>
                            <input type="text" placeholder="Degree"
                                    className={`form__input  `}
                                    {...register(`qualifications.${index}.degree`, )}/>
                        </div>

                        <div>
                            <label className='form__label__branch'>Institution</label>
                            <input type="text" placeholder="Institution"
                                    className={`form__input  `}
                                    {...register(`qualifications.${index}.institution`, )}/>
                        </div>

                        <div>
                            <label className='form__label__branch'>Starting Date</label>
                            <input type="date" placeholder="Starting Date"
                                className={`form__input `}
                                {...register(`qualifications.${index}.startingDate`, )}/>
                        </div>


                        <div>
                            <label className='form__label__branch'>Ending Date</label>
                            <input type="date" placeholder="Ending Date"
                                className={`form__input `}
                                {...register(`qualifications.${index}.endingDate`, )}/>
                        </div>




                    </div>

                    <button onClick={() => removeQualification(index)}  className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] '>
                        <AiOutlineDelete />
                    </button>
                </div>
            ))}
            <button className='bg-[#000] py-2 px-5 rounded text-white h-fit'
                    onClick={() =>appendQualification({degree: "", institution: "", startingDate: "", endingDate: ""})}>
                Add Qualification
            </button>
        </div>




        
        <div>
            <label className='form__label'>Experiences</label>
            {experiencesFields.map((item, index) => (
                <div key={index} className=' mb-[50px]'>
                    <div  className='grid grid-cols-2 gap-2'>

                        <div>
                            <label className='form__label__branch'>Position</label>
                            <input type="text" placeholder="Position"
                                    className={`form__input  `}
                                    {...register(`experiences.${index}.position`, )}/>
                        </div>

                        <div>
                            <label className='form__label__branch'>Company</label>
                            <input type="text" placeholder="company"
                                    className={`form__input  `}
                                    {...register(`experiences.${index}.company`, )}/>
                        </div>

                        <div>
                            <label className='form__label__branch'>Starting Date</label>
                            <input type="date" placeholder="Starting Date"
                                className={`form__input `}
                                {...register(`experiences.${index}.startingDate`, )}/>
                        </div>


                        <div>
                            <label className='form__label__branch'>Ending Date</label>
                            <input type="date" placeholder="Ending Date"
                                className={`form__input `}
                                {...register(`experiences.${index}.endingDate`, )}/>
                        </div>




                    </div>

                    <button onClick={() => removeExperience(index)}  className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] '>
                        <AiOutlineDelete />
                    </button>
                </div>
            ))}
            <button className='bg-[#000] py-2 px-5 rounded text-white h-fit'
                    onClick={() =>appendExperience({position: "", company: "", startingDate: "", endingDate: ""})}>
                Add Experience
            </button>
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
