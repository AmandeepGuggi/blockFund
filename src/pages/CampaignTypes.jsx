// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';


// // import required modules
// import { Navigation } from 'swiper/modules';
// import Carousal from '../components/Carousel';


// export default function CampaignType() {
//   const types = [
//     {
//       h2: "RAISE FUNDS",
//       h1: "Crowdfunding",
//       p: "Launch your campaign, secure funding, and build community"
//     },
   

//   ]
//   const navigate = useNavigate()
//   return (
//     <>
    
//       {/* <Swiper className="mySwiper" navigation={true} modules={[Navigation]} >
//         <SwiperSlide>
//         <div className='bg-[#1F0733] py-10 h-[80%] rounded w-full my-auto' >
//           <div className='bg-[#361F47]  rounded-3xl p-10 w-[480px] w-max-[500px]
//            text-white mx-auto  text-left'>
//           <div>
//           <h2 className='text-[12px] ml-auto font-extralight'>RAISE FUNDS</h2>
//           <h1 className='text-4xl my-10 text-yellow-400 font-extrabold'>Crowdfunding</h1>
//           <p className='text-3xl bold mb-10'>Launch your campaign, secure funding, and build community</p>
//           <ul className='list-disc text-left mb-10 '>
//             <li>Flexible funding options</li>
//             <li>Robust campaign customization tools</li>
//             <li>Tailored promo packages</li>
//           </ul>
//           <Link to="/form">
//           <button
//           className='bg-[#CCFE37] bold text-[#1f0733] cursor-pointer text-[14px] px-5 py-3 rounded-[10px]
//            shadow-md box drop-shadow-md filter transform transition-transform duration-300 ease-in-out hover:scale-110'>
//             START YOUR CAMPAIGN</button>
//           </Link>
//           <p className='text-[14px] my-10'>FEES <span>transaction fees only</span></p>
//           </div>
//           </div>
//         </div>
//         </SwiperSlide>
        // <SwiperSlide>
        // <div className='bg-[#1F0733] py-10 h-[80%] rounded w-full my-auto' >
        //   <div className='bg-[#361F47]  rounded-3xl p-10 w-[480px] w-max-[500px]
        //    text-white mx-auto  text-left'>
        //   <div>
        //   <h2 className='text-[12px] ml-auto font-extralight'>SELL ON FUNDSHOP</h2>
        //   <h1 className='text-4xl my-10 text-yellow-400 font-extrabold'>E-Commerce</h1>
        //   <p className='text-3xl bold mb-10'>Sell ready-to-ship products on blockshop and scale your business</p>
        //   <ul className='list-disc text-left mb-10 '>
        //     <li>Sell on IndieShop, our curated marketplace</li>
        //     <li>New audience access</li>
        //     <li>Seamless transition from crowdfunding</li>
        //   </ul>
        //   <button className='bg-white cursor-pointer bold text-[#1f0733] text-[14px] px-5 py-3 rounded-[10px]
        //    shadow-md box box2 transform transition-transform duration-300 ease-in-out hover:scale-110 drop-shadow-md filter'>SCALE YOUR BUISNESS</button>
        //   <p className='text-[14px] my-10'>FEES <span>10% of product sales</span></p>
        //   </div>
        //   </div>
        // </div>
        // </SwiperSlide>
        
//       </Swiper> */}

//       
//     </>
//   );
// }

import React, { useState } from "react";
import { ChevronsLeft, ChevronsRight } from "react-feather"; 
import { MiniFooter } from '../components';

