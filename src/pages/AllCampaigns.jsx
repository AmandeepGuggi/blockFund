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
    <div className='min-h-[250px] flex items-center justify-center bg-contain  bg-no-repeat' style={{backgroundImage: "url('https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/g_center,q_auto,f_auto/v1588904443/explore/hero/desktop/all.jpg') "}}>
       <p className='text-white/70 text-4xl font-stretch-expanded'>EXPLORE IT ALL</p>
          </div>
   <section className='flex m-10'>
  
    <Sidebar />
   <Navbar />
   
   </section>

   <Footer />
   
    </>
  )
}

export default AllCampaigns