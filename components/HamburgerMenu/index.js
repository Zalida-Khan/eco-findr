import styles from "./HamburgerMenu.module.css";
import Link from "next/link";
import React, { useState } from 'react';
import MusicPlayer from "@/components/MusicSwitch";

const HamburgerMenu = ({ closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuAndToggle = () => {
    closeMenu();
    toggleMenu();
  };


  return (
    <>
      <div className={`${styles.hamburgerMenu} ${isOpen ? styles.open : ""}`}>
        <div className={styles.menuCancel} onClick={closeMenuAndToggle}>
          <img
            src={"/images/cancel.png"}
            width="20px"
            height="auto"
            alt="close menu"
          />
        </div>
        <div className={styles.menuCont}></div>
        <Link className={styles.link} href="/MiniGame">
          <div>Mini Game</div>
        </Link>
        <Link className={styles.link} href="/Quiz">
          <div>Quiz</div>
        </Link>
        <Link className={styles.link} href="/Tutorial">
          <div>Tutorial</div>
        </Link>
        <Link className={styles.link} href="/LearnMore">
          <div>Learn More</div>
        </Link>
        <MusicPlayer />
        <div className={styles.hamburgerIcon} onClick={toggleMenu}></div>
      </div>
    </>
  );
};

export default HamburgerMenu;
