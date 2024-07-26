import React from 'react'
import { Link } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { Star } from 'lucide-react';

// Import all images
import BrianDean from '../../assets/Brian_Dean.jpg';
import Crumb from '../../assets/Crumb.jpg';
import DrewBinsky from '../../assets/Drew_Binsky.jpg';
import FerdyKorpershoek from '../../assets/Ferdy_Korpershoek.jpg';
import InternetAnarchist from '../../assets/Internet_Anarchist.jpg';
import JoshBrett from '../../assets/Josh_Brett.jpg';
import MegaloMedia from '../../assets/Megalo_Media.jpg';
import Serpentaz from '../../assets/Serpentaz.jpg';
import ShawnP from '../../assets/ShawnP.jpg';
import TechShot from '../../assets/TechShot.jpg';
export default function Review() {

  const images = [
    BrianDean, Crumb, DrewBinsky, FerdyKorpershoek,
    InternetAnarchist, JoshBrett, MegaloMedia,
    Serpentaz, ShawnP, TechShot
  ];


  return (
    <div className='review-main'>
      <div className="review-content-one">
        <div className="review-top-conatiner">
          <div className="review-image-top">
            <FaUserCircle className='user-image' />
            <FaUserCircle className='user-image'/>
            <FaUserCircle className='user-image'/>
          </div>
          <div className="review-top-content">
            <div className="review-stars">
              <MdOutlineStar color='#FFD700' size={26}/>
              <MdOutlineStar color='#FFD700' size={26}/>
              <MdOutlineStar color='#FFD700' size={26}/>
              <MdOutlineStar color='#FFD700' size={26}/>
              <MdOutlineStar color='#FFD700' size={26}/>
            </div>
            <div className="review-text">
              Average review from 40+ clients
            </div>
          </div>
        </div>
      </div>
      <div className="review-content-two">
      <div className="review-marquee">
      {[...images, ...images].map((image, index) => (
            <img src={image} alt={`Review ${index}`} className="review-image" key={index} />
          ))}
      </div>
      </div>
    </div>
  )
}
