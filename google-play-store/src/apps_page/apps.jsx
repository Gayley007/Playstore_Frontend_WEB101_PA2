import React, { useState } from "react";
import { NavLink } from "react-router-dom"; 
import "../apps_page/apps.css"; 
import { Search, HelpCircle } from "lucide-react";

const recommended = [
  { title: 'X', rating: 3.9, img: 'recommended1.png' },
  { title: 'Emochi: Chat With Character', rating: 4.6, img: 'recommended2.png' },
  { title: 'AnkiDroid Flashcards', rating: 4.8, img: 'recommended3.png' },
  { title: 'Grammarly-AI Writing Assistant', rating: 4.2, img: 'recommended4.png' },
  { title: 'HelloTalk-Learn Languages', rating: 3.9, img: 'recommended5.png' },
  { title: 'Pinterest', rating: 4.5, img: 'recommended6.png' },
  { title: 'DramaBox-Stream Drama...', rating: 4.7, img: 'recommended7.png' },
  { title: 'Pdb App:Personality &...', rating: 4.5, img: 'recommended8.png' }
];

const Books = [
  { title: 'Dictionary-Merriam-Webster', rating: 4.4, img: 'books1.png' },
  { title: 'Writer Journal-Story,Note', rating: 4.7, img: 'books2.png' },
  { title: 'Oxford Dictionary', rating: 4.5, img: 'books3.png' },
  { title: 'Inkitt: Books, Novels, Stories', rating: 4.4, img: 'books4.png' },
  { title: 'French-English offline dict.', rating: 4.2, img: 'books5.png' },
  { title: 'MANGA Plus by SHUEISHA', rating: 3.8, img: 'books6.png' },
  { title: 'MagicWave: Spicy Audio Stories', rating: 4.3, img: 'books7.png' },
  { title: 'DailyBean: Simplest Jpounal', rating: 4.7, img: 'books8.png' }
];

const productivity = [
  { title: 'Grammarly-AI Writing Assistant', rating: 4.2, img: 'productivity1.png' },
  { title: 'DeepSeek - AI Assistant', rating: 4.4, img: 'productivity2.png' },
  { title: 'Kilonotes-Notes & PDF reading', rating: 4.6, img: 'productivity3.png' },
  { title: 'Notein: Handwriting,Notes,...', rating: 4.4, img: 'productivity4.png' },
  { title: 'Color Notes, Notebook,...', rating: 4.6, img: 'productivity5.png' },
  { title: 'todo mate:tasks & AI', rating: 4.6, img: 'productivity6.png' },
  { title: 'Microsoft Excel: Spreadsheets', rating: 4.7, img: 'productivity7.png' },
  { title: 'Jnotes: Note-Taking&Editor PDF', rating: 4.2, img: 'productivity8.png' }
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

export default function AppSection() { // Renamed from KidsSection to AppSection
  const [activeButton, setActiveButton] = useState("All ages up to 12");
  const [activeTab, setActiveTab] = useState('Top free');

  const games = [
    { id: 1, image: '/bhutanndi.png', name: 'Bhutan NDI', tags: 'Business', rating: 3.3 },
    { id: 4, image: '/medhey.png', name: 'Medhey', tags: 'Shopping', rating: 4.0 },
    { id: 7, image: '/whatsapp.png', name: 'WhatsApp Messenger', tags: 'Communication', rating: 4.3 },
    { id: 2, image: '/educare.png', name: 'Educare Skill', tags: 'Education', rating: 4.5 },
    { id: 5, image: '/dkbank.png', name: 'DK Bank', tags: 'Finance', rating: 4.5 },
    { id: 8, image: '/autoclicker.png', name: 'Auto Clicker', tags: 'Tools', rating: 4.1 },
    { id: 3, image: '/chatgpt.png', name: 'ChatGPT', tags: 'Productivity', rating: 4.7 },
    { id: 6, image: '/tiktok.png', name: 'TikTok', tags: 'Social', rating: 4.2 },
    { id: 9, image: '/telegram.png', name: 'Telegram', tags: 'Communication', rating: 4.1 },
  ];

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

      {/* Top charts */}
      <div className="app">
        <h2 className="h2">Top charts</h2>
        <div className="tabs">
          <button
            className={activeTab === 'Top free' ? 'active' : ''}
            onClick={() => setActiveTab('Top free')}
          >
            Top free
          </button>
          <button
            className={activeTab === 'Top grossing' ? 'active' : ''}
            onClick={() => setActiveTab('Top grossing')}
          >
            Top grossing
          </button>
          <button
            className={activeTab === 'Top paid' ? 'active' : ''}
            onClick={() => setActiveTab('Top paid')}
          >
            Top paid
          </button>
        </div>

        <div className="games-list">
          {games.map((game) => (
            <div key={game.id} className="game-card">
              <div className="game-number">{game.id}</div>
              <img src={game.image} alt={game.name} className="game-image" />
              <div className="game-info">
                <div className="game-title">{game.name}</div>
                <div className="game-tags">{game.tags}</div>
                <div className="game-rating">{game.rating} ⭐</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended for you Section */}
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

      {/* Books & reference Section */}
      <div className="card-section">
        <h2 className="section-title">Books & reference</h2>
        <div className="card-row">
          {Books.map((game, index) => (
            <div className="card" key={index}>
              <img src={game.img} alt={game.title} className="card-image" />
              <p className="card-title">{game.title}</p>
              <p className="card-rating">{game.rating} ★</p>
            </div>
          ))}
        </div>
      </div>

      {/* Productivity Section */}
      <div className="card-section">
        <h2 className="section-title">Productivity</h2>
        <div className="card-row">
          {productivity.map((game, index) => (
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