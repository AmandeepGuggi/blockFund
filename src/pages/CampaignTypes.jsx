import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';


export default function CampaignType() {
  const navigate = useNavigate()
  return (
    <>
    
      <Swiper className="mySwiper" navigation={true} modules={[Navigation]} >
        <SwiperSlide>
        <div className='bg-[#1F0733] py-10 h-[80%] rounded w-full my-auto' >
          <div className='bg-[#361F47]  rounded-3xl p-10 w-[480px] w-max-[500px]
           text-white mx-auto  text-left'>
          <div>
          <h2 className='text-[12px] ml-auto font-extralight'>RAISE FUNDS</h2>
          <h1 className='text-4xl my-10 text-yellow-400 font-extrabold'>Crowdfunding</h1>
          <p className='text-3xl bold mb-10'>Launch your campaign, secure funding, and build community</p>
          <ul className='list-disc text-left mb-10 '>
            <li>Flexible funding options</li>
            <li>Robust campaign customization tools</li>
            <li>Tailored promo packages</li>
          </ul>
          <Link to="/form">
          <button
          className='bg-[#CCFE37] bold text-[#1f0733] cursor-pointer text-[14px] px-5 py-3 rounded-[10px]
           shadow-md box drop-shadow-md filter transform transition-transform duration-300 ease-in-out hover:scale-110'>
            START YOUR CAMPAIGN</button>
          </Link>
          <p className='text-[14px] my-10'>FEES <span>transaction fees only</span></p>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-[#1F0733] py-10 h-[80%] rounded w-full my-auto' >
          <div className='bg-[#361F47]  rounded-3xl p-10 w-[480px] w-max-[500px]
           text-white mx-auto  text-left'>
          <div>
          <h2 className='text-[12px] ml-auto font-extralight'>SELL ON FUNDSHOP</h2>
          <h1 className='text-4xl my-10 text-yellow-400 font-extrabold'>E-Commerce</h1>
          <p className='text-3xl bold mb-10'>Sell ready-to-ship products on blockshop and scale your business</p>
          <ul className='list-disc text-left mb-10 '>
            <li>Sell on IndieShop, our curated marketplace</li>
            <li>New audience access</li>
            <li>Seamless transition from crowdfunding</li>
          </ul>
          <button className='bg-white cursor-pointer bold text-[#1f0733] text-[14px] px-5 py-3 rounded-[10px]
           shadow-md box box2 transform transition-transform duration-300 ease-in-out hover:scale-110 drop-shadow-md filter'>SCALE YOUR BUISNESS</button>
          <p className='text-[14px] my-10'>FEES <span>10% of product sales</span></p>
          </div>
          </div>
        </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
