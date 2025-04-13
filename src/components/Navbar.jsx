import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router';

import { useStateContext } from '../context';
import { CustomButton, DisplayCampaigns } from './';
import { logo, menu, search, thirdweb } from '../assets';
import { navlinks } from '../constants';
import FundCard from './FundCard';
import { solarSystem, demo } from '../assets';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const [campaigns, setCampaigns] = useState([])
  const { connect, address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true)
    const data = await getCampaigns();
    setCampaigns(data)
    setIsLoading(false)
  }

  useEffect(()=>{
    if(contract) fetchCampaigns();
  }, [address, contract])

  const [selectOption, setSelectedOption] = useState("");
      const handleChange = (event) => {
          setSelectedOption(event.target.value);
        };

  return (
    <div className="w-full" >
    <div className="flex w-full justify-between items-baseline px-2">

    <div className='bg-gray-300 ml-10 rounded w-[400px] text-2xl border-0 outline-0 '>
      <input type="text" className='w-full px-4 border-0 outline-0 placeholder:text-[17px]' placeholder='search for campaign' />
    </div>
    <div className='text-2xl justify-end'>
    <select className='text-[20px] font-extralight shadow-xl' value onChange={handleChange}>
      <option  className='text-[18px] px-3 py-2 font-extralight ' value="none" hidden>Filter</option>
      <option  className='text-[18px] px-3 py-2 font-extralight ' value="option1">Option 1</option>
      <option  className='text-[18px] px-3 py-2 font-extralight ' value="option2">Option 2</option>
      <option  className='text-[18px] px-3 py-2 font-extralight ' value="option3">Option 3</option>
    </select>
    </div>

    </div>
  
  <div className='m-10 flex gap-10 flex-wrap'>

  
     <DisplayCampaigns
     title="All Campaigns"
     isLoading={isLoading}
     campaigns={campaigns}
      />
  </div>

  </div>
  )
}

export default Navbar