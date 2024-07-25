import React from "react";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-content">
        <Link
          to="/"
          className="flex  text-white hover:text-gray-400 "
        >
          <span className="Render">Render</span>
          <span className="GFX">GFX</span>
        </Link>

        <Link to="mailto:info.rendergfx@gmail.com" className="mail-text">
          info.rendergfx@gmail.com
        </Link>

        <Link to="tel:+91 93199 14361" className="text-white hover:text-gray-400 flex items-center">
          +91 93199 14361
        </Link>
        <div className="Logo">
          <div className="Logo-content">
        <Link
          to="https://www.instagram.com/rendergfx/" target="_blank"
          className="flex items-center space-x-2  text-white hover:text-gray-400"
        >
          <Instagram />
          <span className="Logo-text">@Render_GFX</span>
        </Link>

        <Link
          to="https://x.com/render_gfx" target="_blank"
          className="flex items-center space-x-2 text-white hover:text-gray-400"
        >
          <Twitter />
          <span className="Logo-text">@Render_GFX</span>
        </Link>

        <Link
          to="https://in.linkedin.com/company/arisemedia-in"  target="_blank"
          className="flex items-center space-x-2 text-white hover:text-gray-400"
        >
          <Linkedin />
          <span className="Logo-text">@Render_GFX</span>
        </Link>
        </div>
        </div>
      </div>
      <div className="footer-copyright">
        <span className="Copyright-text">Copyright @2024 RenderGFX.</span>
        <span className="RR-text">All rights reserved.</span> 
      </div>
    </footer>
  );
}
