import React from 'react';

const VideoSection: React.FC = () => {
    return (
        <div className="w-screen h-screen bg-textYellow relative">
            <iframe
                src="https://player.vimeo.com/video/1017555522?muted=1&autoplay=1&loop=1&background=1&app_id=122963"
                // width="240"
                // height="424"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="g la dalle burger's"
                data-ready="true"
                className=" w-full h-full elementor-background-video-embed"
                // style={{ width: '862px', height: '1522.87px' }}
            ></iframe>
        </div>
    );
};

export default VideoSection;