import React, { useState } from 'react'
import { FundCard, Footer } from '../components';
import { solarSystem } from '../assets';

const AllCampaigns = () => {
    const [selectOption, setSelectedOption] = useState("");
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
      };
    
  return (
    <>
   <section className='flex m-10'>
   <sidebar className="border-r-2 pr-7">
    <h1 className='text-2xl mb-8'>Filter results</h1>
    <div>
        <h2 className='text-xl mb-3'>CATEGORY</h2>
        <ul className='mb-3'>
            <li>All Categories</li>
            <li>Tech & Innovations</li>
            <li>Creative Works</li>
            <li>Community Projects</li>
        </ul>
    </div>
    <hr />
    <div className='my-3'>
        <h2 className='text-xl mb-3'>CAMPAIGN TIMING</h2>
        <ul className='mb-3'>
            <li>All</li>
            <li>Ending soon</li>
            <li>Just Launched</li>
            <li>Launching soon ?</li>
        </ul>
    </div>
    <hr />
    <div className='my-3'>
        <h2 className='text-xl mb-3'>CAMPAIGN TIMING</h2>
        <ul className='mb-3'>
            <li>All</li>
            <li>Ending soon</li>
            <li>Just Launched</li>
            <li>Launching soon ?</li>
        </ul>
    </div>
    <hr />
    <div className='my-3'>
        <h2 className='text-xl mb-3'>CAMPAIGN TIMING</h2>
        <ul className='mb-3'>
            <li>All</li>
            <li>Ending soon</li>
            <li>Just Launched</li>
            <li>Launching soon ?</li>
        </ul>
    </div>

    </sidebar>

    <navbar className="w-full" >
      <div className="flex w-full justify-between items-baseline px-2">

      <div className='bg-gray-300 ml-10 rounded w-[400px] text-2xl border-0 outline-0 '>
        <input type="text" className='w-full px-4 border-0 outline-0 placeholder:text-[17px]' placeholder='search for campaign' />
      </div>
      <div className='text-2xl justify-end'>
      <select value={setSelectedOption} onChange={handleChange}>
        <option value="">Filter</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      </div>

      </div>
    
    <div className='m-10 flex gap-10 flex-wrap'>
   
    <FundCard
         owner="0x2817kjagdci7d6d"
          title="demo campaign1"
           description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi omnis similique dolore fugiat maxime! Vel aspernatur exercitationem ab reiciendis officia?" 
           target="0.5ETH" 
           deadline="03/05/20205" 
           amountCollected="0.2" 
           image={solarSystem}
            handleClick={()=> console.log('clicked')}
         />
    <FundCard
         owner="0x2817kjagdci7d6d"
          title="demo campaign1"
           description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi omnis similique dolore fugiat maxime! Vel aspernatur exercitationem ab reiciendis officia?" 
           target="0.5ETH" 
           deadline="03/05/20205" 
           amountCollected="0.2" 
           image={solarSystem}
            handleClick={()=> console.log('clicked')}
         />
    <FundCard
         owner="0x2817kjagdci7d6d"
          title="demo campaign1"
           description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi omnis similique dolore fugiat maxime! Vel aspernatur exercitationem ab reiciendis officia?" 
           target="0.5ETH" 
           deadline="03/05/20205" 
           amountCollected="0.2" 
           image={solarSystem}
            handleClick={()=> console.log('clicked')}
         />
    <FundCard
         owner="0x2817kjagdci7d6d"
          title="demo campaign1"
           description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi omnis similique dolore fugiat maxime! Vel aspernatur exercitationem ab reiciendis officia?" 
           target="0.5ETH" 
           deadline="03/05/20205" 
           amountCollected="0.2" 
           image={solarSystem}
            handleClick={()=> console.log('clicked')}
         />
    <FundCard
         owner="0x2817kjagdci7d6d"
          title="demo campaign1"
           description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi omnis similique dolore fugiat maxime! Vel aspernatur exercitationem ab reiciendis officia?" 
           target="0.5ETH" 
           deadline="03/05/20205" 
           amountCollected="0.2" 
           image={solarSystem}
            handleClick={()=> console.log('clicked')}
         />
    <FundCard
         owner="0x2817kjagdci7d6d"
          title="demo campaign1"
           description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi omnis similique dolore fugiat maxime! Vel aspernatur exercitationem ab reiciendis officia?" 
           target="0.5ETH" 
           deadline="03/05/20205" 
           amountCollected="0.2" 
           image={solarSystem}
            handleClick={()=> console.log('clicked')}
         />
    </div>

    </navbar>
   </section>

   <Footer />
   
    </>
  )
}

export default AllCampaigns