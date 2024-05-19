import React, { useState, useEffect } from "react";
import {
  UilHeart,
  UilCheckCircle,
  UilAngleRightB,
} from "@iconscout/react-unicons";
import Link from "next/link";
import styles from "./Cards.module.css";

export default function Cards({
  title,
  description,
  location,
  date,
  time,
  imgSrc,
  alt,
}) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [favoriteStatus, setFavoriteStatus] = useState([]);

  const handleFavoriteClick = (index) => {
    const newFavoriteStatus = [...favoriteStatus];
    newFavoriteStatus[index] = true;
    setFavoriteStatus(newFavoriteStatus);
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem(`isFavorite_${index}`, "true");
    }
    setPopupMessage("Added to Favorites");
  };

  const handleJoinClick = () => {
    setPopupMessage("Joined Event");
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedFavoriteStatus = [];
      for (let i = 0; i < 11; i++) {
        const storedFavorite = localStorage.getItem(`isFavorite_${i}`);
        storedFavoriteStatus.push(storedFavorite === "true");
      }
      setFavoriteStatus(storedFavoriteStatus);
    }
  }, []);

  const showPopupWithTimer = () => {
    setShowPopup(true);

    const timer = setTimeout(() => {
      setShowPopup(false);
      setPopupMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  };

  useEffect(() => {
    if (showPopup) {
      const cleanupTimer = showPopupWithTimer();
      return cleanupTimer;
    }
  }, [showPopup]);

  return (
    <div className={styles.Cards}>
      <div className={styles.imageContainer}>
        <img className={styles.cardImage} src={imgSrc} alt={alt} />
        {Array.from({ length: 11 }, (_, i) => (
          <button
            key={i}
            className={styles.favoriteBTN}
            onClick={() => {
              showPopupWithTimer();
              handleFavoriteClick(i);
            }}
          >
             <UilHeart
              className={`${styles.favoriteIcon} ${favoriteStatus[i] ? styles.favoriteIconClicked : ""
                }`}
            />
          </button>
        ))}
        {showPopup && (
          <div className={styles.popup}>
            <div className={styles.popupContent}>
              <div className={styles.joinContent}>
                <UilCheckCircle className={styles.checkIcon} />
                <span>{popupMessage}</span>
              </div>
              <div className={styles.viewContent}>
                <Link href="#">
                  <span>View</span>
                </Link>
                <Link href="#">
                  <UilAngleRightB className={styles.angleRight} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.headInfo}>
          <h2 className={styles.h2}>{title}</h2>
          <Link href="#">
            <button
              className={styles.joinButton}
              onClick={() => {
                showPopupWithTimer();
                handleJoinClick();
              }}
            >
              JOIN
            </button>
          </Link>
        </div>
        <div>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.generalInfo}>
          <div className={`${styles.location} ${styles.item}`}>
            <span>Location: </span>
            <span>{location}&nbsp;</span>
          </div>
          <div className={`${styles.date} ${styles.item}`}>
            <span>Date: </span>
            <span>{date}&nbsp;</span>
          </div>
          <div className={`${styles.time} ${styles.item}`}>
            <span>Time: </span>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}