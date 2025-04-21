import React from 'react'
import CustomButton from './CustomButton'

import { FaFacebook,FaGithub,FaWhatsapp, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-[#1f0733] text-white '>
      <div className='flex mb-20 flex-col justify-center items-center mx-[100px]'>
        <h2 className='text-4xl mt-[80px] mb-[40px]'>Get the newest campaigns in your inbox</h2>
        <h3 className='text-xl mb-[20px] '>Exclusive weekly updates with new products, drops, and special offers</h3>
        <div className='w-full mb-[10px] border-0 px-10 text-[20px] py-4 bg-[#4c385c] rounded '>
          <input type="text" placeholder='enter your email' className='w-full border-0 outline-0' />
        </div>
        <div className='w-full mb-2 border-0 px-10 text-[20px] py-4 bg-[#e50f75] rounded '>
          <button type="text" placeholder='enter your email' className='w-full border-0 outline-0' >SIGN ME UP</button>
        </div>
        <p className='text-[14px]'>By clicking <b>“Sign me up”</b> I have read and agree to BlockFund's <u>Terms of Use</u> and <u>Privacy Policy </u>.
        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
        
      </div>

      <hr className='border-t-4 w-[75%] mx-auto border-[#2a133d]' />

    <div className='flex justify-between mt-10 pb-10 gap-4 mx-20  flex-wrap'>

      <div className=' gap-20 flex flex-col max-w-[70%] '>
       <p className='text-xl mb-4'>Supporting needed, creators and creative communities since 2025</p>
       <div>
        <p className='text-[20px] mb-3.5'>Follow us: </p>
        <div className="flex space-x-6">
          <a href="https://www.facebook.com/Anirudhakolay/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 text-2xl">
            <FaFacebook />
          </a>
          <a href="https://github.com/AmandeepGuggi" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 text-2xl">
            <FaGithub />
          </a>
          <a href="https://x.com/anirudha_kolay" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-500 text-2xl">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/anirudha_kolay/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-600 text-2xl">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/amandeep-guggi-a128a6347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 text-2xl">
            <FaLinkedin />
          </a>
        </div>
       </div>
      </div>

      <div>
        <h2 className='text-xl mb-4'>DISCOVER</h2>
        <ul>
          <li>Top-Funded Campaigns</li>
          <li>Tech & Innovation</li>
          <li>Creative Campaigns</li>
          <li>Community & Culture</li>
        </ul>
      </div>

      <div>
        <h2 className='text-xl mb-4'>LAUNCH</h2>
        <ul>
          <li>Start A Campaigns</li>
          <li>Experts Directory</li>
          <li>Enterprise</li>
          <li>India</li>
        </ul>
      </div>

      <div>
        <h2 className='text-xl mb-4'>Learn</h2>
        <ul>
          <li>How it works</li>
          <li>Education Center</li>
          <li>What is Crowdfunding</li>
          <li>Trust and safety</li>
        </ul>
      </div>

      <div>
        <h2 className='text-xl mb-4'>CONTACT</h2>
        <ul>
          <li>Help & support</li>
          <li>Press</li>
          <li>Careers</li>
          <li>Get in Touch</li>
        </ul>
      </div>
     
    </div>

    <hr className='border-t-4 w-[75%] MB-4 mx-auto border-[#2a133d]' />

    <h1 className=' md:text-[160px] text-[100px] font-extrabold font-stretch-condensed text-[#e50f75] text-center '>BLOCKFUND</h1>

    </div>
  )
}

export default Footer