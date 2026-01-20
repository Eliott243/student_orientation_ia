import React, { useState, useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from '../components/layout/LanguageSwitcher';
import { useNavigate } from 'react-router-dom';
import { analyzeTranscript } from '../services/mockIA';

const Upload = () => {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const [isDragging, setIsDragging] = useState(false);
    const [file, setFile] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const handleDrag = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.target.files || e.dataTransfer.files) return;
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setIsDragging(true);
        } else if (e.type === 'dragleave') {
            setIsDragging(false);
        }
    }, []);

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    }, []);

    const handleChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleAnalyze = async () => {
        if (!file) return;

        setIsAnalyzing(true);
        try {
            // Real API Call
            const formData = new FormData();
            formData.append("file", file);

            const response = await fetch("http://localhost:8000/api/analyze", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) throw new Error("Analysis failed");

            const result = await response.json();
            navigate('/results', { state: { result } });
        } catch (error) {
            console.error("Analysis failed", error);
            setIsAnalyzing(false);
            alert("Erreur lors de l'analyse. Vérifiez que le Backend tourne sur port 8000.");
        }
    };

    return (
        <>
            <header>
                <div className="container">
                    <div className="logo cursor-pointer" onClick={() => navigate('/')}>SOSI</div>
                    <LanguageSwitcher />
                </div>
            </header>

            <main>
                <section className="upload-section">
                    <div className="container">
                        {!isAnalyzing ? (
                            <>
                                <h1>{t('upload.title')}</h1>
                                <p className="subtitle">{t('upload.subtitle')}</p>

                                <div
                                    className={`drop-zone ${isDragging ? 'drag-active' : ''} ${file ? 'has-file' : ''}`}
                                    onDragEnter={handleDrag}
                                    onDragLeave={handleDrag}
                                    onDragOver={handleDrag}
                                    onDrop={handleDrop}
                                >
                                    <input
                                        type="file"
                                        id="file-upload"
                                        className="file-input"
                                        accept=".pdf,.jpg,.jpeg,.png"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="file-upload" className="drop-label">
                                        <div className="icon">📄</div>
                                        {file ? (
                                            <div className="file-info">
                                                <span className="file-name">{file.name}</span>
                                                <span className="file-change">{t('upload.changeFile')}</span>
                                            </div>
                                        ) : (
                                            <div className="upload-prompt">
                                                <span className="drop-text">{t('upload.dropText')}</span>
                                                <span className="browse-text">{t('upload.browseText')}</span>
                                            </div>
                                        )}
                                    </label>
                                </div>

                                <div className="actions">
                                    <button className="btn-secondary" onClick={() => navigate('/')}>
                                        {t('common.back')}
                                    </button>
                                    <button
                                        className="btn-primary"
                                        disabled={!file}
                                        onClick={handleAnalyze}
                                    >
                                        {t('common.start')}
                                    </button>
                                </div>

                                <p className="disclaimer">{t('upload.disclaimer')}</p>
                            </>
                        ) : (
                            <div className="loading-state">
                                <div className="loader"></div>
                                <h2>{t('upload.analyzing')}</h2>
                                <p>{t('upload.waitMessage')}</p>
                            </div>
                        )}
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

export default Upload;
