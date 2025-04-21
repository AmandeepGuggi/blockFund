import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';

import { logo, sun } from '../assets';
import { navlinks } from '../constants';

import { useFilter } from '../context/FilterContext';


const Sidebar = () => {

  const { filters, updateFilter } = useFilter();

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
          onClick={(e) => {
            e.preventDefault();
            updateFilter("searchTerm", ""); // or use 'subcategory' if you're separating it
          }}
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
            {[
      "Audio",
      "Camera Gear",
      "Education",
      "Energy & Green Tech",
      "Fashion and Wearables",
      "Food & Beverages",
      "Health & Fitness",
      "Home",
      "Phones & Accessories",
      "Productivity",
      "Transportation",
      "Travel & Outdoors",
    ].map((category) => (
      <a
        key={category}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          updateFilter("searchTerm", category); // or use updateFilter('category', category)
          toggleCategory((prev)=> !prev)
        }}
        className="block px-4 py-2 hover:bg-gray-100"
      >
        {category}
      </a>
    ))}
           
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
    {[
      "Medical Assistance",
      "Education Support",
      "Community Development",
      "Disaster Relief",
      "Animal Welfare",
      "Environmental Conservation",
      "Food & Hunger Relief",
      "Homeless Support",
      "Women Empowerment",
      "Religious & Faith-Based Causes",
    ].map((subcategory) => (
      <a
        key={subcategory}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          updateFilter("searchTerm", subcategory); // or "subcategory" depending on your filtering logic
        }}
        className={`block px-4 py-2 hover:bg-gray-100 ${
          filters.searchTerm === subcategory ? "bg-gray-200 font-semibold" : ""
        }`}
      >
        {subcategory}
      </a>
    ))}
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
  <div className="pl-4">
    {[
      "Art",
      "Comics",
      "Dance & Theater",
      "Film",
      "Photography",
      "Podcasts, Blogs & Vlogs",
      "Web Series & TV Shows",
    ].map((subcategory) => (
      <a
        key={subcategory}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          updateFilter("searchTerm", subcategory); // or use 'subcategory' if you're separating it
        }}
        className="block px-4 py-2 hover:bg-gray-100"
      >
        {subcategory}
      </a>
    ))}
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
  <div className="pl-4">
    {[
      "Culture",
      "Environment",
      "Human Rights",
      "Local Business",
      "Wellness",
    ].map((subcategory) => (
      <a
        key={subcategory}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          updateFilter("searchTerm", subcategory); // or 'subcategory' if your logic separates it
          toggleCategory((prev)=> !prev)
        }}
        className="block px-4 py-2 hover:bg-gray-100"
      >
        {subcategory}
      </a>
    ))}
  </div>
)}
      </div>

    </div>


    <hr />

    <div className='my-3'>
        <h2 className='text-xl mb-3'>CAMPAIGN TIMING</h2>

       <div className='flex'  onClick={(e) => {
            updateFilter("searchTerm", "active"); 
          }}>
       <input type="radio" name="status" id='active' value="all" />
       <label htmlFor="active"
          className="w-full shadow:sm hover:text-[#e50f75] text-left px-4 py-2 "
        >
          <p>Active</p> 
        </label>
       </div>

       <div className='flex'  onClick={(e) => {
          updateFilter("searchTerm", "successful"); 
        }}>
       <input type="radio" name="status" id="successful" value="ending-soon" />
       <label htmlFor='successful'
          className="w-full shadow:sm hover:text-[#e50f75] text-left px-4 py-2 "
        >
          <p>Successful</p> 
        </label>
       </div>
       <div className='flex'  onClick={(e) => {
          updateFilter("searchTerm", "expired"); 
        }}>
       <input type="radio" name="status" id='expired' value="just-launched" />
       <label htmlFor='expired'
          className="w-full shadow:sm hover:text-[#e50f75] text-left px-4 py-2 "
        >
          <p>Expired</p> 
        </label>
       </div>
       
    </div>
    <hr />
    

    </div>
  )
}

export default Sidebar