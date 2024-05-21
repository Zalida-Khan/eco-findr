import Link from "next/link";
import styles from "./TutorialCard.module.css";

export function TutorialCard({
  title,
  description,
  Icon,
  onBack,
  onNext,
  isFirst,
  isLast,
  currentIndex,
  totalCards,
}) {
  const renderCounter = () => {
    const circles = [];
    for (let i = 0; i < totalCards; i++) {
      circles.push(
        <div
          key={i}
          className={`${styles.circle} ${
            i === currentIndex ? styles.activeCircle : ""
          }`}
        ></div>
      );
    }
    return circles;
  };

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.counter}>{renderCounter()}</div>
        <div className={styles.titleContent}>
          <Icon className={styles.icon} />
          <h1 className={styles.iconTitle}>{title}</h1>
        </div>
        {!isFirst && <p>{description}</p>}
        <div className={styles.functionContent}>
          <Link href="#">
            <button
              className={`${styles.functionBTN} ${styles.backBTN}`}
              onClick={onBack}
              disabled={isFirst}
            >
              Back
            </button>
          </Link>
          <Link href="/Page-Home">
            <button className={`${styles.functionBTN} ${styles.skipBTN}`}>
              Skip
            </button>
          </Link>
          <Link href="#">
            <button
              className={`${styles.functionBTN} ${styles.nextBTN}`}
              onClick={onNext}
              disabled={isLast}
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}