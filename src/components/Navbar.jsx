import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router';

import { useStateContext } from '../context';
import { CustomButton, DisplayCampaigns } from './';
import {solarSystem, demo , logo, menu, search, blackSearch, thirdweb } from '../assets';
import { navlinks } from '../constants';
import FundCard from './FundCard';

import { useFilter } from '../context/FilterContext';


const Navbar = () => {

  

  const { filters, updateFilter } = useFilter();

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

 

  return (
    <div className="w-full" >
      
    <div className="flex w-full justify-between items-baseline px-2">

    <div className='bg-gray-300 flex w-full px-2 py-2 ml-10 rounded mr-10 text-[18px] font-extralight border-0 outline-0 '>
      <img src={blackSearch}  alt="search" className='text-black max-w-[20px]' />
      <input type="text" 
      className='w-full px-4 border-0 outline-0 placeholder:text-[17px]' 
      placeholder='search for campaign' 
      value={filters.searchTerm}
      onChange={(e)=> updateFilter('searchTerm',  e.target.value )} />
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