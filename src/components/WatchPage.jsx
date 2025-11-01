import React from 'react'
import { closeMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
const WatchPage = () => {
    const [searchParams] = useSearchParams();
    // console.log(searchParams.get("v"));
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (
    <div>
        <iframe
         width="900"
         height="415" 
         src={`https://www.youtube.com/embed/${searchParams.get("v")}`} 
         title="YouTube video player"
         frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage