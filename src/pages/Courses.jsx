import React, { useState } from 'react';
import { FaClock, FaUsers } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { coursesData } from '../data/courses';
import { useNavigate } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
    const { t, language } = useLanguage();
    const navigate = useNavigate();
    const [filter, setFilter] = useState('All');

    const filteredCourses = filter === 'All'
        ? coursesData
        : coursesData.filter(course => course.category === filter);

    const categories = [
        { key: 'All', label: t.courses.filter.all },
        { key: 'Boshlang\'ich', label: t.courses.filter.beginner },
        { key: 'Dasturlash', label: t.courses.filter.dev },
        { key: 'Individual', label: t.courses.filter.individual },
        { key: 'Boshqa', label: t.courses.filter.other },
        { key: 'Til', label: t.courses.filter.language }
    ];

    const getCategoryLabel = (category) => {
        const categoryMap = {
            'Boshlang\'ich': 'beginner',
            'Dasturlash': 'dev',
            'Individual': 'individual',
            'Boshqa': 'other',
            'Til': 'language'
        };
        return t.courses.filter[categoryMap[category]] || category;
    };

    const getCourseTitle = (course) => {
        if (language === 'ru') return course.titleRu || course.titleEn || course.title;
        if (language === 'en') return course.titleEn || course.title;
        return course.title;
    };

    const getDurationText = (duration) => {
        if (language === 'en') return duration.replace('Oy', 'Months');
        if (language === 'ru') return duration.replace('Oy', 'Мес.');
        return duration;
    };

    return (
        <div className="page courses-page">
            <div className="container">
                <div className="courses-header">
                    <h1 className="courses-title">{t.courses.title}</h1>
                    <p className="courses-subtitle">{t.courses.subtitle}</p>

                    <div className="filter-container">
                        {categories.map(cat => (
                            <button
                                key={cat.key}
                                className={`filter-btn ${filter === cat.key ? 'active' : 'inactive'}`}
                                onClick={() => setFilter(cat.key)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="courses-grid">
                    {filteredCourses.map(course => (
                        <div key={course.id} className="course-card">
                            <div className="course-image-wrapper">
                                <img
                                    src={course.image}
                                    alt={getCourseTitle(course)}
                                    className="course-image"
                                />
                                <span className="category-badge">
                                    {getCategoryLabel(course.category)}
                                </span>
                            </div>

                            <div className="course-content">
                                <h3 className="course-title">{getCourseTitle(course)}</h3>

                                <div
                                    className="instructor-panel"
                                    onClick={() => navigate(`/instructor/${course.instructorSlug}`)}
                                >
                                    <img
                                        src={course.instructorImg}
                                        alt={course.instructor}
                                        className="instructor-img"
                                    />
                                    <span className="instructor-name">{course.instructor}</span>
                                </div>

                                <div className="course-footer">
                                    <div className="course-meta">
                                        <span className="meta-item">
                                            <FaClock /> {getDurationText(course.duration)}
                                        </span>
                                        <span className="meta-item">
                                            <FaUsers /> {course.students} {t.courses.card.students}
                                        </span>
                                    </div>
                                    <div className="price-box">
                                        {course.oldPrice && (
                                            <p className="old-price">{course.oldPrice}</p>
                                        )}
                                        <p className="current-price">{course.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;
