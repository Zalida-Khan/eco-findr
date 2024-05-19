import React, { useState } from "react";
import Head from "next/head";
import styles from "@/styles/Tutorial.module.css";
import { TutorialCard } from "@/components/TutorialCard";
import tutorialData from "@/public/samples/tutorialData";

const Tutorial = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNext = () => {
    if (currentCardIndex < tutorialData.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const currentCard = tutorialData[currentCardIndex];

  return (
    <div className={styles.container}>
      <Head></Head>
      <main className={`${styles.main}`}>
        <TutorialCard
          title={currentCard.title}
          description={currentCard.description}
          Icon={currentCard.Icon}
          onBack={handleBack}
          onNext={handleNext}
          isFirst={currentCardIndex === 0}
          isLast={currentCardIndex === tutorialData.length - 1}
          currentIndex={currentCardIndex}
          totalCards={tutorialData.length}
        />
      </main>
    </div>
  );
};

export default Tutorial;