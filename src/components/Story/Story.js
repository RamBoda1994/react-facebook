import React from 'react'
import './Story.css';
import { Avatar } from '@material-ui/core';

function Story({ img, profileSrc, title }) {
    return (
        <div
            className="story"
            style={{ backgroundImage: `url(${img})` }}
        >
            <Avatar className="story__avatar" src={profileSrc} />
            <div className="title">
                <h4>{title}</h4>
            </div>
        </div>
    )
}

export default Story;
