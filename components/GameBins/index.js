import React, { useState, useEffect, useRef } from 'react';
import styles from './GameBins.module.css';

const Bin = ({ id, onDrop, onDragOver, imageSrc, setScore }) => {
    const [isIncorrect, setIsIncorrect] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const correctAudio = useRef(null);
    const wrongAudio = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            correctAudio.current = new Audio('/audio/correct-answer.mp3');
            wrongAudio.current = new Audio('/audio/wrong-answer.mp3');
            
            correctAudio.current.volume = 0.2;
            wrongAudio.current.volume = 0.2;
        }
    }, []);

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedItem = e.dataTransfer.getData('text/plain');
        if (droppedItem !== id) {
            setIsIncorrect(true);
            setScore(score => score - 1);
            if (wrongAudio.current) {
                wrongAudio.current.play();
            }
            setTimeout(() => {
                setIsIncorrect(false);
            }, 1000);
        } else {
            setIsCorrect(true);
            setScore(score => score + 1);
            if (correctAudio.current) {
                correctAudio.current.play();
            }
            setTimeout(() => {
                setIsCorrect(false);
            }, 1000);
            onDrop(e, id);
        }
    };

    return (
        <div
            id={id}
            onDrop={handleDrop}
            onDragOver={onDragOver}
            className={`${styles.bin} ${isIncorrect ? styles.incorrect : ''} ${isCorrect ? styles.correct : ''}`}
        >
            <img src={imageSrc} alt={`Bin ${id}`} style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
    );
};

export default Bin;
