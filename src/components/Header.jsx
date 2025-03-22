import { Link } from "react-router";
import CustomButton from "./CustomButton";
import { search, thirdweb, user } from "../assets";
import { useNavigate } from "react-router";
const Header = () => {
  const navigate = useNavigate()
  return (
    <header className=" w-full p-4 text-black z-10 bg-transparent">
      <div className="flex md:flex-row flex-col-reverse justify-between gap-6">
      <div className='text-black gap-8 flex justify-between items-center'>
        <h1 onClick={()=> navigate("/")} className='cursor-pointer text-[34px] font-extrabold text-[#e50f75]'>
          BLOCKFUND
        </h1>
    
        {/* <div class="relative group">
  <p className=" text-black font-extralight rounded-">Menu</p>

  <div class="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg transform scale-y-0 origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-100">
    
    <a href="/all-campaigns" class="block px-4 py-2 hover:bg-gray-100">All Campaigns</a>

   
    <div class="relative group/submenu">
      <a href="/" class="block px-4 py-2 hover:bg-gray-100">Tech & Innovation ▸</a>
      
      <div class="absolute left-full top-0 mt-0 w-48 bg-white border rounded-md shadow-lg transform scale-y-0 origin-top transition-transform duration-300 ease-in-out group-hover/submenu:scale-y-100">
        <a href="#" class="block px-4 py-2 hover:bg-gray-100">Audio</a>
        <a href="/" class="block px-4 py-2 hover:bg-gray-100">Education</a>
      </div>
    </div>

    <a href="/" class="block px-4 py-2 hover:bg-gray-100">Creative works</a>
  </div>
</div> */}

<div class="relative group">
  <p className=" text-black font-extralight rounded-">Menu</p>

  <div class="absolute max-w-full min-w-screen left-[-257px] top-[150%]  mt-2 w-48 bg-white border-t border-gray-300
    shadow-lg  transform 
  scale-y-0 origin-top transition-transform duration-300 
  ease-in-out group-hover:scale-y-100 ">
  {/* <div class="absolute left-0 mt-2 w-48 bg-white border
   rounded-md shadow-lg transform 
  scale-y-0 origin-top transition-transform duration-300 
  ease-in-out group-hover:scale-y-100"> */}

  <div className="m-6 mx-20 flex gap-5 items-center justify-center text-xl ">
    <p className="bg-gray-300 justify-center px-3 py-1 rounded-3xl items-center font-extralight">Home</p>
    <p className="bg-gray-300 justify-center px-3 py-1 rounded-3xl items-center font-extralight">Energy & Green Tech</p>
    <p className="bg-gray-300 justify-center px-3 py-1 rounded-3xl items-center font-extralight">Video games</p>
    <p className="bg-gray-300 justify-center px-3 py-1 rounded-3xl items-center font-extralight">Heath & Fitness</p>
    <p className="bg-gray-300 justify-center px-3 py-1 rounded-3xl items-center font-extralight">Phones & Accesories</p>
    <p className="bg-gray-300 justify-center px-3 py-1 rounded-3xl items-center font-extralight">Audio</p>
    <p className="bg-gray-300 justify-center px-3 py-1 rounded-3xl items-center font-extralight">Travel & Outdoor</p>
  </div>
    <hr className="border-gray-300" />
   
   <div className="flex justify-around mb-5 ">

   <div>
        <h2 className='text-xl mb-4'>DISCOVER</h2>
        <ul>
          <li onClick={()=> navigate("all-campaigns")} className="hover:text-[#e50f75] cursor-pointer">All Campaigns</li>
          <li className="hover:text-[#e50f75]">Tech & Innovation</li>
          <li className="hover:text-[#e50f75]">Creative Campaigns</li>
          <li className="hover:text-[#e50f75]">Community & Culture</li>
        </ul>
      </div>

      <div>
        <h2 className='text-xl mb-4'>LAUNCH</h2>
        <ul>
          <li className="hover:text-[#e50f75]">Start A Campaigns</li>
          <li className="hover:text-[#e50f75]">Experts Directory</li>
          <li className="hover:text-[#e50f75]">Enterprise</li>
          <li className="hover:text-[#e50f75]">India</li>
        </ul>
      </div>

   <div>
        <h2 className='text-xl mb-4'>Learn</h2>
        <ul>
          <li className="hover:text-[#e50f75]">How it works</li>
          <li className="hover:text-[#e50f75]">Education Center</li>
          <li className="hover:text-[#e50f75]">What is Crowdfunding</li>
          <li className="hover:text-[#e50f75]">Trust and safety</li>
        </ul>
      </div>
   <div>
        <h2 className='text-xl mb-4'>CONTACT</h2>
        <ul>
          <li className="hover:text-[#e50f75]">Help & support</li>
          <li className="hover:text-[#e50f75]">Press</li>
          <li className="hover:text-[#e50f75]">Careers</li>
          <li className="hover:text-[#e50f75]">Get in Touch</li>
        </ul>
      </div>
   </div>

  </div>
</div>


        <p className='text-[20px] font-extralight'>BlockShop</p>
      </div>
      <div className="lg:flex-1 border  flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/50  rounded-[100px]">
        <input type="text" placeholder="Search crowdfunding" className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none" />
        
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
