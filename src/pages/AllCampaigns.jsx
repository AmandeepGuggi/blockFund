import React, { useState } from 'react'
import { FundCard, Footer, Sidebar, Navbar } from '../components';
import { solarSystem } from '../assets';

const AllCampaigns = () => {
    const [selectOption, setSelectedOption] = useState("");
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
      };
    
  return (
    <>
   <section className='flex m-10'>
  
    <Sidebar />
   <Navbar />
   </section>

   <Footer />
   
    </>
  )
}

export default AllCampaigns