import React from 'react';

const VideoPlayer = ({ video }) => {
    if(!video) {
        return <div></div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div>
            <div className="ui segment">
                <h3 className="ui header">{video.snippet.title}</h3>
                <div className="ui embed">
                    <iframe allowfullscreen="allowfullscreen" title="video player" src={videoSrc} />
                </div>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
    
}

export default VideoPlayer;