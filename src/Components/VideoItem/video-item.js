import React from "react";
import './video-item.scss';

let VideoItem = ({video, onVideoSelect}) => {
    return(
        <div className={'list-item'} onClick={()=>onVideoSelect(video)}>
            <img src={video.snippet.thumbnails.medium.url} alt="video image" className={'list-item__image'}/>
            <p className="list-item__header">{video.snippet.title}</p>
        </div>
    )
}

export default VideoItem;