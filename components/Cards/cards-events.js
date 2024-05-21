import React from "react";
import styles from "./CardsEvents.module.css";

export default function EventHistoryCards({ title, location,
    date, time, imgSrc, alt }) {
  return (
    <div className={styles.Cards}>
      <div className={styles.imageContainer}>
        <img className={styles.cardImage} src={imgSrc} alt={alt} />
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.headInfo}>
          <h2 className={styles.h2}>{title}</h2>
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
