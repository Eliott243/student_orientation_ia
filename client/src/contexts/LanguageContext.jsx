import React, { createContext, useState, useContext, useEffect } from 'react';
import { fr } from '../translations/fr';
import { en } from '../translations/en';
import { ln } from '../translations/ln';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('fr'); // Default to French
    const [translations, setTranslations] = useState(fr);

    useEffect(() => {
        switch (language) {
            case 'en':
                setTranslations(en);
                break;
            case 'ln':
                setTranslations(ln);
                break;
            case 'fr':
            default:
                setTranslations(fr);
        }
    }, [language]);

    const t = (key) => {
        const keys = key.split('.');
        let value = translations;
        for (let k of keys) {
            value = value?.[k];
        }
        return value || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
