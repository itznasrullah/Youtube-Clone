import './SearchResultElement.css';

const SearchResultElement = (props) => {
  return (
    <div className='SearchResultElement'>
        <img className='search-video' src={props.src} alt={props.title} />
        <div className='title-views-ago'>
            <p className='Video-title'>{props.title}</p>
            <div className='Views-TimeAgo'>
                <p>{props.views}</p>
                <p>{props.timeAgo}</p>
            </div>
            <p className='Video-channel'>{props.channel}</p>
        </div>
    </div>
  )
}

export default SearchResultElement