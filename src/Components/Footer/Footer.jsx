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

        <Link to="tel:+91 93199 14361" className="text-white hover:text-gray-400 flex items-center   bg-neutral-900
">
          +91 93199 14361
        </Link>
        <div className="Logo">
          <div className="Logo-content  ">
        <Link
          to="https://www.instagram.com/rendergfx/" target="_blank"
          className="flex items-center space-x-2  text-white hover:text-gray-400   bg-neutral-900"
        >
          <Instagram className="bg-neutral-900" />
          <span className="Logo-text   bg-neutral-900">@Render_GFX</span>
        </Link>

        <Link
          to="https://x.com/render_gfx" target="_blank"
          className="flex items-center space-x-2 text-white hover:text-gray-400 bg-neutral-900"
        >
          <Twitter className="bg-neutral-900" />
          <span className="Logo-text bg-neutral-900">@Render_GFX</span>
        </Link>

        <Link
          to="https://in.linkedin.com/company/arisemedia-in"  target="_blank"
          className="flex items-center space-x-2 text-white hover:text-gray-400 bg-neutral-900"
        >
          <Linkedin className="bg-neutral-900" />
          <span className="Logo-text bg-neutral-900">@Render_GFX</span>
        </Link>
        </div>
        </div>
      </div>
      <div className="footer-copyright bg-neutral-900">
        <span className="Copyright-text bg-neutral-900">Copyright @2024 RenderGFX.</span>
        <span className="RR-text bg-neutral-900">All rights reserved.</span> 
      </div>
    </footer>
  );
}
