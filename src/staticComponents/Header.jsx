import { Link } from "react-router";
import {CustomButton} from "../components";
import { useNavigate } from "react-router";
import { useDisconnect } from "@thirdweb-dev/react";
import { useState } from "react";
import { search } from "../assets";




const Header = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate()
  const disconnect = useDisconnect();
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  return (
    <header className=" w-full border-b-1 border-b-gray-300 p-4 text-black z-10 bg-transparent">
      <div className="flex flex-row  justify-between items-center gap-6">
     
        <h1 onClick={()=> navigate("/")} className='cursor-pointer text-[34px] font-extrabold text-[#e50f75] hidden sm:block'>
          BLOCKFUND
        </h1>


  <div className="flex gap-5">
  {/* <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen1(!isOpen1)}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Learn
        <svg
          className="ml-2 -mr-1 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path d="M5 8l5 5 5-5" />
        </svg>
      </button>

      {isOpen1 && (
        <div className="absolute border-0 right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-1">
          <div className="py-1">
            <Link to="/explore/learn#how-it-works" onClick={() => setIsOpen1(!isOpen1)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              How it works
            </Link>
            <Link to="/explore/learn#education-center" onClick={() => setIsOpen1(!isOpen1)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Education center
            </Link>
            <Link to="/explore/learn#what-is-crowdfunding" onClick={() => setIsOpen1(!isOpen1)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              What is crowdfunding
            </Link>
            <Link to="/explore/learn#what-is-crowdfunding" onClick={() => setIsOpen1(!isOpen1)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Trust and safety
            </Link>
          </div>
        </div>
      )}
    </div>

    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen2(!isOpen2)}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Contact Us
        <svg
          className="ml-2 -mr-1 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path d="M5 8l5 5 5-5" />
        </svg>
      </button>

      {isOpen2 && (
        <div className="absolute border-0 right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-1">
          <div className="py-1">
            <Link to="/explore/contact" onClick={() => {
              setIsOpen2(!isOpen2)
              navigate("/explore/contact")
            }}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Get in touch
            </Link>
            <Link to="/contact" onClick={() => setIsOpen2(!isOpen2)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Development
            </Link>
            <Link to="#" onClick={() => setIsOpen2(!isOpen2)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              SEO
            </Link>
          </div>
        </div>
      )}
    </div>

    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen3(!isOpen3)}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Services
        <svg
          className="ml-2 -mr-1 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path d="M5 8l5 5 5-5" />
        </svg>
      </button>

      {isOpen3 && (
        <div className="absolute border-0 right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-1">
          <div className="py-1">
            <Link to="#" onClick={() => setIsOpen3(!isOpen3)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Web Design
            </Link>
            <Link to="#" onClick={() => setIsOpen3(!isOpen3)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Development
            </Link>
            <Link to="#" onClick={() => setIsOpen3(!isOpen3)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              SEO
            </Link>
          </div>
        </div>
      )}
    </div> */}

    <p onClick={()=> navigate("/explore/learn")}  className="text-2xl cursor-pointer">Learn</p>
    <p onClick={()=> navigate("/explore/contact")} className="text-2xl cursor-pointer">Contact us</p>
    {/* <p className="text-2xl">Learn</p> */}
    
  </div>

 <div className="flex gap-5">
 <button onClick={()=> navigate("/form")} className="bg-[#e50f75] text-white px-2 py-1.5 font-bold ">
    START A CAMPAIGN
  </button>
  {/* <button className="font-bold">Login</button> */}
 </div>
    
     
      </div>
    </header>
  );
};

export default Header;
