import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router';

import { useStateContext } from '../context';
import { CustomButton } from '.';
import { logo, menu, search, thirdweb } from '../assets';
import { navlinks } from '../constants';
import FundCard from './FundCard';
import { solarSystem, demo } from '../assets';

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address } = useStateContext();

  const [selectOption, setSelectedOption] = useState("");
      const handleChange = (event) => {
          setSelectedOption(event.target.value);
        };

  return (
    // <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
    //   <div className='text-white gap-2 flex justify-between items-center'>
    //     <h1 className='text-[34px] font-extrabold'>
    //       BLOCKFUND
    //     </h1>
    //     <p className='text-[20px] font-extralight'>Explore</p>
    //     <p className='text-[20px] font-extralight'>BlockShop</p>
    //   </div>
    //   <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
    //     <input type="text" placeholder="Search for campaigns" className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none" />
        
    //     <div className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
    //       <img src={search} alt="search" className="w-[15px] h-[15px] object-contain"/>
    //     </div>
    //   </div>

    //   <div className="sm:flex hidden flex-row justify-end gap-4">
    //     <CustomButton 
    //       btnType="button"
    //       title={address ? 'Create a campaign' : 'Login'}
    //       styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
    //       handleClick={() => {
    //         if(address) navigate('create-campaign')
    //         else connect()
    //       }}
    //     />

    //     <Link to="/profile">
    //       <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
    //         <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain" />
    //       </div>
    //     </Link>
    //   </div>

    //   {/* Small screen navigation */}
    //     <div className="sm:hidden flex justify-between items-center relative">
    //     <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
    //         <img src={logo} alt="user" className="w-[60%] h-[60%] object-contain" />
    //       </div>

    //       <img 
    //         src={menu}
    //         alt="menu"
    //         className="w-[34px] h-[34px] object-contain cursor-pointer"
    //         onClick={() => setToggleDrawer((prev) => !prev)}
    //       />

    //       <div className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
    //         <ul className="mb-4">
    //           {navlinks.map((link) => (
    //             <li
    //               key={link.name}
    //               className={`flex p-4 ${isActive === link.name && 'bg-[#3a3a43]'}`}
    //               onClick={() => {
    //                 setIsActive(link.name);
    //                 setToggleDrawer(false);
    //                 navigate(link.link);
    //               }}
    //             >
    //               <img 
    //                 src={link.imgUrl}
    //                 alt={link.name}
    //                 className={`w-[24px] h-[24px] object-contain ${isActive === link.name ? 'grayscale-0' : 'grayscale'}`}
    //               />
    //               <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === link.name ? 'text-[#1dc071]' : 'text-[#808191]'}`}>
    //                 {link.name}
    //               </p>
    //             </li>
    //           ))}
    //         </ul>

    //         <div className="flex mx-4">
    //         <CustomButton 
    //           btnType="button"
    //           title={address ? 'Create a campaign' : 'Connect'}
    //           styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
    //           handleClick={() => {
    //             if(address) navigate('create-campaign')
    //             else connect();
    //           }}
    //         />
    //         </div>
    //       </div>
    //     </div>
    // </div>
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
         image={demo}
          handleClick={()=> navigate("/campaign-details")}
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
         image={demo}
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
  )
}

export default Navbar