import React from 'react'
import { Link } from 'react-router'

const Card = ({imgUrl, title, description, link}) => {
  return (
        <Link to={link}>
            <div className='flex hover:border-1 bg-white flex-col min-h-[340px]  hover:-translate-y-2 transition-transform delay-300 min-w-[300px]  max-w-[300px] shadow-sm'>
        <div className='text-center mx-auto'>
            <img className='max-w-[100px] pt-10' src={imgUrl} alt="" />
        </div>
        <div className='min-h-[50%] pt-8 pb-3 text-center'>
            <h2 className='font-bold pb-4'>{title}</h2>
            <p className='font-extralight pb-4 text-black/70 px-3 '>{description}</p>
            <p className='text-[#E50F74] hover:underline'>Learn more</p>
        </div>
    </div>
        </Link>
  )
}

export default Card