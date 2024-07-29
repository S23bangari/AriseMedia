import React from 'react';
import Showcase from '../../assets/Showcase.mp4'; 

export default function Shortvideo() {
  return (
    <div className='shortvideo-container'>
      <div className='relative bg-neutral-950 '>
      <div className='shortvideo-header  text-stroke '>
        SHORT<span className='short-text '>VIDEOS</span> 
        </div>
        <div className='video-grid'>
          <div className="video-grid-part-one">
        <video autoPlay loop muted className="video-display-short">
            <source src={Showcase} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>

        <video autoPlay loop muted className="video-display-short">
            <source src={Showcase} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        </div>
        <div className="video-grid-part-two">
        <video autoPlay loop muted className="video-display-short">
            <source src={Showcase} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>

        <video autoPlay loop muted className="video-display-short">
            <source src={Showcase} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        </div>
        </div>
      </div>
    </div>
  )
}
