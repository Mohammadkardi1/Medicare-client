import React from 'react';

const FormSelect = ({fieldName, labelText, options = [], register, validationRules = {}, errors= {}, selectStyle = "", containerStyle= "", 
        labelStyle = "", startValidationError= false}) => {
  return (
    <div className={containerStyle}>
      <label className={labelStyle}>
        {labelText}

        {startValidationError && errors?.[fieldName.split('.')[0]] && 
          <span className='font-bold text-[16px] text-red-600'>*</span>
        }
      </label>
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
      {!startValidationError &&
      <p className={`plain-text text-red-600 ${errors?.[fieldName]?.message ? "visible" : "invisible"}`}>
        {errors?.[fieldName]?.message}.
      </p>
      }
    </div>
  );
};

export default FormSelect;
