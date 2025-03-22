import { Link } from "react-router";
import CustomButton from "./CustomButton";
import { search, thirdweb } from "../assets";
const Header = () => {
  return (
    <header className=" w-full p-4 text-black z-10 bg-transparent">
      <div className="flex md:flex-row group flex-col-reverse justify-between gap-6">
      <div className='text-black gap-8 flex justify-between items-center'>
        <h1 className='text-[34px] font-extrabold'>
          BLOCKFUND
        </h1>
        <p className='text-[20px] group cursor-pointer transition-all relative font-extralight '>Explore</p>
        <div className="absolute top-15 hidden group-hover:flex bg-gray-300 px-6 py-2 left-[17%] ">
          <ul className="text-[17px] cursor-pointer ">
            <Link to="/all-campaigns"><li>All Campaigns</li></Link>
            <li>Tech & Innovations</li>
            <li>Creative works</li>
            <li>Just launched</li>
          </ul>
        </div>
        <p className='text-[20px] font-extralight'>BlockShop</p>
      </div>
      <div className="lg:flex-1 border  flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/50  rounded-[100px]">
        <input type="text" placeholder="Search for campaigns" className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none" />
        
        <div className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
          <img src={search} alt="search" className="w-[15px] h-[15px] object-contain"/>
        </div>
      </div>

      <div className="sm:flex hidden text-black flex-row justify-end gap-4">
        <CustomButton 
          btnType="button"
          title='Login'
          styles='hover:bg-[#8c6dfd] px-[24px] py-[8px] border-[2px] border border-[#8c6dfd] text-black bg-transparent'
          handleClick={() => {
            if(address) navigate('create-campaign')
            else connect()
          }}
        />

        <Link to="/profile">
          <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain" />
          </div>
        </Link>
      </div>
      </div>
    </header>
  );
};

export default Header;
