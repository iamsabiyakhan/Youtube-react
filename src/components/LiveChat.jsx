import React, { useState,useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName,makeRandomMessage } from '../utils/helper'

const LiveChat = () => {
  const [LiveChat, setLiveChat] = useState([])
  const chatMessages = useSelector((store) => store.chat.message)
  const dispatch = useDispatch()

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(10),
        })
      )
    }, 2000)

    // 🧹 Cleanup interval when component unmounts
    return () => clearInterval(interval)
  }, [dispatch])

  return (
    <>
      <div>
        <div className="ml-2 p-2 w-full h-[415px] border border-gray-500 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form 
        className='w-full p-2 ml-2 border border-black'
        onSubmit={(e)=>{e.preventDefault()
          dispatch(addMessage({
              name:"sabiyakhan",
              message:LiveChat,
            }));
          setLiveChat("")}}
        >
        <input
         className=' px-2 w-50'
         type="text" 
        value={LiveChat} 
        onChange={(e)=>{setLiveChat(e.target.value)
        

        }}
       
        />
        <button className='px-2 mx-2 bg-green-100'>Send</button>
      </form>
    </>
  )
}

export default LiveChat
