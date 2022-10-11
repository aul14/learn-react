import React from "react";
import './YouTubeComp.css';

const YouTubeComp = (props) => {
    return(
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://source.unsplash.com/500x400/?Web Programming" alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YouTubeComp.defaultProps = {
    time: '00.00',
    title: 'Default Learn React Part',
    desc: 'Default Testing'
}

export default YouTubeComp;