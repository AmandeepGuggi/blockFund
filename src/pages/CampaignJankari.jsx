import React, {useState, useEffect} from 'react'
import { demo, user } from '../assets'
import MiniFooter from '../components/MiniFooter'

import { useLocation, useNavigate } from 'react-router';
import { ethers } from 'ethers';
import { useStateContext } from '../context';
import { CountBox, CustomButton, Loader } from '../components';
import { calculateBarPercentage, daysLeft } from '../utils';
import { thirdweb } from '../assets';

const CampaignJankari = () => {
   const { state } = useLocation();
   console.log(state);
    const navigate = useNavigate();
    const { donate, getDonations, contract, address } = useStateContext();
  
    const [isLoading, setIsLoading] = useState(false);
    const [amount, setAmount] = useState('');
    const [donators, setDonators] = useState([]);
  
    const remainingDays = daysLeft(state.deadline);
  
    // const fetchDonators = async () => {
    //   const data = await getDonations(state.pId);
    //   setDonators(data);
    // }
  
    // useEffect(() => {
    //   if(contract) fetchDonators();
    // }, [contract, address])
  
    // const handleDonate = async () => {
    //   setIsLoading(true);
  
    //   await donate(state.pId, amount); 
  
    //   navigate('/')
    //   setIsLoading(false);
    // }

    const [firstHalf, secondHalf] = [
      state.description.slice(0, Math.floor(state.description.length / 2)),
      state.description.slice(Math.floor(state.description.length / 2)),
    ];
  
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
                <p className='text-2xl text-[#808191]'>Help us create a new little indie bookshop, mostly for kids, in Lexington KY.</p>
                <div className='flex gap-4 items-center m-6'>
                    <div className='w-9 h-9  bg-[#e50f75] rounded-full '>
                        <img src={user} alt="user" className='p-2 px-2.5' />
                    </div>
                    <div>
                        <h2 className=' text-xl'>Jill Bastin</h2>
                        <p className='font-extralight text-[18px]'>1 Campaign | Lexington, United States</p>
                    </div>
                </div>

            <div className='flex justify-between'>
                <p className='text-2xl'> <b>₹151,174</b> INR </p> 
                <p className='text-2xl'> <b>5</b> backers</p>
            </div>
                   <div className="relative w-full h-[10px] rounded bg-[#3a3a43] mt-2">
                            <div className="absolute h-full bg-[#4acd8d] rounded" style={{ width: '3%', maxWidth: '100%'}}>
                            </div>
                  </div>
            <div className='flex justify-between mt-2'  >
                <p className='text-2xl'> 3% of ₹4,299,596 </p> 
                <p className='text-2xl'> <b>36</b> days left</p>
            </div>

            <div className='w-full my-4 text-white mb-[10px] border-0 px-10 text-[20px] py-4 bg-[#281439] rounded '>
          <button type="button"  className='w-full border-0 outline-0' >Fund Now</button>
          </div>

            </div>
        </div>

        <hr className='my-4 border-gray-300 border-t-4'/>

        <div>

          <h1 className='text-4xl my-3'>Short summary</h1>
        <p style={{ whiteSpace: 'pre-line' }}>
  {firstHalf}
</p>

<div className="flex gap-1.5 flex-wrap">
{state.mediaFiles.map((url)=>(
   <img src={url} alt="" />
))}
</div>
    {/* <img src={state.mediaFiles[0]} alt="" /> */}

    <p style={{ whiteSpace: 'pre-line' }} >
      {secondHalf}
    </p>
      
        </div>
        <hr className='my-12 text-gray-400' />

      <h2 className='text-[20px] mb-10'>Category: <span className='bg-gray-300 px-4 py-2 rounded-3xl'>{state.category}</span> &nbsp;
      <span className='bg-gray-300 px-4 py-2 rounded-3xl'>{state.subCategory}</span></h2>

       </div>

        <MiniFooter />

    </div>
   </>
  
  )
}

export default CampaignJankari