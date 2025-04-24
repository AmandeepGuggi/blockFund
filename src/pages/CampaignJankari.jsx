import React, { useState, useEffect } from 'react'
import { demo, user } from '../assets'
import MiniFooter from '../components/MiniFooter'
import DonateSection from '../components/Donation';
import ReactPlayer from 'react-player';

import { Link, useLocation, useNavigate } from 'react-router';
import { ethers } from 'ethers';
import { useStateContext } from '../context';
import { CountBox, CustomButton, Loader } from '../components';
import { calculateBarPercentage, daysLeft } from '../utils';
import { thirdweb } from '../assets';
import Modal from '../components/Modal';
import CreateTier from '../components/CreateTier';
import TierList from '../components/TierList';
import ShareButton from '../components/ShareButton';
import { FaYoutube } from 'react-icons/fa';

const CampaignJankari = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { state } = useLocation();
  const navigate = useNavigate();
  const { donate, getDonations, contract, address, getUserCampaigns } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [donators, setDonators] = useState([]); 
  
  const location = useLocation()
  console.log(location);

 
  const remainingDays = Math.max(daysLeft(state.deadline), 0);
  const isExpired = remainingDays === 0;
  const isFulfilled = state.amountCollected >= state.target;
  
  let buttonLabel = 'Fund Now';
  let isDisabled = false;
  
  if (isExpired) {
    buttonLabel = 'Campaign Expired';
    isDisabled = true;
  } else if (isFulfilled) {
    buttonLabel = 'Donation Successful';
    isDisabled = true;
  }
  


  const fetchDonators = async () => {
    const data = await getDonations(state.pId);
    setDonators(data);
  }
 

  useEffect(() => {
    if (contract) {
      fetchDonators()}
  }, [contract, address])

  const handleDonate = async () => {
    setIsLoading(true);

    await donate(state.pId, amount);

    navigate('/')
    setIsLoading(false);
  }

  const [firstHalf, secondHalf] = [
    state.description.slice(0, Math.floor(state.description.length / 2)),
    state.description.slice(Math.floor(state.description.length / 2)),
  ];

  const [tiers, setTiers] = useState([]);
  const handleCreateTier = (newTier) => {
    setTiers((prevTiers) => [...prevTiers, newTier]);
  };
  useEffect(()=> {
  console.log(tiers);  
  },[])

  return (
    <>
      {isLoading && "...loading"}
      <div >
       
        <div className='m-4 mx-10'>
          <div className='flex gap-5'>
            <img src={state.mediaFiles[0]} alt="demo" className='max-h-[600px] min-w-[700px] object-cover' />
            <div>
              <p className='text-green-700 font-extrabold'>FUNDING</p>
              <h1 className='text-[50px] font-extrabold font-georgia '>{state.title}</h1>
              <p className='text-2xl text-[#808191]'>Your Generosity Can Fuel a Movement – Donate Now and Make a Real Difference in the World.</p>
              <div className='flex gap-4 items-center m-6'>
                <div className='w-9 h-9  bg-[#e50f75] rounded-full '>
                  <img src={user} alt="user" className='p-2 px-2.5 ' />
                </div>
                <div>
                  <h2 className=' text-xl'>{state.name}'s</h2>
                  <p className='font-extralight text-[18px]'>campaign</p>
                </div>
              </div>

              <div className='flex justify-between'>
                <p className='text-2xl'> <b> {state.amountCollected.toString()}ETH </b>  </p>
                <p className='text-2xl'> <b>{donators.length}</b> backers</p>
              </div>
              <div className="relative w-full h-[10px]  rounded bg-[#3a3a43] mt-2">
                <div className="absolute h-full bg-[#4acd8d] rounded" style={{ width: `${calculateBarPercentage(state.target, state.amountCollected)}%`, maxWidth: '100%' }}>
                </div>
              </div>
              <div className='flex justify-between mt-2'  >
                <p className='text-2xl'> {calculateBarPercentage(state.target, state.amountCollected)}% of {state.target.toString()}ETH </p>
                <p className='text-2xl'> <b>{remainingDays}</b> days left</p>
              </div>

              <div isDisabled={isDisabled} className={`w-full my-4 text-white mb-[10px] border-0 px-10 text-[20px] py-4 bg-[#281439] rounded ${
                  isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'cursor-pointer'}  `}>
                <button type="button" 
                className={`w-full border-0 outline-0  ${
                  isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'cursor-pointer'} ` } 
                  isDisabled={isDisabled} onClick={() => setIsOpen(true)} >{buttonLabel}</button>
              </div>

           <ShareButton url={location.pathname} />
            </div>
          </div>

          <hr className='my-4 border-gray-300 border-t-4' />

        
      {address === state.owner &&  <CreateTier campaignId={state.pId} />}
         

          {address === state.owner && <hr className='my-4 border-gray-300 border-t-4' />}



          <div>
            <h1 className='text-4xl my-3'>Short summary</h1>
            
           

            <Link to={state.videoURL} target='_blank' className='py-4 text-[#E50F75] flex items-center gap-3'>
            <div 
      
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#FF0000',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.5)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <FaYoutube
        size={24}
        color="white"
        style={{
          pointerEvents: 'none',
        }}
      />
            </div>
           <p className='text-3xl font-extrabold'> WATCH IT ON YOUTUBE</p>
            </Link>

            <div className="w-full max-w-3xl ">
      <ReactPlayer url={state.videoURL} controls width="100%" />
    </div>

            <div className='flex'> 
              <div className={`${tiers.length > 0 ? "w-[50%] ": "w-full"}`}>
                <p style={{ whiteSpace: 'pre-line' }}>
                  {firstHalf}
                </p>

                <div className={`${tiers.length > 0 ? " ": "flex gap-2 flex-wrap"}`}>
                  {state.mediaFiles.map((url, i) => (
                    <img key={i} src={url} className='min-w-[600px]' />
                  ))}
                </div>

                <p style={{ whiteSpace: 'pre-line' }} >
                  {secondHalf}
                </p>
              </div>
              <div className={`${tiers.length > 0 ? "w-[50%] ": "w-full"} 
                max-w-[400px] max-h-[700px] overflow-y-scroll mx-3 ` }>
                    <TierList 
                    campaignId={state.pId} 
                    url={state.mediaFiles[0]}
                    user={address}
                    creator={state.owner} />
              </div>
            </div>

          </div>


          <hr className='my-12 text-gray-400' />
          <Link to={state.workProof} target='_blank'><p className='text-3xl text-[#E50F75] font-extrabold'>OFFICIAL DOCUMENTS</p></Link>
          <hr className='my-12 text-gray-400' />

          <div className='flex items-center gap-3 mb-6'>
            <h4 className=" font-epilogue font-semibold text-[18px]
         text-black uppercase">Creator:</h4>
            <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
              <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
                <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain" /> 
              </div>
              <div>
                <h4 className="font-epilogue font-semibold text-[14px] text-black break-all">{state.owner}</h4> <span>{state.name}</span>
              </div>
            </div>
          </div>

         

          <h2 className='font-epilogue font-semibold text-[18px] text-black uppercase mb-10'>Category: <span className='bg-gray-300 px-4 py-2 rounded-3xl font-epilogue font-semibold text-[13px] text-black uppercase"'>{state.category}</span> &nbsp;
            <span className='bg-gray-300 px-4 py-2 rounded-3xl font-epilogue font-semibold text-[13px] text-black uppercase"'>{state.subCategory}</span></h2>


          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-black uppercase">Donators:</h4>

            <div className="mt-[20px] flex flex-col gap-4">
              {donators.length > 0 ? donators.map((item, index) => (
                <div key={`${item.donator}-${index}`} className="flex justify-between items-center gap-4">
                  <p className="font-epilogue font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-ll">{index + 1}. {item.donator}</p>
                  <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] break-ll">{item.donation}</p>
                </div>
              )) : (
                <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">No donators yet. Be the first one!</p>
              )}
            </div>
          </div>


        </div>
       

        <MiniFooter />

        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          header={<p className="text-2xl font-bold text-red-400">Donate Now</p>}
          footer={<div className='flex justify-end'><button onClick={() => setIsOpen(false)} className='font-bold bg-slate-300 px-4 py-2 rounded'>cancel</button></div>}
        >
          <DonateSection
            campaignId={state.pId}
          />
        </Modal>

      </div>
    </>

  )
}

export default CampaignJankari