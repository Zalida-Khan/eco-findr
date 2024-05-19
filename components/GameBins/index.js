import React, { useState, useRef } from 'react';
import styles from './GameBins.module.css';

const Bin = ({ id, onDrop, onDragOver, imageSrc, setScore }) => {
    const [isIncorrect, setIsIncorrect] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const correctAudio = useRef(new Audio('/audio/correct-answer.mp3'));
    const wrongAudio = useRef(new Audio('/audio/wrong-answer.mp3'));

    correctAudio.current.volume = 0.2;
    wrongAudio.current.volume = 0.2;

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedItem = e.dataTransfer.getData('text/plain');
        if (droppedItem !== id) {
            setIsIncorrect(true);
            setScore(score => score - 1);
            wrongAudio.current.play();
            setTimeout(() => {
                setIsIncorrect(false);
            }, 1000);
        } else {
            setIsCorrect(true);
            setScore(score => score + 1); 
            correctAudio.current.play();
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
