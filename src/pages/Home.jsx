import React, { useState, useEffect, useRef } from 'react'
import HeroSection from '../components/HeroSection';
import { left, right, loader } from '../assets';
import { solarSystem, demo } from '../assets';
import {CustomButton, Carousel, FundCard, Footer, DisplayCampaigns} from '../components';
import { useNavigate } from 'react-router';
import { useStateContext } from '../context';
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
    const [campaigns, setCampaigns] = useState([])
 const { connect, address, contract, getCampaigns } = useStateContext();
  const scrollRef = useRef(null);

    const fetchCampaigns = async () => {
      setIsLoading(true)
      const data = await getCampaigns();
      setCampaigns(data)
      setIsLoading(false)
    }
  
    useEffect(()=>{
      if(contract) fetchCampaigns();
    }, [address, contract])
  

  function toggle(i){
    if(selected === i){
      return setSelected(null)
    }
    setSelected(i)
}
  
const slides = [
 {
  src:"https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,g_center,q_auto,f_auto,w_1001/mlmeyqop7fxsvjjz8ipv.png",
  info: "Mentorship in Robotics: Empowering the next generation of innovators"
 },
 {
  src:"https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,g_center,q_auto,f_auto,w_1001/uabd5clnsctl1vziphcl.jpg",
  info: "Nature’s wonders: Where animals inspire curiosity and learning."
 },
 {
  src:"https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,g_center,q_auto,f_auto,w_1001/tpkbkoudhggwxabbzf7p.jpg",
  info: "Above it all: Capturing new perspectives with cutting-edge drone technology."
 },
 {
  src:"https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,g_center,q_auto,f_auto,w_1001/ujgrcgnjvfhwd7c2tkc7.jpg",
  info: "Time at your fingertips: Seamlessly blending style and technology."
 },
 {
  src:"https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,g_center,q_auto,f_auto,w_1001/ujgrcgnjvfhwd7c2tkc7.jpg",
  info: "Time at your fingertips: Seamlessly blending style and technology."
 },
 
]
  
const handleNavigate = (campaign) => {
  navigate(`/campaign-details/${campaign.pId}`, { state: campaign })
}
  return (
    
    <>
    <div className='min-w-full z-1'>
      <Carousel AutoSlide={true} >
      {
        slides.map((s, i) => (
         <div key={i} className='w-full object-cover min-w-full relative'>
          <img  width='100%' className='w-full object-cover min-w-full z-10 ' src={s.src} />
          <h1 className='absolute font-serif min-w-[500px] w-[800px] text-[60px] z-20  top-3/6 left-1/10 transform  text-purple-500 font-bold'>{s.info}</h1>
         </div>
        ))
      }
      </Carousel>
    </div>


   <section className='mx-[50px]'>
   <div className='mt-[100px]   flex justify-between items-center'>
      <h2 className='text-5xl font-extrabold'>Popular Campaigns</h2>

     
    </div>

    <div className='mt-[50px] overflow-x-auto flex gap-[30px]'>
    <div className="flex overflow-x-auto mt-[20px] gap-[26px]">
        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campigns yet
          </p>
        )}

        {!isLoading && campaigns.length > 0 && campaigns.reverse().map((campaign) => 
        <FundCard 
          key={uuidv4()}
          {...campaign}
          handleClick={() => handleNavigate(campaign)}
        />)}
 
      </div>
      </div >
      <div className='flex justify-center items-center'>

      <button onClick={()=> navigate("all-campaigns")} className='border border-1 px-10 py-3 mt-[50px] mb-[50px] rounded text-2xl border-gray-300 hover:bg-gray-300'> Explore all Campaigns</button>
      </div>

   </section>

   <hr className='border-gray-300 mb-[30px] '  />

   <section className='mx-[50px]'>
   <div id='how-it-works' className = 'text-[#4b5264]' >
             <h2 className='text-4xl mb-9 text-center'>
             How Crowdfunding Works on Our Blockchain Platform 
             </h2>
             <p className='mb-10' >Let us assume an individual, unfortunately, meets with an accident on the road. His medical expenses and hospital bills start piling up. Now he needs 2.13ETH (₹5 Lakh) to pay his expensive medical bills. Fortunately, his best friend signed up on Ketto’s crowdfunding platform, completed the process of submitting valid documents needed for verification. In a few minutes, he created a crowdfunding campaign to raise funds for his friend’s medical expenses. Now, this campaign can be shared with all his near and dear ones through WhatsApp, Instagram, Twitter, Facebook and E-mail. In a matter of few minutes, funds start coming in to support the financial needs of the injured friend.</p>


             <div>
            <h2 className='text-3xl mb-5' >Start a campaign in three simple steps</h2>
            <div className='flex justify-around ' >
                <div>
                    <img src="https://ketto.gumlet.io/assets/images/homepage/sac-separator.png?dpr=1.0&amp;q=70&amp;w=100" alt="img" />
                </div>
                <div className='flex flex-col justify-between' >
                    <div>
                        <h4 className='text-[#4acd8d] mb-1.5'>Start your campaign</h4>
                        <p>It’ll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.</p>
                    </div>
                    <div >
                        <h4 className='text-[#4acd8d] mb-1.5'>Share your fundraiser</h4>
                        <p>All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.</p>
                    </div>
                    <div >
                        <h4 className='text-[#4acd8d] mb-1.5'>Withdraw Funds</h4>
                        <p>The funds will be directly transferred from donar to your account</p>
                        <span className='text-[#4444] text-[14px]'> It will take some time to ETH arrive in your account</span>
                    </div>
                    
                </div>
                <div>
                
                </div>
               
            </div>
             </div>

                <div className='text-center mt-10' >

            <CustomButton 
            btnType="button"
            title="Start a Campaign " 
            handleClick={()=> {
                navigate('/form')
            }} 
             styles=" bg-[#4acd8d] hover:translate-y[-4px] min-w-[300px] mb-[70px] " 
            />
                </div>


       

                
            
        </div>
   </section>

    <Footer />
   
    
    </>
  )
}


