import React from "react";
import styles from "./Quiz.module.css";

export function QuizSetup({ question, handleAnswerClick }) {
  return (
    <>
      <div className={styles.setup}>
        <div className={styles.question}>
          <p>{question.question}</p>
        </div>
      </div>
      <div>
        {question.answers.map((answer, index) => (
          <Choices key={index} text={answer} onClick={handleAnswerClick} />
        ))}
      </div>
    </>
  );
}

export function Choices({ text, onClick }) {
  return (
    <>
      <div className={styles.choicesCont}>
        <button onClick={onClick}>{text}</button>
      </div>
    </>
  );
}
