import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './Video.css';
import VideoApi from "../apis/VideoPlayApi";
import RelatedApi from "../apis/RelatedVideoApi";
import RecommendedVideoElement from "./RecommendedVideoElement";

const Video = () => {
  const [videoVal, setVideoVal] = useState();
  const [RelatedVideo, setRelatedVideo] = useState();
  
  const search = useLocation().search;
  const videoId = new URLSearchParams(search).get('videoid');
  
  useEffect(() => {
    console.log(videoId);
    VideoApi(videoId).then((data) => {
        setVideoVal(data);
        console.log(data);
    })

    RelatedApi(videoId).then((data) => {
        setRelatedVideo(data);
        console.log(data);
    })

  }, [videoId])

  return (
    <div className='Video'>
      {
        videoVal && <div className='video-container'>
          <iframe className='video-player' autoplay src={videoVal.formats[videoVal.formats.length - 1].url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <p className='video-play-title'>{videoVal.title}</p>
          <p className='video-play-views'>{videoVal.viewCount} views</p>
          <div className='video-play-channel'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2V3ynaT18VgjH2uGddnhnQQaa_OT6nzEOtw&usqp=CAU" alt="" />
            <p className='video-play-channel-title'>{videoVal.channelTitle}</p>
          </div>
        </div>
      }

      <div className='recommended-Video'>
        {
          RelatedVideo && RelatedVideo.data.map((data, i) => {
            return <Link to={`/video?videoid=${data.videoId}`}> <RecommendedVideoElement src={data.thumbnail[data.thumbnail.length - 1].url} title={data.title} channel={data.channelTitle} views={data.viewCount} key={i} /> </Link>
          })
        }
      </div>

    </div>
  )
}

export default Video