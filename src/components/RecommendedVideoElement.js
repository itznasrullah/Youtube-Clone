import './RecommendedVideoElement.css'

const RecommendedVideoElement = (props) => {
    return (
        <div className='RecommendedVideoElement'>
            <img className='search-video' src={props.src} alt={props.title} />
            <div className='title-views-ago'>
                <p className='Video-title'>{props.title}</p>
                <p className='Video-channel'>{props.channel}</p>
                <div className='Views-TimeAgo'>
                    <p>{props.views}</p>
                </div>
            </div>
        </div>
    )
}

export default RecommendedVideoElement