import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from '../components/layout/LanguageSwitcher';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { t } = useLanguage();
    const navigate = useNavigate();

    return (
        <>
            <header>
                <div className="container">
                    <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>SOSI</div>
                    <LanguageSwitcher />
                </div>
            </header>

            <main>
                <section className="hero">
                    <div className="container hero-content">
                        <h1>{t('home.heroTitle')}</h1>
                        <p className="subtitle">{t('home.heroSubtitle')}</p>
                        <button className="btn-primary" onClick={() => navigate('/upload')}>
                            {t('home.cta')}
                        </button>
                    </div>
                </section>

                <section className="features">
                    <div className="container">
                        <div className="grid">
                            <div className="card">
                                <h3>{t('home.feature1')}</h3>
                                <p>{t('home.feature1Desc')}</p>
                            </div>
                            <div className="card">
                                <h3>{t('home.feature2')}</h3>
                                <p>{t('home.feature2Desc')}</p>
                            </div>
                            <div className="card">
                                <h3>{t('home.feature3')}</h3>
                                <p>{t('home.feature3Desc')}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <div className="container">
                    <p>{t('footer.rights')}</p>
                </div>
            </footer>
        </>
    );
};

export default Home;
