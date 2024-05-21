import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import DraggableItem from '../components/DraggableItem';
import styles from "@/styles/MiniGame.module.css";
import HamburgerMenu from "@/components/HamburgerMenu";
import { NavigationBar } from "@/components/Navigation";

const Bin = dynamic(() => import('../components/GameBins'), { ssr: false });

const ResultsPage = ({ score, onRestart }) => {
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

    const toggleHamburgerMenu = () => {
        setShowHamburgerMenu(!showHamburgerMenu);
    };

    return (
        <>
            <div className={styles.container}>
                <main className={styles.main}>
                    <div className={styles.contentWrapperTwo}>
                    <img
                                src={"/images/hamburgerMenu.png"}
                                className={styles.menuIcon}
                                width="40px"
                                height="auto"
                                alt="hamburger menu"
                                onClick={toggleHamburgerMenu}
                            />
                        <div className={styles.resultsCont}>
                            <h1>Game Over!</h1>
                            <p>Your final score is: {score}</p>
                            <button className={styles.button} onClick={onRestart}>Restart</button>
                        </div>
                    </div>
                    <NavigationBar />
                </main>
            </div>
        </>
    );
};

const Game = () => {
    const handleDragStart = (e, id) => {
        e.dataTransfer.setData('text/plain', id);
    };

    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
    const [score, setScore] = useState(0);
    const [correctBin, setCorrectBin] = useState(null);
    const [draggableImages, setDraggableImages] = useState([]);
    const [correctCount, setCorrectCount] = useState(0);

    useEffect(() => {
        generateRandomDraggables();
    }, []);

    const toggleHamburgerMenu = () => {
        setShowHamburgerMenu(!showHamburgerMenu);
    };

    const images = [
        { src: "/images/minigame/food-scraps.png", id: "2" },
        { src: "/images/minigame/cardboard.png", id: "1" },
        { src: "/images/minigame/bottle.png", id: "3" },
        { src: "/images/minigame/food-scraps2.png", id: "2" },
        { src: "/images/minigame/food-scraps3.png", id: "2" },
        { src: "/images/minigame/food-scraps4.png", id: "2" },
        { src: "/images/minigame/food-scraps5.png", id: "2" },
        { src: "/images/minigame/lotion-container.png", id: "3" },
        { src: "/images/minigame/paper.png", id: "1" },
        { src: "/images/minigame/paper-cup.png", id: "1" }
    ];

    const generateRandomDraggables = () => {
        const shuffledImages = images.sort(() => Math.random() - 0.5).slice(0, 3);
        setDraggableImages(shuffledImages);
    };

    const handleDrop = (e, id) => {
        e.preventDefault();
        const droppedItem = e.dataTransfer.getData('text/plain');
        if (droppedItem === id) {
            setScore(score + 1);
            setCorrectCount(correctCount + 1);
        }
        if (correctCount === 2) {
            generateRandomDraggables();
            setCorrectCount(0);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleRestart = () => {
        setScore(0);
        setCorrectBin(null);
        generateRandomDraggables();
    };

    if (score === 6) {
        return <ResultsPage score={score} onRestart={handleRestart} />;
    }

    return (
            <main className={styles.main}>
                        <div className={styles.container}>

                <div className={styles.contentWrapper}>
                    <img
                        src={"/images/hamburgerMenu.png"}
                        className={styles.menuIcon}
                        width="40px"
                        height="auto"
                        alt="hamburger menu"
                        onClick={toggleHamburgerMenu}
                    />
                    {showHamburgerMenu && <HamburgerMenu closeMenu={toggleHamburgerMenu} />}
                    <div className={styles.score}>Score: {score}</div>

                    <div className={styles.draggables}>
                        {draggableImages.map((image, index) => (
                            <DraggableItem key={index} src={image.src} onDragStart={handleDragStart} id={image.id} className={styles.draggableItem} />
                        ))}
                    </div>
                    <div className={styles.bins}>
                        <Bin id="1" onDrop={handleDrop} onDragOver={handleDragOver} imageSrc="/images/minigame/paper-bin.png" score={score} setScore={setScore} className={styles.bin} />
                        <Bin id="2" onDrop={handleDrop} onDragOver={handleDragOver} imageSrc="/images/minigame/foods-bin.png" score={score} setScore={setScore} className={styles.bin} />
                        <Bin id="3" onDrop={handleDrop} onDragOver={handleDragOver} imageSrc="/images/minigame/containers-bin.png" score={score} setScore={setScore} className={styles.bin} />
                    </div>
                </div>
                <NavigationBar />
                </div>

            </main>
    );
};

export default Game;
