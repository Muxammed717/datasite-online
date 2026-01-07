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
  const [langOpen, setLangOpen] = useState(false);
  const { t, language, changeLanguage } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  const getLangFull = (lang) => {
    if (lang === 'uz') return 'Uzbek';
    if (lang === 'ru') return 'Русский';
    return 'English';
  };

  const getLangShort = (lang) => {
    return lang.toUpperCase();
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo-container" onClick={() => setIsOpen(false)}>
          <img src="/brand-logo.png" alt="DataSite Academy" className="logo-img" />
        </Link>

        {/* Dynamic World Clock with Flag */}
        <div className="clock-wrapper">
          <WorldClock language={language} />
        </div>

        {/* Desktop Extras */}
        <div className="desktop-nav-extras">
          <div className="lang-menu-container">
            <button
              className="lang-main-btn"
              onClick={() => setLangOpen(!langOpen)}
            >
              <img src={language === 'uz' ? flagUz : language === 'ru' ? flagRu : flagEn} alt="" className="lang-flag-mini" />
              <span>{getLangShort(language)}</span>
              <span className={`arrow-icon ${langOpen ? 'up' : 'down'}`}>▾</span>
            </button>

            <div className={`lang-options-3row ${langOpen ? 'open' : ''}`}>
              <div className={`lang-row-item ${language === 'uz' ? 'active' : ''}`} onClick={() => { changeLanguage('uz'); setLangOpen(false); }}>
                <img src={flagUz} alt="" /> Uzbek
              </div>
              <div className={`lang-row-item ${language === 'ru' ? 'active' : ''}`} onClick={() => { changeLanguage('ru'); setLangOpen(false); }}>
                <img src={flagRu} alt="" /> Русский
              </div>
              <div className={`lang-row-item ${language === 'en' ? 'active' : ''}`} onClick={() => { changeLanguage('en'); setLangOpen(false); }}>
                <img src={flagEn} alt="" /> English
              </div>
            </div>
          </div>
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
            <Link to="/enrollment" className="btn btn-primary nav-btn" onClick={toggleMenu}>{t.nav.enroll}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
