import React from 'react';
import Showcase from '../../assets/Showcase.mp4'; 
import { Link } from "react-router-dom";
import Review from '../Review/Review';
import PopularWork from '../PopularWork/PopularWork';
import Shortvideo from '../ShortVideo/Shortvideo';

export default function Home() {
  return (
    
    <div className="flex-col mt-2 justify-center">

    <div className="video">
        
        <video autoPlay loop muted className="video-display">
            <source src={Showcase} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    </div>

    <div className='button-hero'>

    <Link
          to="https://calendly.com/info-rendergfx/consultation"
        >
        <button className='book-now-button'>Book now</button>
    </Link>

        <Link
          to="/OurWork"
        >
          <button className='our-work-button'>Our work</button>
        </Link>
    </div>
    <div className="next-content bg-neutral-950 ">
    <Review />
    <PopularWork /> 
    <Shortvideo/>
    </div>
    </div>
  );
}
