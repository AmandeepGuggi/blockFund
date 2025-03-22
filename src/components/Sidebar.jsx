import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';

import { logo, sun } from '../assets';
import { navlinks } from '../constants';




const Sidebar = () => {
  

  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className="border-r-2 pr-7">
    <h1 className='text-2xl mb-8'>Filter results</h1>
    <div>
        <h2 className='text-xl mb-3'>CATEGORY</h2>
    </div>

    <div className="w-64 mx-auto mt-5 bg-white ">
     
      <div className="shadow-sm mb-2">
        <button
          className={`w-full flex justify-between text-left px-4 py-2 hover:text-[#e50f75]`}
        >
          <p>All</p> 
        </button>
        
      </div>

      <div className="shadow-sm mb-2">
        <button
          onClick={() => toggleCategory(1)}
          className={`w-full flex justify-between text-left px-4 py-2 ${openCategory === 1? "text-[#e50f75]": "" }`}
        >
          <p>Tech & Innovations</p> <span>{openCategory===1? "▲ " : "▼"}</span>
        </button>
        {openCategory === 1 && (
          <div className="pl-4 ">
            <a href="#" className="block px-4 py-2">Audio</a>
            <a href="#" className="block px-4 py-2">Camera Gear</a>
            <a href="#" className="block px-4 py-2">Education</a>
            <a href="#" className="block px-4 py-2">Energy & Green Tech</a>
            <a href="#" className="block px-4 py-2">Fashion and Wearables</a>
            <a href="#" className="block px-4 py-2">Food & Beverages</a>
            <a href="#" className="block px-4 py-2">Health & Fitness</a>
            <a href="#" className="block px-4 py-2">Home</a>
            <a href="#" className="block px-4 py-2">Phones & Accessories</a>
            <a href="#" className="block px-4 py-2">Productivity</a>
            <a href="#" className="block px-4 py-2">Transportation</a>
            <a href="#" className="block px-4 py-2">Travel & Outdoors</a>
           
          </div>
        )}
      </div>

      <div className="shadow-sm mb-2">
  <button
    onClick={() => toggleCategory(2)}
    className={`w-full flex justify-between text-left px-4 py-2 ${openCategory === 2 ? "text-[#e50f75]": "" }`}
  >
    <p>Donation Campaigns</p> <span>{openCategory === 2 ? "▲" : "▼"}</span>
  </button>
  {openCategory === 2 && (
    <div className="pl-4">
      <a href="#" className="block px-4 py-2">Medical Assistance</a>
      <a href="#" className="block px-4 py-2">Education Support</a>
      <a href="#" className="block px-4 py-2">Community Development</a>
      <a href="#" className="block px-4 py-2">Disaster Relief</a>
      <a href="#" className="block px-4 py-2">Animal Welfare</a>
      <a href="#" className="block px-4 py-2">Environmental Conservation</a>
      <a href="#" className="block px-4 py-2">Food & Hunger Relief</a>
      <a href="#" className="block px-4 py-2">Homeless Support</a>
      <a href="#" className="block px-4 py-2">Women Empowerment</a>
      <a href="#" className="block px-4 py-2">Religious & Faith-Based Causes</a>
    </div>
  )}
       </div>

      <div className="shadow-sm mb-2">
        <button
          onClick={() => toggleCategory(3)}
          className={`w-full flex justify-between text-left px-4 py-2 ${openCategory === 3? "text-[#e50f75]": "" }`}
        >
          <p>Creative works</p> <span>{openCategory === 3? "▲ " : "▼"}</span>
        </button>
        {openCategory === 3 && (
          <div className="pl-4 ">
            <a href="#" className="block px-4 py-2">Art</a>
            <a href="#" className="block px-4 py-2">Comics</a>
            <a href="#" className="block px-4 py-2">Dance & Theater</a>
            <a href="#" className="block px-4 py-2">Film</a>
            <a href="#" className="block px-4 py-2">Photography</a>
            <a href="#" className="block px-4 py-2">Podcasts, Blogs & Vlogs</a>
            <a href="#" className="block px-4 py-2">Web Series & TV Shows</a>
          </div>
        )}
      </div>
   
      <div className="shadow-sm mb-2">
        <button
          onClick={() => toggleCategory(4)}
          className={`w-full flex justify-between text-left px-4 py-2 ${openCategory === 4? "text-[#e50f75]": "" }`}
        >
          <p>Community Projects</p> <span>{openCategory===4? "▲ " : "▼"}</span>
        </button>
        {openCategory === 4 && (
          <div className="pl-4 ">
            <a href="#" className="block px-4 py-2">Culture</a>
            <a href="#" className="block px-4 py-2">Environment</a>
            <a href="#" className="block px-4 py-2">Human Rights</a>
            <a href="#" className="block px-4 py-2">Local Business</a>
            <a href="#" className="block px-4 py-2">Wellness</a>
          </div>
        )}
      </div>

    </div>


    <hr />

    <div className='my-3'>
        <h2 className='text-xl mb-3'>CAMPAIGN TIMING</h2>

       <div className='flex'>
       <input type="radio" name="timing" value="all" />
       <button
          className="w-full shadow:sm hover:text-[#e50f75] text-left px-4 py-2 "
        >
          <p>All</p> 
        </button>
       </div>

       <div className='flex'>
       <input type="radio" name="timing" value="ending-soon" />
       <button
          className="w-full shadow:sm hover:text-[#e50f75] text-left px-4 py-2 "
        >
          <p>Ending soon</p> 
        </button>
       </div>
       <div className='flex'>
       <input type="radio" name="timing" value="just-launched" />
       <button
          className="w-full shadow:sm hover:text-[#e50f75] text-left px-4 py-2 "
        >
          <p>Just launched</p> 
        </button>
       </div>
       
    </div>
    <hr />
    

    </div>
  )
}

export default Sidebar