function CampaignCarousel() {
  const campaigns = [
    { 
      id: 1, 
      h2: ' expand reach',
      h1: "InDemand",
      p: "extend your fundraising on Indiegogo, or transition from another crowdfunding platform",
      l1: "Quick cross-platform launch",
      l2: "Targeted promotions to new backers",
      l3: "Expanded audience reach",
      btn: " LEARN MORE",
      fees: "5-8% of funds raised + transaction fees",
     },
     { 
      id: 2, 
      h2: 'RAISE FUNDS',
      h1: "Crowdfunding",
      p: "Launch your campaign, secure funding, and build community",
      l1: "Flexible funding options",
      l2: "Robust campaign customization tools",
      l3: "Tailored promo packages",
      btn: " START YOUR CAMPAIGN",
      fees: "transaction fees only",
     },
    { 
      id: 3, 
      h2: 'SELL ON BLOCKSHOP',
      h1: "E-COMMERCE",
      p: "Sell ready-to-ship products on blockshop and scale your business",
      l1: "Sell on IndieShop, our curated marketplace",
      l2: "New audience access",
      l3: "Seamless transition from crowdfunding",
      btn: " COMMING SOON",
      fees: "10% of product sales",
     },
   
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  const prev = () => {
    setCurrentIndex(currentIndex === 0 ? campaigns.length - 1 : currentIndex - 1);
  };

  const next = () => {
    setCurrentIndex(currentIndex === campaigns.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-full h-full  bg-[#1F0733] overflow-x-hidden">
      {/* Carousel Container */}
      <div className=" flex justify-center items-center h-full">
        <div className="flex transition-all ease-out duration-500 ">
          {campaigns.map((campaign, index) => (
            <>
            <div key={index} className={`relative flex-shrink-0  transition-all duration-300 ease-in-out
                ${index === currentIndex ? "scale-90 z-10 translate-x-0" : "scale-60 opacity-70"} bg-[#361F47]  rounded-3xl p-10 w-[480px] w-max-[500px]
           text-white mx-auto  text-left`} >
          <div>
          <h2 className='text-[12px] ml-auto font-extralight'>{campaign.id} {campaign.h2}</h2>
          <h1 className='text-4xl my-10 text-yellow-400 font-extrabold'>{campaign.h1}</h1>
          <p className='text-3xl bold mb-10'>{campaign.p}</p>
          <ul className='list-disc text-left mb-10 '>
            <li>{campaign.l1}</li>
            <li>{campaign.l2}</li>
            <li>{campaign.l3}</li>
          </ul>
          <Link to="/form">
          <button
          className='bg-[#CCFE37] bold text-[#1f0733] cursor-pointer text-[14px] px-5 py-3 rounded-[10px]
           shadow-md box drop-shadow-md filter transform transition-transform duration-300 ease-in-out hover:scale-110'>
            {campaign.btn}
           </button>
          </Link>
          <p className='text-[14px] my-10'>FEES:  <span>{campaign.fees}</span></p>
          </div>
          </div>
          </>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-white/80 text-gray-800 shadow hover:bg-white"
        >
          <ChevronsLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-2 rounded-full bg-white/80 text-gray-800 shadow hover:bg-white"
        >
          <ChevronsRight size={40} />
        </button>
      </div>
    </div>
  );
}

export default function CampaignType() {
  return (
    <div className=" mx-auto h-screen bg-[#1F0733]">
      <CampaignCarousel />
      <div class="max-w-4xl mx-auto my-10">
  <table class="min-w-full table-auto border-collapse">
    <thead>
      <tr class="bg-gray-100">
        <th class="px-6 py-4 text-left text-sm font-medium text-gray-500">Points of Difference</th>
        <th class="px-6 py-4 text-left text-sm font-medium text-gray-500">Blockfund My Project</th>
        <th class="px-6 py-4 text-left text-sm font-medium text-gray-500">Main Competitor</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
 
      <tr>
        <td class="px-6 py-4 text-sm text-gray-900">Crowdfunding</td>
        <td class="px-6 py-4 text-center text-green-500">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 14a6 6 0 110-12 6 6 0 010 12z" clip-rule="evenodd"></path>
          </svg>
        </td>
        <td class="px-6 py-4 text-center text-red-500">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </td>
      </tr>

 
      <tr>
        <td class="px-6 py-4 text-sm text-gray-900">InDemand</td>
        <td class="px-6 py-4 text-center text-green-500">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 14a6 6 0 110-12 6 6 0 010 12z" clip-rule="evenodd"></path>
          </svg>
        </td>
        <td class="px-6 py-4 text-center text-red-500">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </td>
      </tr>

      <tr>
        <td class="px-6 py-4 text-sm text-gray-900">E-Commerce</td>
        <td class="px-6 py-4 text-center text-red-500">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </td>
        <td class="px-6 py-4 text-center text-green-500">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 14a6 6 0 110-12 6 6 0 010 12z" clip-rule="evenodd"></path>
          </svg>
        </td>
      </tr>

      <tr>
        <td class="px-6 py-4 text-sm text-gray-900">Campaign Strategy Support</td>
        <td class="px-6 py-4 text-center text-green-500">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 14a6 6 0 110-12 6 6 0 010 12z" clip-rule="evenodd"></path>
          </svg>
        </td>
        <td class="px-6 py-4 text-center text-green-500">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 14a6 6 0 110-12 6 6 0 010 12z" clip-rule="evenodd"></path>
          </svg>
        </td>
      </tr>

      <tr>
        <td class="px-6 py-4 text-sm text-gray-900">Enterprise</td>
        <td class="px-6 py-4 text-center text-red-500">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </td>
        <td class="px-6 py-4 text-center text-green-500">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 14a6 6 0 110-12 6 6 0 010 12z" clip-rule="evenodd"></path>
          </svg>
        </td>
      </tr>
    </tbody>
  </table>
</div>

      <MiniFooter />
    </div>
  );
}
