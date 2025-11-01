import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
   const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)

  if(!isMenuOpen) return null;
  return (
    <div className='col-span-1'>
       <div>
        <Link to="/"><h1>home</h1></Link>
      <h1 className='font-bold text-lg'>subscription</h1>
      <ul>
        <li>movie</li>
        <li>music</li>
        <li>sports</li>
      </ul>
      <h1 className='font-bold text-lg'>Trending</h1>
      <ul>
        <li>trending video 1</li>
        <li>trending video 2</li>
        <li>trending video 3</li>
      </ul>
      <h1 className='font-bold text-lg'>Recommended</h1>
      <ul>
        <li>recommended video 1</li>
        <li>recommended video 2</li>
        <li>recommended video 3</li>
      </ul>
      <h1 className='font-bold text-lg'>Watch Again</h1>
      <ul>
        <li>watch again video 1</li>
        <li>watch again video 2</li>
        <li>watch again video 3</li>
      </ul>
    </div>
    </div>
  )
}

export default Sidebar
