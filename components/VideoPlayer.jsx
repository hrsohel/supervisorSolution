import React from 'react';

const VideoPlayer = ({id}) => {
    return (
        <>
            <video 
                src={`../videos/${id}`}
                width="100px"
                height="auto"
                controls
                id='video-player'
            />
        </>
    );
};

export default VideoPlayer;