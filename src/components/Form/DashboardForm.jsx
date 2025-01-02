import React from 'react'
import {useForm, useFieldArray } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import LoadingModel from '../Loading/LoadingModel'
import { nameValidation, phoneValidation, bioValidation, ticketPriceValidation, totalPatientsValidation } from './../../utils/validation';
import { AiOutlineDelete } from "react-icons/ai";
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import FormSelect from './FormSelect';
import { genderOptions, specializationOptions, dayOfWeekOptions } from '../../constants/options';
import { fetchDoctor, updateDoctor } from './../../redux/thunks/doctorThunks';
import { showToastFailure, showToastSuccess } from './../../utils/toastUtils';
import { authThunks } from './../../redux/slices/authSlice';


const DashboardForm = () => {
    const dispatch = useDispatch()
    const { loggedInUser } = useSelector((state) => state.auth)
    const { doctorLoading } = useSelector((state) => state.doctor)
    const {register, control, handleSubmit, formState: {errors}, reset, watch} = useForm({defaultValues: loggedInUser})
    const { fields: qualificationsFields, remove: removeQualification, append:appendQualification } = useFieldArray({
        control,
        name: 'qualifications',
    })
    const { fields: experiencesFields, remove: removeExperience, append:appendExperience } = useFieldArray({
        control,
        name: 'experiences',
    })
    const { fields: timeSlotsFields, remove: removeTimeSlots, append:appendTimeSlots } = useFieldArray({
        control,
        name: 'timeSlots', 
    })

    const handleFormSubmit = async (submitedData) => {
        try {
          const res = await dispatch(updateDoctor(submitedData))
          if (!res.error) {
            dispatch(authThunks.syncLocalStorage())
            showToastSuccess("Your Profile has been updated successfully!", { position: "top-right", autoClose: 3000 })
          } else {
            showToastFailure("System error! Your Profile wasn't updated. Please try again.", { position: "top-right", autoClose: 3000 })
          }
        } catch (error) {
          console.log(error.message)
        }
      }



  return (
    <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit(handleFormSubmit)}>
        <FormInput fieldName="name" labelText="Name" placeholder="Full Name" labelStyle="form__label" 
            inputStyle="form__input" register={register} validationRules={nameValidation} errors={errors}/>

        <FormInput fieldName="bio" labelText="Bio" placeholder="Bio" labelStyle="form__label" 
            inputStyle="form__input" register={register} validationRules={bioValidation} errors={errors}/>

        <FormTextArea fieldName="about" rows={4} labelText="About" placeholder="About" labelStyle="form__label" 
            inputStyle="form__input" register={register} errors={errors} />

        <FormInput fieldName="hospital" labelText="Hospital" placeholder="Hospital" labelStyle="form__label" 
            inputStyle="form__input" register={register}/>

        <FormInput fieldName="phone" labelText="Phone Number" placeholder="Phone Number" labelStyle="form__label" 
            inputStyle="form__input" register={register} validationRules={phoneValidation} errors={errors}/>   

        <FormInput fieldName="totalPatients" labelText="Total Patients" labelStyle="form__label" 
            placeholder="Approximate Number of Patients Treated" inputStyle="form__input"
            register={register} validationRules={totalPatientsValidation} errors={errors}/>   

        <div className='grid grid-cols-1 md:grid-cols-3 pb-3 md:pb-4'>
            {/* Gender selection dropdown */}   
            <FormSelect fieldName="gender" labelText="Gender" options={genderOptions} register={register}
                validationRules={{ required: 'Select a Gender' }} errors={errors} selectStyle="form__select" labelStyle="form__label"/>
            {/* Specialization selection dropdown */}  
            <FormSelect fieldName="specialization" labelText="Specialization" options={specializationOptions} register={register}
                selectStyle="form__select" labelStyle="form__label"/>
            {/* Ticket Price Input Field */} 
            <FormInput fieldName="ticketPrice" labelText="Ticket Price" placeholder="Ticket Price" labelStyle="form__label"
                register={register} validationRules={ticketPriceValidation} errors={errors}
                inputStyle="px-1 py-2 md:px-2 md:py-2 text-sm md:text-base leading-7 font-normal md:font-medium 
                 text-textColor outline outline-1 rounded-sm font-semibold text-[15px] leading-7 focus:outline-none
                focus:border focus:border-primaryColor placeholder:text-textColor"/>
        </div>
        <div className='pb-3 md:pb-4'>
            <div className='flex justify-between'>
                <div className='flex items-center form__label mb-0 text-headingColor'>Qualifications</div>
                <button type="button" className='h-fit px-2 md:px-6 py-1 md:py-2 text-base md:text-lg font-normal md:font-medium
                                 rounded bg-[#000] text-white hover:outline-none hover:ring-2 hover:ring-black 
                                 hover:ring-offset-2 transition-all duration-100 ease-in-out'
                        onClick={() =>appendQualification({degree: "", institution: "", startingDate: "", endingDate: ""})}>
                    Add Qualification
                </button>
            </div>
            <div className='space-y-6 mt-6'>
                {qualificationsFields?.map((item, index) => (
                    <div key={index}>
                        <div>
                            <div  className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                                <FormInput fieldName={`qualifications.${index}.degree`} labelText="Degree"
                                            placeholder="Degree" labelStyle="form__label__branch" 
                                            inputStyle="form__input" register={register} errors={errors}
                                            startValidationError = {true} validationRules={{ required: 'required' }}/>
                                <FormInput fieldName={`qualifications.${index}.institution`} labelText="Institution"
                                            placeholder="Institution" labelStyle="form__label__branch" 
                                            inputStyle="form__input" register={register} startValidationError = {true}
                                            errors={errors}  validationRules={{ required: 'required' }}/>
                                <FormInput fieldName={`qualifications.${index}.startingDate`} type='date' labelText="Starting Date"
                                            placeholder="Starting Date" labelStyle="form__label__branch" 
                                            inputStyle="form__input" register={register} errors={errors}
                                            validationRules={{ required: 'required' }} startValidationError = {true}/>
                                <FormInput fieldName={`qualifications.${index}.endingDate`} type='date' labelText="Ending Date"
                                            placeholder="Ending Date" labelStyle="form__label__branch" 
                                            inputStyle="form__input" register={register} errors={errors}  
                                            validationRules={{required: 'required'}} startValidationError = {true}/>
                            </div>
                            <button type="button" onClick={() => removeQualification(index)}  className='mt-2 bg-red-600 p-2 rounded-full text-white text-[18px]'>
                                <AiOutlineDelete />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className='pb-3 md:pb-4'>
            <div className='flex justify-between'>
                <div className='flex items-center form__label mb-0 text-headingColor'>Experiences</div>
                <button type="button"  className='h-fit px-2 md:px-6 py-1 md:py-2 text-base md:text-lg font-normal md:font-medium
                                 rounded bg-[#000] text-white hover:outline-none hover:ring-2 hover:ring-black 
                                 hover:ring-offset-2 transition-all duration-100 ease-in-out'
                        onClick={() => appendExperience({position: "", company: "", startingDate: "", endingDate: ""})}>
                    Add Experience
                </button>
            </div>
            <div className='space-y-6 mt-6'>
                {experiencesFields?.map((item, index) => (
                    <div key={index}>
                        <div>
                            <div  className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                                <FormInput fieldName={`experiences.${index}.position`} labelText="Position"
                                            placeholder="Position" labelStyle="form__label__branch" 
                                            inputStyle="form__input" register={register} errors={errors}
                                            validationRules={{required: 'required'}} startValidationError = {true}/>                            
                                <FormInput fieldName={`experiences.${index}.company`} labelText="Company"
                                            placeholder="Company" labelStyle="form__label__branch" 
                                            inputStyle="form__input" register={register} errors={errors}
                                            validationRules={{required: 'required'}} startValidationError = {true}/>      
                                 <FormInput fieldName={`experiences.${index}.startingDate`} type="date" labelText="Starting Date"
                                            placeholder="Starting Date" labelStyle="form__label__branch" 
                                            inputStyle="form__input" register={register} errors={errors}
                                            validationRules={{required: 'required'}} startValidationError = {true}/>      
                                 <FormInput fieldName={`experiences.${index}.endingDate`} type="date" labelText="Ending Date"
                                            placeholder="Ending Date" labelStyle="form__label__branch" 
                                            inputStyle="form__input" register={register} errors={errors}
                                            validationRules={{required: 'required'}} startValidationError = {true}/>     
                            </div>
                            <button type="button" onClick={() => removeExperience(index)}  className='mt-2 bg-red-600 p-2 rounded-full text-white text-[18px]'>
                                <AiOutlineDelete />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className=' pb-3 md:pb-4'>
            <div className='flex justify-between'>
                <div className='flex items-center form__label mb-0 text-headingColor'>Time Slots</div>
                <button type="button" className='h-fit px-2 md:px-6 py-1 md:py-2 text-base md:text-lg font-normal md:font-medium
                                            rounded bg-[#000] text-white hover:outline-none hover:ring-2 hover:ring-black 
                                            hover:ring-offset-2 transition-all duration-100 ease-in-out'
                        onClick={() => appendTimeSlots({dayOfWeek: "", startingTime: "", endingTime: ""})}>
                    Add Time Slots
                </button>
            </div>
            <div className='space-y-6 mt-6'>
                {timeSlotsFields?.map((item, index) => (
                    <div key={index} className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                    {/* Gender selection dropdown */}   
                    <FormSelect fieldName={`timeSlots.${index}.dayOfWeek`} labelText="Day of Week" options={dayOfWeekOptions} 
                        register={register} errors={errors} selectStyle="form__input h-full" labelStyle="form__label__branch"
                        containerStyle= "flex flex-col justify-between" validationRules={{required: 'required'}} 
                        startValidationError = {true}/>
                    <FormInput fieldName={`timeSlots.${index}.startingTime`} type="time" labelText="Starting Time"
                            placeholder="Starting Time" labelStyle="form__label__branch" inputStyle="form__input" register={register} 
                            errors={errors} validationRules={{required: 'required'}} startValidationError = {true}/>   
                    <FormInput fieldName={`timeSlots.${index}.endingTime`} type="time" labelText="Ending Time"
                            placeholder="Ending Time" labelStyle="form__label__branch" inputStyle="form__input" register={register} 
                            errors={errors} validationRules={{required: 'required'}} startValidationError = {true}/>   
                    <div className='flex justify-start items-center col-span-1 sm:col-span-2'>
                        <button type="button" onClick={() => removeTimeSlots(index)} className='mt-2 bg-red-600 p-2 rounded-full text-white text-[18px]'>
                            <AiOutlineDelete />
                        </button>
                    </div>
                </div>
                ))}
            </div>
        </div>
        <div className='flex justify-center '>
            <button disabled={doctorLoading}
                className={`${doctorLoading ? "opacity-[0.7]" : ""} w-full custom-button rounded-lg`}>
                {doctorLoading ? <LoadingModel color='#FFFFFF'/> : "Update"}
            </button>
        </div>
    </form>
  )
}

export default DashboardForm
