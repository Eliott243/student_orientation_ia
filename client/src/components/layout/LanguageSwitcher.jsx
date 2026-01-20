import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="language-switcher">
            <button
                className={language === 'fr' ? 'active' : ''}
                onClick={() => setLanguage('fr')}>
                FR
            </button>
            <button
                className={language === 'en' ? 'active' : ''}
                onClick={() => setLanguage('en')}>
                EN
            </button>
            <button
                className={language === 'ln' ? 'active' : ''}
                onClick={() => setLanguage('ln')}>
                LN
            </button>
        </div>
    );
};

export default LanguageSwitcher;
