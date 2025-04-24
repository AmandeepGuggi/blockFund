import { Link } from "react-router";
import CustomButton from "./CustomButton";
import {
  search,
  thirdweb,
  user,
  logo,
  menu,
  home,
  game,
  travel,
  fitness,
  energy,
  phone,
  audio,
} from "../assets";
import { useNavigate } from "react-router";
import { useStateContext } from "../context";
import { useDisconnect } from "@thirdweb-dev/react";
import { useState } from "react";
import { useFilter } from "../context/FilterContext";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { filters, updateFilter } = useFilter();
  const navigate = useNavigate();
  const { connect, address } = useStateContext();
  const disconnect = useDisconnect();

  return (
    <header className=" w-full p-4 text-black z-10 bg-transparent">
      <div className="flex md:flex-row flex-col-reverse justify-between gap-6">
        <div className="text-black gap-8 flex justify-between items-center">
          <h1
            onClick={() => navigate("/")}
            className="cursor-pointer text-[34px] font-extrabold text-[#e50f75] hidden sm:block"
          >
            BLOCKFUND
          </h1>
          <div className="relative hidden sm:block group">
            <p className=" text-black font-extralight text-[24px] rounded hover:underline cursor-progress">
              Explore
            </p>

            <div
              className="absolute z-999 max-w-full min-w-screen
   left-[-260px] top-[150%]  mt-2 w-48 bg-white border-t
    border-gray-300 shadow-lg  transform 
  scale-y-0 origin-top transition-transform duration-300 
  ease-in-out group-hover:scale-y-100 "
            >
              <div className="m-6 mx-20 flex gap-5 items-center justify-center text-xl ">
                <p onClick={()=>{
                  updateFilter('searchTerm', 'home');
                  navigate('/all-campaigns')
                }} className="bg-gray-300 cursor-pointer text-[12px] justify-center px-3 py-1 rounded-3xl  font-extralight flex gap-1 items-center">
                  <span className="w-[24px]">
                    <img className="w-full" src={home} alt="home" />
                  </span>{" "}
                  <span>Home</span>{" "}
                </p>
                <p onClick={()=>{
                  updateFilter('searchTerm', 'travel and Outdoor');
                  navigate('/all-campaigns')
                }}  className="bg-gray-300 cursor-pointer text-[12px] justify-center px-3 py-1 rounded-3xl  font-extralight flex gap-1 items-center">
                  <span className="w-[24px]">
                    <img className="w-full" src={travel} alt="home" />
                  </span>{" "}
                  <span>Travel & Outdoor</span>{" "}
                </p>
                <p onClick={()=>{
                  updateFilter('searchTerm', 'video games');
                  navigate('/all-campaigns')
                }}   className="bg-gray-300 cursor-pointer text-[12px] justify-center px-3 py-1 rounded-3xl  font-extralight flex gap-1 items-center">
                  <span className="w-[24px]">
                    <img className="w-full" src={game} alt="home" />
                  </span>{" "}
                  <span>Video games</span>{" "}
                </p>
                <p onClick={()=>{
                  updateFilter('searchTerm', 'Audio');
                  navigate('/all-campaigns')
                }}   className="bg-gray-300 cursor-pointer text-[12px] justify-center px-3 py-1 rounded-3xl font-extralight flex gap-1 items-center">
                  <span className="w-[24px]">
                    <img className="w-full" src={audio} alt="home" />
                  </span>{" "}
                  <span>Audio</span>{" "}
                </p>
                <p onClick={()=>{
                  updateFilter('searchTerm', 'Health & Fitness');
                  navigate('/all-campaigns')
                }}   className="bg-gray-300 cursor-pointer text-[12px] justify-center px-3 py-1 rounded-3xl  font-extralight flex gap-1 items-center">
                  <span className="w-[24px]">
                    <img className="w-full" src={fitness} alt="home" />
                  </span>{" "}
                  <span>Heath & Fitness</span>{" "}
                </p>
                <p onClick={()=>{
                  updateFilter('searchTerm', 'Phones & Accesories');
                  navigate('/all-campaigns')
                }}   className="bg-gray-300 cursor-pointer text-[12px] justify-center px-3 py-1 rounded-3xl  font-extralight flex gap-1 items-center">
                  <span className="w-[20px]">
                    <img className="w-full" src={phone} alt="home" />
                  </span>{" "}
                  <span>Phones & Accesories</span>{" "}
                </p>
                <p onClick={()=>{
                  updateFilter('searchTerm', 'Energy & Green Tech');
                  navigate('/all-campaigns')
                }}   className="bg-gray-300 cursor-pointer text-[12px] justify-center px-3 py-1 rounded-3xl  font-extralight flex gap-1 items-center">
                  <span className="w-[24px]">
                    <img className="w-full" src={energy} alt="home" />
                  </span>{" "}
                  <span>Energy & Green Tech</span>{" "}
                </p>
              </div>
              <hr className="border-gray-300" />

              <div className="flex justify-around mb-5 ">
                <div>
                  <h2 className="text-xl mb-4">DISCOVER</h2>
                  <ul>
                    <li
                      onClick={() => navigate("all-campaigns")}
                      className="hover:text-[#e50f75] cursor-pointer"
                    >
                      All Campaigns
                    </li>
                    <li onClick={()=>{
                  updateFilter('searchTerm', 'Tech & Innovation');
                  navigate('/all-campaigns')
                }}   className="hover:text-[#e50f75]">Tech & Innovation</li>
                    <li onClick={()=>{
                  updateFilter('searchTerm', 'Creative');
                  navigate('/all-campaigns')
                }}    className="hover:text-[#e50f75]">Creative Campaigns</li>
                    <li onClick={()=>{
                  updateFilter('searchTerm', 'Community');
                  navigate('/all-campaigns')
                }}    className="hover:text-[#e50f75]">
                      Community & Culture
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl mb-4">LAUNCH</h2>
                  <ul>
                    <Link to="/form">
                      {" "}
                      <li className="hover:text-[#e50f75]">
                        Start A Campaigns
                      </li>
                    </Link>
                    <Link to="/explore">
                      <li className="hover:text-[#e50f75]">
                        Experts Directory
                      </li>
                    </Link>
                    <Link to="/explore">
                      {" "}
                      <li className="hover:text-[#e50f75]">Enterprise</li>
                    </Link>
                    <Link to="/explore">
                      <li className="hover:text-[#e50f75]">India</li>
                    </Link>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl mb-4">Learn</h2>
                  <ul>
                    <Link to="/explore/learn#how-it-works">
                      <li className="hover:text-[#e50f75]">How it works</li>
                    </Link>
                    <Link to="/explore/learn#education-center">
                      <li className="hover:text-[#e50f75]">Education Center</li>
                    </Link>
                    <Link to="/explore/learn">
                      <li className="hover:text-[#e50f75]">
                        What is Crowdfunding
                      </li>
                    </Link>
                    <Link to="/explore">
                      <li className="hover:text-[#e50f75]">Trust and safety</li>
                    </Link>
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl mb-4">CONTACT</h2>
                  <ul>
                    <Link to="/explore">
                      <li className="hover:text-[#e50f75]">Help & support</li>
                    </Link>
                    <Link to="/explore">
                      <li className="hover:text-[#e50f75]">Press</li>
                    </Link>
                    <Link to="/explore">
                      <li className="hover:text-[#e50f75]">Careers</li>
                    </Link>
                    <Link to="/explore">
                      <li className="hover:text-[#e50f75]">Get in Touch</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex-1 border hidden md:flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/50  rounded-[100px]">
          <input
            type="text"
            placeholder="Search crowdfunding"
            className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-black/80 bg-transparent outline-none"
          />

          <div
            onClick={() => navigate("/all-campaigns")}
            className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer"
          >
            <img
              src={search}
              alt="search"
              className="w-[15px] h-[15px] object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="sm:flex hidden items-center text-black flex-row justify-end gap-4">
            {/* {address && ( <p className="text-black bg-gray-200 px-2 rounded truncate max-w-[210px] text-middle ">User: {address}</p>)} */}
            <button
              type="button"
              className={`font-epilogue font-semibold text-[16px] 
        hover:bg-[#8c6dfd] px-[24px] py-[4px]
         border-[#8c6dfd] max-w-[200px] min-w-[200px] truncate
         bg-transparent border-[2px]
        leading-[26px] text-black max-h-[40px] rounded ${
          address ? "visible" : "invisible"
        } `}
              onClick={() => {}}
            >
              User: {address}
            </button>
            <CustomButton
              btnType="button"
              title={address ? "Disconnect" : "Connect"}
              styles={`hover:bg-[#8c6dfd] px-[24px] py-[8px]
           border-[2px] border border-[#8c6dfd] text-black
            bg-transparent `}
              handleClick={() => {
                if (address) disconnect();
                else connect();
              }}
            />

            <Link to="/profile">
              <div
                title="profile"
                className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer"
              >
                <img
                  src={thirdweb}
                  alt="user"
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
