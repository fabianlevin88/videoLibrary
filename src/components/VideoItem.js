import './videoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return(
        <div className="video-item item" onClick={() => {onVideoSelect(video)} } >
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
            <div>
                <img className="ui image" alt={video.snippet.description} src={video.snippet.thumbnails.medium.url} />
            </div>
        </div>

    )
}

export default VideoItem;