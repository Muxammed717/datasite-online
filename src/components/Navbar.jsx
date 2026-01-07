import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSnowflake, FaCog } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

import flagUz from '../assets/flag-uz.png';
import flagRu from '../assets/flag-ru.png';
import flagEn from '../assets/flag-en.png';

const WorldClock = ({ language }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getTimeZone = (lang) => {
    if (lang === 'uz') return 'Asia/Tashkent';
    if (lang === 'ru') return 'Europe/Moscow';
    if (lang === 'en') return 'Europe/London';
    return 'Asia/Tashkent';
  };

  const getFlagImg = (lang) => {
    if (lang === 'uz') return flagUz;
    if (lang === 'ru') return flagRu;
    return flagEn;
  };

  const formattedTime = new Intl.DateTimeFormat('en-GB', {
    timeZone: getTimeZone(language),
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(time);

  return (
    <div className="world-clock">
      <img
        src={getFlagImg(language)}
        alt={language}
        className="clock-flag"
      />
      <span className="clock-time">{formattedTime}</span>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  const getNextLang = (lang) => {
    if (lang === 'uz') return 'RU';
    if (lang === 'ru') return 'EN';
    return 'UZ';
  };

  const getLangFull = (lang) => {
    if (lang === 'uz') return 'O\'zbekcha';
    if (lang === 'ru') return 'Русский';
    return 'English';
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo-container" onClick={() => setIsOpen(false)}>
          <img src="/brand-logo.png" alt="DataSite Academy" className="logo-img" />
        </Link>

        {/* Dynamic World Clock with Flag */}
        <div className="clock-wrapper" style={{ marginLeft: '3rem' }}>
          <WorldClock language={language} />
        </div>

        {/* Desktop Admin & Language */}
        <div style={{ marginLeft: 'auto', marginRight: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }} className="desktop-nav-extras">

          <button
            onClick={toggleLanguage}
            style={{
              background: 'white',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              color: 'var(--primary)',
              fontWeight: 700,
              minWidth: '50px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {getNextLang(language)}
          </button>
        </div>

        <div className="mobile-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleMenu}>{t.nav.home}</Link>
          </li>
          <li className="nav-item">
            <Link to="/courses" className="nav-link" onClick={toggleMenu}>{t.nav.courses}</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={toggleMenu}>{t.nav.about}</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={toggleMenu}>{t.nav.contact}</Link>
          </li>
          <li className="nav-item">
            <Link to="/news" className="nav-link" onClick={toggleMenu}>{t.nav.news}</Link>
          </li>
          <li className="nav-item">
            <button
              onClick={() => { toggleLanguage(); toggleMenu(); }}
              style={{
                background: 'var(--bg-secondary)',
                border: 'none',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                color: 'var(--primary)',
                fontWeight: 600,
                width: '100%',
                textAlign: 'left',
                marginTop: '0.5rem'
              }}
              className="mobile-lang-switch"
            >
              🌐 {getLangFull(language)}
            </button>
          </li>

          <li className="nav-item">
            <Link to="/enrollment" className="btn btn-primary nav-btn" onClick={toggleMenu}>{t.nav.enroll}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
