import React from 'react';
import SIDEMEN from '../../assets/SIDEMEN.mp4'
import MagnatesMedia_1 from '../../assets/MagnatesMedia_1.mp4'
import MagnatesMedia_2 from '../../assets/MagnatesMedia_2.mp4'
import Techno_Gamerz  from '../../assets/Techno_Gamerz.mp4'
import VisualVenture from '../../assets/Visual Venture.mp4'
import INTERNET_ANARCHIST_1 from '../../assets/INTERNET_ANARCHIST_1.mp4'
import INTERNET_ANARCHIST_2 from '../../assets/INTERNET_ANARCHIST_2.mp4'
import CRUMB from '../../assets/CRUMB.mp4'
import TechShot from '../../assets/TechShot.mp4'


export default function PopularWork() {
  return (
    <div className="pw-main">
      <div className="pw-header">
        <span className='popular-work-text'>Some of Our Popular Work</span>
      </div>
      <div className="card-grid">
        <div className="video-box">
          <video autoPlay loop muted className="video-cards">
            <source src={SIDEMEN} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="name">
            <span className='yt-name'>@Sidemen</span>
            <div className="sub-view-text">
              <span className="subs">12M Subscribers</span>
              <span className="views">520M Views</span>
            </div>
          </div>
        </div>
        <div className="video-box">
          <video autoPlay loop muted className="video-cards">
            <source src={MagnatesMedia_1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="name">
            <span className='text-2xl bg-transparent absolute bottom-24 right-10'>@MagnatesMedia</span>
            <div className="sub-view-text">
              <span className="subs">1.55M Subscribers</span>
              <span className="views">6.7M Views</span>
            </div>
          </div>
        </div>
        <div className="video-box">
          <video autoPlay loop muted className="video-cards">
            <source src={Techno_Gamerz} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="name">
            <span className='text-2xl bg-transparent absolute bottom-24 right-16'>@TechnoGamerz</span>
            <div className="flex justify-center gap-1 mt-1 text-white bg-transparent  relative bottom-16 right-4">
              <span className="subs">41.5M subscribers</span>
              <span className="views">5.8 Million Views</span>
            </div>
          </div>
        </div>
        {/* Add more video-box divs as needed */}
        <div className="video-box">
          <video autoPlay loop muted className="video-cards">
            <source src={MagnatesMedia_2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="name">
            <span className='text-2xl bg-transparent absolute bottom-24 right-10'>@MagnatesMedia</span>
            <div className="sub-view-text">
              <span className="subs">1.55M Subscribers</span>
              <span className="views">4.3M Views</span>
            </div>
          </div>
        </div>

        <div className="video-box">
          <video autoPlay loop muted className="video-cards">
            <source src={VisualVenture} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="name">
            <span className='text-2xl bg-transparent absolute bottom-24 right-14'>@VisualVenture</span>
            <div className="sub-view-text">
              <span className="subs">605K Subscribers</span>
              <span className="views">3.3M Views</span>
            </div>
          </div>
        </div>

        <div className="video-box">
          <video autoPlay loop muted className="video-cards">
            <source src={INTERNET_ANARCHIST_1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="name">
            <span className='text-2xl bg-transparent absolute bottom-24 right-6'>@InternetAnarchist</span>
            <div className="sub-view-text">
              <span className="subs">1.07M Subscribers</span>
              <span className="views">1.8M Views</span>
            </div>
          </div>
        </div>

        <div className="video-box">
          <video autoPlay loop muted className="video-cards">
            <source src={INTERNET_ANARCHIST_2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="name">
            <span className='text-2xl bg-transparent absolute bottom-24 right-6'>@InternetAnarchist</span>
            <div className="sub-view-text">
              <span className="subs">1.07M Subscribers</span>
              <span className="views">1M Views</span>
            </div>
          </div>
        </div>

        <div className="video-box">
          <video autoPlay loop muted className="video-cards">
            <source src={CRUMB} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="name">
            <span className='text-2xl bg-transparent absolute bottom-24 right-32'>@Crumb</span>
            <div className="sub-view-text">
              <span className="subs">298K Subscribers</span>
              <span className="views">2.1M Views</span>
            </div>
          </div>
        </div>

        <div className="video-box">
          <video autoPlay loop muted className="video-cards">
            <source src={TechShot} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="name">
            <span className='yt-name'>@TechShotz</span>
            <div className="flex justify-center gap-1 mt-1 text-white bg-transparent  relative bottom-16 right-6">
              <span className="subs">979K Subscribers</span>
              <span className="views">4.3 Million Views</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
