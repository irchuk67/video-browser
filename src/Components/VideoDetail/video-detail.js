import React from "react";
import './video-detail.scss';

let VideoDetail = ({video}) => {
    if(!video){
        return <div>Loading...</div>
    }
    return(
        <div className={'video-detail'}>
            <iframe className={'video-detail__video'} src={`https://www.youtube.com/embed/${video.id.videoId}`}/>
            <div className={'video-detail__content'}>
                <h2 className={'video-detail__heading'}>{video.snippet.title}</h2>
                <p className={'video-detail__detail'}>{video.snippet.description}</p>
            </div>
        </div>
    )
}
export default VideoDetail;