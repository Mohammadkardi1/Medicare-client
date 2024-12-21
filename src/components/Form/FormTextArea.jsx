import React from 'react';

const FormTextArea = ({fieldName, rows, labelText, type = "text", placeholder, labelStyle, inputStyle, register, 
                        validationRules={}, errors,}) => {


  return (
    <div>
        <label className={labelStyle}>{labelText}</label>
        <textarea rows={rows} type={type} placeholder={placeholder}
                className={`${inputStyle} ${errors?.[fieldName] ? "bg-SemiTransparentBlue rounded-sm" : ""}`}
                {...register(fieldName, validationRules)}/>
                
        <p className={`plain-text text-red-600 ${errors?.[fieldName] ? "visible" : "invisible"}`}>
            {errors?.[fieldName]?.message}
        </p>
    </div>
  );
};

export default FormTextArea

