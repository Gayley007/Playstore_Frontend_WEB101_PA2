import React from "react";
import { Search, HelpCircle } from "lucide-react";
import "./KidsSection.css"; 

export default function KidsSection() { // Renamed the component to match the file name
  return (
    <>
      {/* Header/Nav */}
      <div className="header">
        {/* Left section: Logo and Tabs */}
        <div className="left-section">
          <div className="google-play-logo">
            <img
              src="logo.png"
              alt="Google Play Logo"
              className="google-logo-icon"
            />
            <span className="google-logo-text">Google Play</span>
          </div>

          <div className="tabs">
            <div className="tab">Games</div>
            <div className="tab">Apps</div>
            <div className="tab2">Kids</div> {/* Active tab for Kids */}
          </div>
        </div>

        {/* Right section: Icons */}
        <div className="right-section">
          <Search className="icon" />
          <HelpCircle className="icon" />
          <div className="profile">S</div>
        </div>
      </div>
    </>
  );
}