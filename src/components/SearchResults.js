import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './SearchResults.css';
import SearchResultElement from "./SearchResultElement";
import SearchResult from "../apis/SearchApi";

const SearchResults = () => {
  const [SearchApi, setSearchApi] = useState({ data: [] });

  const search = useLocation().search;
  const searchtext = new URLSearchParams(search).get('search');

  useEffect(() => {
    console.log(searchtext);
    if(searchtext){
      SearchResult(searchtext).then((data) => {
        setSearchApi(data);
        console.log(data)
      })
    }
  }, [searchtext])


  return (
    <div className='SearchResults'>
      {
        SearchApi && SearchApi.data.map((data, i) => {
          if (data.type === "video") {
            return <Link to={`/Youtube-Clone/video?videoid=${data.videoId}`}><SearchResultElement src={data.thumbnail[0].url} title={data.title} channel={data.channelTitle} views={data.viewCount} timeAgo={data.publishedTimeText} key={i} /> </Link>
          }
        })
      }

      {/* <SearchResultElement src="https://i.ytimg.com/vi/2oRlBmwKzy4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBplFSMpuEZuSJQLom_Ae6Tf7pgDA" title="The Kiffness X Alugalug Cat 2.0 (Please Go Away)" channel="The Kiffness" views="10548405" timeAgo="1 year ago" />

      <SearchResultElement src="https://i.ytimg.com/vi/2oRlBmwKzy4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBplFSMpuEZuSJQLom_Ae6Tf7pgDA" title="The Kiffness X Alugalug Cat 2.0 (Please Go Away)" channel="The Kiffness" views="10548405" timeAgo="1 year ago" />

      <SearchResultElement src="https://i.ytimg.com/vi/2oRlBmwKzy4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBplFSMpuEZuSJQLom_Ae6Tf7pgDA" title="The Kiffness X Alugalug Cat 2.0 (Please Go Away)" channel="The Kiffness" views="10548405" timeAgo="1 year ago" />

      <SearchResultElement src="https://i.ytimg.com/vi/2oRlBmwKzy4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBplFSMpuEZuSJQLom_Ae6Tf7pgDA" title="The Kiffness X Alugalug Cat 2.0 (Please Go Away)" channel="The Kiffness" views="10548405" timeAgo="1 year ago" /> */}

    </div>
  )
}

export default SearchResults