import React from 'react';
import Showcase from '../../assets/Showcase.mp4'; // Adjusted the path
import { Link } from "react-router-dom";
import Review from '../Review/Review';
import PopularWork from '../PopularWork/PopularWork';

export default function Home() {
  return (
    
    <div className="flex-col mt-2 justify-center">

    <div className="video">
        
        <video autoPlay loop muted className="rounded-2xl w-2/3 border-2 border-solid shadow mx-2 my-2">
            <source src={Showcase} type="video/mp4" />
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
    <Review />
    <PopularWork /> 
    </div>
  );
}
