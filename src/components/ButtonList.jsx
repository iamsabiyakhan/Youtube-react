import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = ['All', 'Music', 'Sports', 'Gaming', 'News', 'Movies', 'Live', 'Fashion', 'Learning', 'Spotlight', '360° Video']
  return (
    <div className='flex '>
      {list.map((items)=><Button key={items} name={items} />)}
      
    </div>
  )
 
}

export default ButtonList