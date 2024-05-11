import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { fontsMap, themesMap, useTheme } from '@/context/ThemeContext';

interface ModalConfigProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalWebsiteConfig = ({ isOpen, onClose }: ModalConfigProps) => {
    const { font, setFont, theme, setTheme } = useTheme();

    useEffect(() => {
        if (isOpen)
            document.getElementsByTagName("body")[0].style.overflow = 'hidden'
    }, [isOpen])

    useEffect(() => {
        document.addEventListener('click', (e) => {
            const targetElement = e.target as HTMLElement;
            if (targetElement.classList.toString() == styles.background)
                handleOnClose()
        })
    }, [])

    const handleOnClose = () => {
        onClose()
        document.getElementsByTagName("body")[0].style.removeProperty('overflow')
    }

    if (!isOpen) return null;

    return (
        <div className={styles.background}>
            <div className={`${styles.container}`}>
                <div className={styles.actions}>
                    <span>Configurations</span>
                    <svg onClick={handleOnClose} viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"></path></g></svg>
                </div>
                <div className={`${styles.configFeatures}`}>
                    <span>Select theme ({theme})</span>
                    <div className={styles.themes}>
                        {
                            themesMap.map((theme, index) => (
                                <span key={index} onClick={() => setTheme(theme)}>{theme.replaceAll('-', ' ')}</span>
                            ))
                        }
                    </div>
                </div>
                <div className={`${styles.configFeatures}`}>
                    <span>Select font ({font})</span>
                    <div className={styles.themes}>
                        {
                            fontsMap.map((font, index) => (
                                <span key={index} onClick={() => setFont(font)}>{font.replaceAll('-', ' ')}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWebsiteConfig;