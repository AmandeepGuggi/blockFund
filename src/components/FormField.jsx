import React, { useState } from 'react'

const FormField = ({accept, multiple, labelName, placeholder, inputType, 
  isTextArea, tagDescription, value, handleChange, isTagField,  tags, setTags }) => {

      // State to store tags
  const [inputValue, setInputValue] = useState('');
  const handleKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ',') && inputValue.trim()) {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags((prevTags) => [...prevTags, inputValue.trim()]);
      }
      setInputValue('');
    }
  }

   // Handle removing a tag
   const handleTagClick = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    handleChange(e);  // If part of larger form
  };

  // Handle change for tags field
  const handleTagInputChange = (e) => {
    setInputValue(e.target.value);
  };


  return (
    <label className="flex-1 w-full flex flex-col">
      {labelName && (
        <div>
                  <span className="font-epilogue font-medium text-[22px] leading-[22px]  text-[#4b5264]  mb-[10px]">{labelName}</span> <br />
                  <p className= " font-extralight text-[18px] leading-[30px]  text-[#4b5264]  mb-[20px]">{tagDescription}</p>
        </div>
      )}
      
    
      {isTagField ? (
        <div className="flex flex-col">
          {/* <div className="flex items-center space-x-2 border p-2 rounded-lg"> */}
            <input
              value={inputValue}
              onChange={handleTagInputChange}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              className="py-[15px] text-[#4b5264] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[14px] placeholder:text-[#808191] rounded-[10px] sm:min-w-[300px]"
            />
          {/* </div> */}

          {/* Display added tags */}
          <div className="mt-2 flex flex-wrap gap-2">
            {tags && tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-blue-500 text-white px-3 py-1 rounded-full cursor-pointer"
                onClick={() => handleTagClick(tag)}>
                {tag} <span className="ml-2">&times;</span>
              </span>
            ))}
          </div>
        </div>
      ) :
      
      
      (
        isTextArea ? (
        <textarea 
          // required
          value={value}
          onChange={handleChange}
          rows={10}
          placeholder={placeholder}
          className="py-[15px] text-[#4b5264] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[14px] placeholder:text-[#808191] rounded-[10px] sm:min-w-[300px]"
        />
      ) : (
        <input 
          // required
          value={value}
          onChange={handleChange}
          type={inputType}
          step="0.1"
          multiple
          accept={accept}
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[#4b5264] text-[14px] placeholder:text-[#808191] rounded-[10px] sm:min-w-[300px]"
        />
      ))}
    </label>
  )
}

export default FormField