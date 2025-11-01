import React from 'react'

const VideoCard = ({ info }) => {
    // console.log("i am video card",info);
    const {snippet,statistics} = info;
    const {title,channelTitle,thumbnails} = snippet;

  return (
    
    <div className='p-2 m-2 w-60 shadow-lg '>
       <img 
       className='rounded-lg'
       src={thumbnails?.medium?.url} alt={title} />
        <ul>
            <li className='font-bold text-sm py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics?.viewCount} views</li>

        </ul>
    </div>
  )
}

export default VideoCard

// Higher Order Component
export const AdVideoCard = ({info})=>{
   if (!info) {
        return null;
    }
 return (
    <div className=' w-65 shadow-lg border border-red-500'>
      <VideoCard info={info}/>
      </div>
 )
}