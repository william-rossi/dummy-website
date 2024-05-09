import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { themesMap, useThemeContext } from '@/context/ThemeContext';

const ModalWebsiteConfig = () => {
    const { themeContext, setThemeContext } = useThemeContext();

    return (
        <div className={styles.background}>
            <div className={`${styles.container}`}>
                <div className={styles.actions}>
                    <svg viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier"></g>
                        <g id="SVGRepo_tracerCarrier"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"></path>
                        </g>
                    </svg>
                </div>
                <div className={`${styles.configFeatures} ${themeContext}-theme`}>
                    <span>Themes</span>
                    <span>Current: {themeContext}</span>
                    <div className={`${styles.themes} ${themeContext}`}>
                        {
                            themesMap.map((theme, index) => (
                                <span key={index} onClick={() => setThemeContext(theme)}>{theme}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWebsiteConfig;