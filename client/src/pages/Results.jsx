import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from '../components/layout/LanguageSwitcher';
import { useLocation, useNavigate } from 'react-router-dom';

const Results = () => {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();
    const result = location.state?.result;

    useEffect(() => {
        if (!result) {
            navigate('/');
        }
    }, [result, navigate]);

    if (!result) return null;

    return (
        <>
            <header>
                <div className="container">
                    <div className="logo cursor-pointer" onClick={() => navigate('/')}>SOSI</div>
                    <LanguageSwitcher />
                </div>
            </header>

            <main className="results-page">
                <div className="container">
                    <div className="results-header">
                        <h1>{t('results.title')}</h1>
                        <p className="subtitle">{t('results.subtitle')}</p>
                    </div>

                    <div className="dashboard-grid">
                        {/* Soft Skills Section */}
                        <section className="skills-card">
                            <h2>{t('results.skillsTitle')}</h2>
                            <div className="skills-list">
                                {result.profile.softSkills.map((skill, index) => (
                                    <div key={index} className="skill-item">
                                        <div className="skill-info">
                                            <span className="skill-name">{t(`skills.${skill.name}`)}</span>
                                            <span className="skill-score">{skill.score}%</span>
                                        </div>
                                        <div className="progress-bar-bg">
                                            <div
                                                className="progress-bar-fill"
                                                style={{ width: `${skill.score}%`, backgroundColor: skill.color }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Recommendations Section */}
                        <section className="recommendations-section">
                            <h2>{t('results.recommendationsTitle')}</h2>
                            <div className="recommendations-list">
                                {result.recommendations.map((rec, index) => (
                                    <div key={rec.id} className="rec-card">
                                        <div className="rec-header">
                                            <div className="rank">#{index + 1}</div>
                                            <div className="match-badge" style={{ backgroundColor: rec.matchScore >= 90 ? '#10b981' : '#f59e0b' }}>
                                                {rec.matchScore}% Match
                                            </div>
                                        </div>
                                        <h3>{t(`fields.${rec.field}`)}</h3>
                                        <p className="rec-desc">{t(`fields.${rec.description}`)}</p>

                                        <div className="tags">
                                            {rec.tags.map(tag => (
                                                <span key={tag} className="tag">{t(`tags.${tag}`)}</span>
                                            ))}
                                        </div>

                                        <div className="careers">
                                            <h4>{t('results.careers')}:</h4>
                                            <ul>
                                                {rec.careers.map(career => (
                                                    <li key={career}>{t(`careers.${career}`)}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="actions-footer">
                        <button className="btn-secondary" onClick={() => navigate('/')}>{t('common.startNew')}</button>
                        <button className="btn-primary" onClick={() => window.print()}>{t('results.downloadReport')}</button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Results;
