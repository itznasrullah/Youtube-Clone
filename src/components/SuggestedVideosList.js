import { Link } from "react-router-dom";
import './SuggestedVideosList.css'
import SuggestedVideo from "./SuggestedVideo";
import SuggestedVideoApi from "../apis/SuggestedVideosApi";

const SuggestedVideosList = () => {
  return (
    <div className="SuggestedVideosList">
      <div className='AllVideoElement'>
        {
          SuggestedVideoApi ? (SuggestedVideoApi.data.map((data, i) => {
            if (data.type === "video") {
              return <Link to={`/video?videoid=${data.videoId}`}> <SuggestedVideo src={data.thumbnail[2].url} title={data.title} channel={data.channelTitle} views={data.viewCount} timeAgo={data.publishedTimeText} key={i} /> </Link>
            }
          })) : ""
        }

      </div>
    </div>
  )
}

export default SuggestedVideosList