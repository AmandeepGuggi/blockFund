import React from 'react';

import { tagType, thirdweb } from '../assets';
import { daysLeft, calculateBarPercentage } from '../utils';

const FundCard = ({ owner, title, mediaFiles, category, subCategory, workProof, videoURL, description, target, deadline, amountCollected, image, handleClick }) => {
   const remainingDays = Math.max(daysLeft(deadline), 0);

   const isExpired = remainingDays === 0;
  const isFulfilled = amountCollected >= target;
  
 

  return (
    <div className="sm:w-[288px]  hover:-translate-y-2 transition-transform duration-300  shadow-2xl group  relative w-full rounded-[15px]  cursor-pointer" onClick={handleClick}>
     {mediaFiles &&  <img src={mediaFiles[0]} alt="fund" className="w-full h-[250px] object-cover rounded-[15px] group-hover:opacity-[0.4] "/>}
     

    <div className='absolute hidden transition-all rounded group-hover:flex  mx-auto bg-amber-50 w-[90%] items-center left-[12px] py-[15px] top-[30%] justify-center'>
      <p className='text-xl'>Visit</p>
      </div>
      <div className="flex flex-col p-4">
        <div className="flex items-baseline justify-between">
        <div className="flex flex-row items-center mb-[18px]">
          <img src={tagType} alt="tag" className="w-[17px] h-[17px] object-contain"/>
          <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191] text-black">{category}-{subCategory}</p>
        </div>
        <div className={` ${
  isExpired ? 'bg-red-500' : isFulfilled ? 'bg-green-500' : 'bg-yellow-500'
} min-w-4 min-h-4 rounded-full bg-amber-900`} title={`${
  isExpired ? 'Expired' : isFulfilled ? 'Fulfilled' : 'Active'
}`}></div>
        </div>

        <div className="block">
          <h3 className="font-epilogue font-semibold text-[16px] text-black text-left leading-[26px] truncate">{title}</h3>
          <p className="mt-[5px] font-epilogue font-normal text-[#1b1b1e] text-left leading-[18px] truncate">{description}</p>
        </div>

        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[14px] text-[#35363c] leading-[22px]">{amountCollected}</h4>
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Raised of {target}</p>
          </div>
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[14px] text-[#53545f] leading-[22px]">{remainingDays}</h4>
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Days Left</p>
          </div>
          <div className="relative w-full h-[10px]  rounded bg-[#3a3a43] mt-2">
            <div className="absolute h-full bg-[#E50F74] rounded" style={{ width: `${calculateBarPercentage(target, amountCollected)}%`, maxWidth: '100%' }}>
            </div>
          </div>
        </div>

        <div className="flex items-center mt-[20px] gap-[12px]">
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
            <img src={thirdweb} alt="user" className="w-1/2 h-1/2 object-contain"/>
          </div>
          <p className="flex-1 font-epilogue font-normal text-[12px] text-[#3a3b46] truncate">by <span className="text-[#3f4156]">{owner}</span></p>
        </div>
      </div>
    </div>
  )

}

export default FundCard