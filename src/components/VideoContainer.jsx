import React, { useEffect ,useState} from 'react'
import { YOUTUBE_KEY } from '../utils/constants';
import VideoCard  from './VideoCard';
import { Link } from 'react-router-dom';
import { AdVideoCard } from './VideoCard';
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
 useEffect(()=>{
     getVideo();
 },[])

 const getVideo = async()=>{
  let data = await fetch(YOUTUBE_KEY);
  let json  = await data.json();
  // console.log("i am youtube api",json.items);
  setVideos(json.items);
 }
  return (
    <div className='flex flex-wrap '>
      <AdVideoCard info={videos[0]} />
     {videos.map((video)=><Link to={`/watch?v=${video.id}`}><VideoCard key={video.id} info={video}/></Link>)}
    </div>
  )
}

export default VideoContainer