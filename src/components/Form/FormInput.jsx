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