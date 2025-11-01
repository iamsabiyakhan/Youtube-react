import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
const Body = () => {
  return (
    <div className='grid grid-flow-col gap-4 px-4'>
      <Sidebar />
     <Outlet/>
    </div>
  )
}

export default Body