import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaPlay, FaPause } from 'react-icons/fa';
import './News.css';

const News = () => {
    const { t, language } = useLanguage();
    const [playingVideo, setPlayingVideo] = useState(null);
    const videoRef = useRef(null);

    // Grid items configuration
    const bentoItems = [
        {
            id: 'video-main',
            type: 'video',
            src: '/news/video1.mp4',
            thumbnail: '/news/chess.jpg',
            title: {
                uz: 'UR Classic',
                en: 'UR Classic',
                ru: 'UR Classic'
            },
            subtitle: {
                uz: 'Kibersport turniri',
                en: 'Cybersport tournament',
                ru: 'Киберспортивный турнир'
            },
            gridClass: 'grid-tall left'
        },
        {
            id: 'grant',
            type: 'image',
            src: '/news/grant.jpg',
            title: {
                uz: 'GRANT YUTISH',
                en: 'WIN A GRANT',
                ru: 'ВЫИГРАТЬ ГРАНТ'
            },
            subtitle: {
                uz: 'Chet el universitetlariga',
                en: 'To foreign universities',
                ru: 'В зарубежные университеты'
            },
            gridClass: 'grid-wide top'
        },
        {
            id: 'quiz',
            type: 'image',
            src: '/news/quiz.jpg',
            title: {
                uz: 'SPEED QUIZ',
                en: 'SPEED QUIZ',
                ru: 'SPEED QUIZ'
            },
            subtitle: {
                uz: 'Zakovat o\'yini',
                en: 'Intellectual game',
                ru: 'Интеллектуальная игра'
            },
            gridClass: 'grid-box bottom'
        },
        {
            id: 'students',
            type: 'image',
            src: '/news/students.jpg',
            title: {
                uz: '',
                en: '',
                ru: ''
            },
            subtitle: {
                uz: '',
                en: '',
                ru: ''
            },
            gridClass: 'grid-tall right'
        }
    ];

    const handleVideoToggle = () => {
        if (videoRef.current) {
            if (playingVideo) {
                videoRef.current.pause();
                setPlayingVideo(false);
            } else {
                videoRef.current.play();
                setPlayingVideo(true);
            }
        }
    };

    return (
        <div className="news-page">
            <div className="news-container">
                <div className="news-header">
                    <h1 className="news-title">{t.nav.news}</h1>
                    <p className="news-desc">
                        {language === 'uz' ? 'Akademiyamiz hayotidagi eng so\'nggi voqealar' :
                            language === 'ru' ? 'Последние события из жизни нашей академии' :
                                'Latest events in the life of our academy'}
                    </p>
                </div>

                <div className="news-grid">
                    {bentoItems.map((item, index) => (
                        <div key={index} className={`news-card ${item.gridClass}`}>
                            {item.type === 'video' ? (
                                <div className="media-wrapper video-wrapper">
                                    <video
                                        ref={videoRef}
                                        src={item.src}
                                        poster={item.thumbnail}
                                        loop
                                        playsInline
                                    />
                                    <div className="video-overlay">
                                        <button className="play-btn" onClick={handleVideoToggle}>
                                            {playingVideo ? <FaPause /> : <FaPlay />}
                                        </button>
                                        <div className="card-content">
                                            {item.title[language] && <h3>{item.title[language]}</h3>}
                                            {item.subtitle[language] && <p>{item.subtitle[language]}</p>}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="media-wrapper image-wrapper">
                                    <img src={item.src} alt={item.title[language]} />
                                    <div className="card-overlay">
                                        <div className="card-content centered">
                                            {item.subtitle[language] && <span className="subtitle-tag">{item.subtitle[language]}</span>}
                                            {item.title[language] && <h2 className="main-title">{item.title[language]}</h2>}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;
