import React from 'react';

const FormSelect = ({fieldName, labelText, options = [], register, validationRules = {}, errors, selectStyle = "", containerStyle= "", 
        labelStyle = "",}) => {
  return (
    <div className={containerStyle}>
      <label className={labelStyle}>{labelText}</label>
      <select className={`${selectStyle}`}
              {...register(fieldName, validationRules)}>
            <option value="" disabled>
              Choose an option
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
      </select>
      <p className={`plain-text text-red-600 ${errors?.[fieldName]?.message ? "visible" : "invisible"}`}>
        {errors?.[fieldName]?.message}
      </p>
    </div>
  );
};

export default FormSelect;



  // <div>
  // <label htmlFor='gender' className='form__label'>
  //     Gender
  // </label>
  // <select
  //     className="form__select"
  //     {...register("gender", { 
  //         required: "Select a Gender" 
  //         })}
  //     >
  //     <option value="" disabled>Choose an option</option>
  //     <option value='male'>Male</option>
  //     <option value='female'>Female</option>
  //     <option value='other'>Other</option>
  // </select>
  // <p className={`plain-text text-red-600 ${errors.gender?.message ? "visible" : "invisible"}`}>
  //     {errors.gender?.message}.
  // </p>
  // </div>


            //   <div>
            //     <label htmlFor='specialization' className='form__label'>
            //         Specialization
            //     </label>
            //     <select
            //         className="form__select"
            //         {...register("specialization", { 
            //             required: "Select a Specialization" 
            //             })}
            //         >
            //         <option value="" disabled>Choose an option</option>
            //         <option value='Nephrologists'>Nephrologists</option>
            //         <option value='Hematologists'>Hematologists</option>
            //         <option value='Infectious'>Infectious</option>
            //         <option value='Surgeon'>Surgeon</option>
            //     </select>
            //     <p className={`plain-text text-red-600 ${errors.specialization?.message ? "visible" : "invisible"}`}>
            //         {errors.specialization?.message}.
            //     </p>
            // </div>




          {/* <div className=' flex flex-col justify-between'>
              <label className='form__label__branch'>Day of Week</label>
              <select className="form__input h-full"
                  {...register(`timeSlots.${index}.dayOfWeek`,)}>
                  <option value="" disabled>Choose an option</option>
                  <option value='Monday'>Monday</option>
                  <option value='Tuesday'>Tuesday</option>
                  <option value='Wednesday'>Wednesday</option>
                  <option value='Thursday'>Thursday</option>
                  <option value='Friday'>Friday</option>
                  <option value='Saturday'>Saturday</option>
                  <option value='Sunday'>Sunday</option>
              </select>
          </div> */}            