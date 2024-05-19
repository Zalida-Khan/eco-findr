import React, { useState, useEffect } from "react";
import styles from "./LoadingAnimation.module.css";

const LoadingAnim = ({ showOverlay }) => {
    const [loadingText] = useState("Just a moment...");
    const [imageSrc] = useState("/images/indicator.png");

    useEffect(() => {
        const interval = setInterval(() => {
        }, 13000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.loadCont}>
            {showOverlay && <div className={styles.overlay} />}
            <img src={imageSrc} width="60px" height="auto" alt="Loading Indicator" />
            <p className={styles.loadingText}>{loadingText}</p>
        </div>
    );
};

export default LoadingAnim;
