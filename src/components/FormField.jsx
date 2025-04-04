import React from 'react'

const FormField = ({ labelName, placeholder, inputType, isTextArea,tagDescription, value, handleChange }) => {
  return (
    <label className="flex-1 w-full flex flex-col">
      {labelName && (
        <div>
                  <span className="font-epilogue font-medium text-[22px] leading-[22px]  text-[#4b5264]  mb-[10px]">{labelName}</span> <br />
                  <p className= " font-extralight text-[18px] leading-[30px]  text-[#4b5264]  mb-[20px]">{tagDescription}</p>
        </div>
      )}
      {isTextArea ? (
        <textarea 
          required
          value={value}
          onChange={handleChange}
          rows={10}
          placeholder={placeholder}
          className="py-[15px] text-[#4b5264] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[14px] placeholder:text-[#808191] rounded-[10px] sm:min-w-[300px]"
        />
      ) : (
        <input 
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          step="0.1"
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[#4b5264] text-[14px] placeholder:text-[#808191] rounded-[10px] sm:min-w-[300px]"
        />
      )}
    </label>
  )
}

export default FormField