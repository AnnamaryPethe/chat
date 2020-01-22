import React from 'react';
import video from '../src/video/background.mp4'
import video2 from '../src/video/background2.mp4'

export default {
    title: 'Background',
};

const dashboard_background_video = {
    src: video,
};

const chat_background_video = {
    src: video2
};


export const dashboard_background = () => (
    <video id="background-video" loop autoPlay>
        <source src={dashboard_background_video.src} type="video/mp4"/>
    </video>
);

export const chat_background = () => (
    <video id="background-video" loop autoPlay>
        <source src={chat_background_video.src} type="video/mp4"/>
    </video>
)


