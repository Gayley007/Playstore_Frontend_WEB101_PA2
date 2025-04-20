import React, { useState } from "react";
import { NavLink } from "react-router-dom"; 
import "../kids_page/KidsSection.css"; 
import { Search, HelpCircle } from "lucide-react";

const recommended = [
  { title: 'LEGO® Friends: Heartlake Rush', rating: 4.2, img: 'recommended2.png' },
  { title: 'CoComelon: Learn ABCs and 123s', rating: 4.3, img: 'recommended3.png' },
  { title: 'Tizi Dolls Anime Kawaii World', rating: 4.2, img: 'recommended7.png' },
  { title: 'Bubbu 2 - My pet kingdom', rating: 4.4, img: 'recommended4.png' },
  { title: 'Animal Hospital games for kids', rating: 3.9, img: 'recommended5.png' },
  { title: 'Hello Kitty: Beauty Salon', rating: 4.6, img: 'recommended6.png' },
  { title: 'Aha Makeover World: Salon Game', rating: 4.2, img: 'recommended1.png' },
  { title: 'Pizza maker Kids Cooking games', rating: 3.8, img: 'recommended8.png' }
];

const newGames = [
  { title: 'Vlinder Gacha dress up for kids', rating: 4.6, img: 'newgame1.png' },
  { title: 'strawberry shortcake Bake shop', rating: 4.4, img: 'newgame2.png' },
  { title: 'Bubbu and Mimmi World', rating: 4.4, img: 'newgame3.png' },
  { title: 'Yoya: Busy life World', rating: 3.8, img: 'newgame4.png' },
  { title: 'Barbie Dreamhouse Adventure', rating: 4.0, img: 'newgame5.png' },
  { title: 'hello Kitty Lunchbox', rating: 4.1, img: 'newgame6.png' },
  { title: 'Toca Boca world', rating: 4.2, img: 'newgame7.png' },
  { title: 'Sushi Maker kids cooking game', rating: 4.3, img: 'newgame8.png' }
];

const simulationGames = [
  { title: 'Miga Town: My world', rating: 4.1, img: 'simulation1.png' },
  { title: 'Vlogger Go Viral: Tuber life', rating: 4.5, img: 'simulation2.png' },
  { title: 'Avatar World', rating: 4.6, img: 'simulation3.png' },
  { title: 'LOL Surprise! OMG Fashion Club', rating: 3.8, img: 'simulation4.png' },
  { title: 'Tizi Modern Home & Room Design', rating: 4.4, img: 'simulation5.png' },
  { title: 'Nail Art Salon', rating: 4.2, img: 'simulation6.png' },
  { title: 'Baby Pandas fashion Dressup', rating: 4.0, img: 'simulation7.png' },
  { title: 'Burger Maker Kids Cooking Game', rating: 4.4, img: 'simulation8.png' }
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Google Play</h3>
          <ul>
            <li>Play Pass</li>
            <li>Play Points</li>
            <li>Gift cards</li>
            <li>Redeem</li>
            <li>Refund policy</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Kids & family</h3>
          <ul>
            <li>Parent Guide</li>
            <li>Family sharing</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy</a>
          <a href="#">About Google Play</a>
          <a href="#">Developers</a>
          <a href="#">Google Store</a>
        </div>
        <div className="footer-language">Bhutan (English)</div>
      </div>
    </footer>
  );
};

export default function KidsSection() {
  const [activeButton, setActiveButton] = useState("All ages up to 12");

  const handleButtonClick = (ageGroup) => {
    setActiveButton(ageGroup);
  };

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
            <NavLink to="/games" className="tab" activeClassName="active">Games</NavLink>
            <NavLink to="/apps" className="tab" activeClassName="active">Apps</NavLink>
            <NavLink to="/kids" className="tab" activeClassName="active">Kids</NavLink>
          </div>
        </div>

        {/* Right section: Icons */}
        <div className="right-section">
          <Search className="icon" />
          <HelpCircle className="icon" />
          <div className="profile">S</div>
        </div>
      </div>

      {/* Main Section */}
      <div className="Main-section">
        <img src="image1.png"alt="image1" className="image1"/>
      </div>

      {/* Age Filter Section */}
      <div className="age-filter-section">
        <h2 className="age-filter-title">Teacher Approved apps & games</h2>
        <div className="age-buttons">
          <button
            className={`age-button ${activeButton === "All ages up to 12" ? "active" : ""}`}
            onClick={() => handleButtonClick("All ages up to 12")}
          >
            All ages up to 12
          </button>
          <button
            className={`age-button ${activeButton === "Ages up to 5" ? "active" : ""}`}
            onClick={() => handleButtonClick("Ages up to 5")}
          >
            Ages up to 5
          </button>
          <button
            className={`age-button ${activeButton === "Ages 6-8" ? "active" : ""}`}
            onClick={() => handleButtonClick("Ages 6-8")}
          >
            Ages 6-8
          </button>
          <button
            className={`age-button ${activeButton === "Ages 9-12" ? "active" : ""}`}
            onClick={() => handleButtonClick("Ages 9-12")}
          >
            Ages 9-12
          </button>
        </div>
      </div>

      {/*Recommended Games */}
      <div className="card-section">
        <h2 className="section-title">Recommended for you</h2>
        <div className="card-row">
          {recommended.map((app, index) => (
            <div className="card" key={index}>
              <img src={app.img} alt={app.title} className="card-image" />
              <p className="card-title">{app.title}</p>
              <p className="card-rating">{app.rating} ★</p>
            </div>
          ))}
        </div>
      </div>

      {/* New Games Section */}
      <div className="card-section">
        <h2 className="section-title">New Games</h2>
        <div className="card-row">
          {newGames.map((game, index) => (
            <div className="card" key={index}>
              <img src={game.img} alt={game.title} className="card-image" />
              <p className="card-title">{game.title}</p>
              <p className="card-rating">{game.rating} ★</p>
            </div>
          ))}
        </div>
      </div>

      {/* Simulation Games Section */}
      <div className="card-section">
        <h2 className="section-title">Simulation Games</h2>
        <div className="card-row">
          {simulationGames.map((game, index) => (
            <div className="card" key={index}>
              <img src={game.img} alt={game.title} className="card-image" />
              <p className="card-title">{game.title}</p>
              <p className="card-rating">{game.rating} ★</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}