const faqData = [
  {
      id: 1,
      question: "How do I raise funds?",
      answer: "To raise funds, you need to connect your crypto wallet to our platform. Once connected, fill out the campaign creation form with details such as title, description, target amount, deadline, and an image to represent your cause. After submitting, your campaign will go live, allowing people from around the world to donate securely using blockchain technology. You can share your campaign link across social media platforms to attract more backers."
  },
  {
      id: 2,
      question: "Can I raise funds for a friend as well?",
      answer: "Yes, absolutely! Our platform allows you to raise funds not just for yourself but also for your friends, family, or even a social cause you believe in. While creating the campaign, simply enter the wallet address of the person you want the funds to go to. This way, all donations received will be automatically transferred to their wallet, ensuring full transparency and security."
  },
  {
      id: 3,
      question: "Does the raised amount reach the individual directly?",
      answer: "Yes, all funds raised through our platform go directly to the wallet address specified by the campaign creator. Since we utilize blockchain technology, there are no intermediaries, which means reduced transaction fees and no delays in fund transfers. Additionally, all transactions are recorded on the blockchain, making it easy to track the flow of donations and ensuring that every contribution reaches the intended recipient without any risk of mismanagement."
  },
  {
      id: 4,
      question: "How long does a campaign remain active?",
      answer: "The duration of a campaign is set by the campaign creator during its creation. A campaign remains active until the specified deadline is reached or the target amount has been fulfilled. If the deadline passes and the campaign has not met its goal, it will automatically be marked as expired. However, if the goal is reached before the deadline, the campaign status updates to 'Fulfilled,' and no further donations will be accepted."
  },
  {
      id: 5,
      question: "Is it safe to donate?",
      answer: "Yes, donating through our platform is completely safe. We use blockchain technology to ensure all transactions are secure, transparent, and immutable. Once a donation is made, it is recorded on the blockchain, making it impossible to alter or manipulate. Additionally, since funds are sent directly to the recipient's wallet, there is no risk of third-party interference. We also recommend verifying the legitimacy of campaigns before donating by checking their details, updates, and any proof of work provided by the campaign owner."
  }
];


export default Home