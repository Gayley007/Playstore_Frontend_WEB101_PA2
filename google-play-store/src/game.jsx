import React from "react";
import { Search, HelpCircle } from "lucide-react";
import "./game.css";
import { NavLink } from "react-router-dom"; 
import New from './components/new.jsx'; 
import Data from './components/data.jsx'; 
import Footer from './components/footer.jsx'; 

export default function Game() {
  return (
    <>
      {/* Header/Nav */}
      <div className="game-header">
        {/* Left section: Logo and Tabs */}
        <div className="game-left-section">
          <div className="game-google-play-logo">
            <img
              src="logo.png"
              alt="Google Play Logo"
              className="game-google-logo-icon"
            />
            <span className="game-google-logo-text">Google Play</span>
          </div>

          <div className="game-tabs">
            <NavLink to="/games" className="game-tab" activeClassName="game-active">Games</NavLink>
            <NavLink to="/apps" className="game-tab" activeClassName="game-active">Apps</NavLink>
            <NavLink to="/kids" className="game-tab" activeClassName="game-active">Kids</NavLink>
          </div>
        </div>

        {/* Right section: Icons */}
        <div className="game-right-section">
          <Search className="game-icon" />
          <HelpCircle className="game-icon" />
          <div className="game-profile">S</div>
        </div>
      </div>

      {/* Main Section Below Navbar */}
      <div className="game-main-content">
        <div className="game-feature-card">Phone</div>
        <div className="game-feature-card">Tablet</div>
        <div className="game-feature-card">Tv</div>
        <div className="game-feature-card">chromebook</div>
        <div className="game-feature-card">Watch</div>
        <div className="game-feature-card">Car</div>
      </div>

      {/* Calling Data pages */}
      <Data />
      {/* Calling Top Charts */}
      <New />
      {/* Calling Footer */}
      <Footer />
    </>
  );
}