import React from "react";
import Showcase from "../../assets/Showcase.mp4";

export default function Bigcreator() {
  return (
    <div className="bigcreator-container">
      <div className="video-section">
        <video autoPlay loop muted className="video-display-big">
          <source src={Showcase} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="text-section">
        <div className="heading">
          Big Creators, Bigger brands. <br />
          We’ve got them all
        </div>
        <div className="stats">
          <div className="upper-section">
            <div className="stat-item">
              <div className="stat-number">70,000,000+</div>
              <div className="stat-label">Views generated</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Videos Edited</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-number">40+</div>
            <div className="stat-label">Brands & Creators</div>
          </div>
        </div>
      </div>
    </div>
  );
}
