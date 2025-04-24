import React from 'react'
import { Outlet } from 'react-router'
import Header from './staticComponents/Header'
import Crowdfunding from './staticPages/Crowdfunding'

const Explore = () => {
  return (
   <>
    <Header />
    <Outlet />
   </>
  )
}

export default Explore