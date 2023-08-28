import './SuggestedVideo.css';

const SuggestedVideo = (props) => {
  return (
    <div className="SuggestedVideo">
        <img className='video' src={props.src} alt={props.title} />
        <p className='Video-title'>
          {props.title.slice(0, 60)}
        </p>
        <p className='Video-channel'>{props.channel}</p>
        <div className='Views-TimeAgo'>
            <p>{props.views}</p>
            <p>{props.timeAgo}</p>
        </div>
    </div>
  )
}

export default SuggestedVideo