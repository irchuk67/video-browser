import React from "react";
import VideoItem from "../VideoItem/video-item";
import './video-list.scss';

let VideoList = ({videos, selectVideo}) => {
    let videoArr = videos.map((video) =>{
        return <VideoItem video={video} onVideoSelect={selectVideo}/>
    })
    return(
        <div className={'video-list'}>
            {videoArr}
        </div>
    )
}

export default VideoList