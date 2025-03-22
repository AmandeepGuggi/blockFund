import React from 'react'
import { demo, user } from '../assets'
import MiniFooter from '../components/MiniFooter'

const CampaignJankari = () => {
  return (
    <div >
       <div className='m-4 mx-10'>
       <div className='flex gap-5'>
            <img src={demo} alt="demo" />
            <div>
                <p className='text-green-700 font-extrabold'>FUNDING</p>
                <h1 className='text-[50px] font-extrabold font-georgia '>Help us open Wildlings Bookshop!</h1>
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
                            <div className="absolute h-full bg-[#4acd8d] rounded" style={{ width: '80%', maxWidth: '100%'}}>
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
            <h1 className='text-3xl mb-4'>Short Summary</h1>
            <p className='font-extralight'>
            Wildlings Bookshop is a new bookshop, mostly for kids, that is inspired by a love of nature, art, dreaming, and everyday magic. With your help, we are bringing this lovely little indie bookstore dream to the cozy Kenwick neighborhood and its bungalows, busy sidewalks, and nearby schools, shops, and restaurants. 
            </p> <br />
            <p className='font-extralight'>We believe that our communities need more places for kids, more bookshops, and more children’s books! Our mission is to highlight different voices and perspectives and connect with our community, sharing tales of kindness, acceptance, curiosity, creativity, and fun. </p>
          <br />  <p className='font-extralight'>Our collection of books, paper goods, toys, art kits, and supplies for creating colorful crafts is picked to encourage new adventures. We plan to partner with other local groups doing things we believe in and focusing on the things we love: reading, making, art, music, movement, and play. We also plan to have kid snacks, coffee and tea, gift wrapping, and lots of things to add fun and ease to your days. 

</p>
          <br />  <p className='font-extralight'>And most of all, we want to give this community a welcoming space for kids and their grown-ups that will be a beacon of light and positivity in our community, for the littlest among us to stop on their little daily journeys and find some everyday magic. </p>

          <img src="https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,g_center,q_auto,f_auto,w_695/g7how7zsvncnoqypgzmb.png" alt="" />

          <h1 className='text-3xl mb-4'>The Impact</h1>
            <p className='font-extralight'>Why are we doing this?</p>
         <br /> <p className='font-extralight'>
          <b>Children's books are magic! </b> They tackle things like how to just be in this world. With imagination and love and open hearts and minds. They remind us as adults that we were once learning how to maneuver our way through lives. Still are. Books define our childhoods, and they're infinitely better held in little hands rather than on a screen.
          </p>
         <br /> <p className='font-extralight'>
         <b> We need more places for kids!</b> With our own wildlings in tow, we believe that we need more welcoming places in our community where kids are celebrated. Parents and caregivers need this too; casual spaces that can easily fit within the rhythms of our daily life. 


          </p><br />
          <p className='font-extralight'>
         <b>We need more bookshops! </b> Indie bookshops create community, resist censorship, and keep money out of the pockets of billionaires and instead back into our communities. Bookshops pull us out of our busy worlds for a few minutes to take a breath, meet up with friends, chat about lovely books, find something unexpected, find a sweet gift. They also get us out of the house for events that bring us together for more stories, more dreaming, and play!


          </p> <br />
          <p className='font-extralight'>
          Wildlings Bookshop will give us a place to step out of our busy lives, get together for some silliness, some coziness, some new adventures. So let's slow down for a minute. Let's build this space together. Let's chat with coffee and kid snacks over delightful illustrations and unexpected storytelling and crafty art supplies and paper goods and all of those simple things that make our world beautiful. Let's find some gem of a toy for your "forever" collection.
          </p>

        </div>
       </div>

        <MiniFooter />

    </div>
  )
}

export default CampaignJankari