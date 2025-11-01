import React from 'react'

const Button = ({name}) => {
  return (
    <div className='m-2'>
        <button className='p-2 border rounded bg-gray-200 border-gray-200'>{name}</button>
    </div>
  )
}

export default Button