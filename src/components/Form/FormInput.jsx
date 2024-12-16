import React from 'react';

const FormInput = ({fieldName, labelText= "", type = "text", placeholder, labelStyle, inputStyle, register, 
                    validationRules={}, errors ={}, startValidationError= false}) => {


  return (
    <div>
        {labelText && <label className={labelStyle}>
            {labelText}

            {startValidationError && errors?.[fieldName.split('.')[0]] && 
                <span className='font-bold text-[16px] text-red-600'>*</span>
            }
        </label>}
        <input type={type} placeholder={placeholder}
                className={`${inputStyle} ${errors?.[fieldName] ? "bg-SemiTransparentBlue rounded-sm" : ""}`}
                {...register(fieldName, validationRules)}/>
        
        {!startValidationError && 
            <p className={`plain-text text-red-600 ${errors?.[fieldName] ? "visible" : "invisible"}`}>
                {errors?.[fieldName]?.message}
            </p>
        }
    </div>
  );
};

export default FormInput;


        {/* Name Input Field */}
        {/* <div>
            <label className='form__label'>Name</label>
            <input type="text" placeholder="Full Name"
                    className={`form__input ${errors?.name ? "bg-SemiTransparentBlue rounded-sm" : ""}  `}
                    {...register("name", nameValidation)}
                />
            <p className={`plain-text text-red-600 ${errors?.name ? "visible" : "invisible"}`}>
                {errors?.name?.message}.
            </p>
        </div> */}



        {/* Phone number input field */}
        {/* <div>
            <label className='form__label'>Phone Number</label>
            <input type="text" placeholder="Phone Number"
                    className={`form__input ${errors?.phone ? "bg-SemiTransparentBlue rounded-sm" : ""}  `}
                    {...register("phone", phoneValidation)}
                />
            <p className={`plain-text text-red-600 ${errors.phone?.message ? "visible" : "invisible"}`}>
                {errors.phone?.message}.
            </p>
        </div> */}


        {/* Bio input field */}
        // <div>
        //     <label className='form__label'>Bio</label>
        //     <input type="text" placeholder="Bio"
        //             className={`form__input ${errors?.bio ? "bg-SemiTransparentBlue rounded-sm" : ""}  `}
        //             {...register("bio", bioValidation)}
        //         />
        //     <p className={`plain-text text-red-600 ${errors.bio?.message ? "visible" : "invisible"}`}>
        //         {errors.bio?.message}.
        //     </p>
        // </div>



        {/* Ticket Price selection dropdown */}   
        {/* <div>
            <label className='form__label'>Ticket Price</label>
            <input
                className=""
                {...register("ticketPrice", ticketPriceValidation)}
                />
            <p className={`plain-text text-red-600 ${errors.ticketPrice?.message ? "visible" : "invisible"}`}>
                {errors.ticketPrice?.message}.
            </p>
        </div> */}



    //     <div>
    //     <label className='form__label__branch'>Degree</label>
    //     <input type="text" placeholder="Degree"
    //             className={`form__input  `}
    //             {...register(`qualifications.${index}.degree`, )}/>
    // </div>


//     <div>
//     <label className='form__label__branch'>Starting Time</label>
//     <input type="time" placeholder="Starting Time"
//         className={`form__input `}
//         {...register(`timeSlots.${index}.startingTime`, )}/>
// </div>