import styles from "./Chips.module.css";

export default function Chips({ buttonText, onClick, isActive }) {
  return (
    <button
      type="button"
      className={`${styles.chipCard} ${isActive ? styles.active : ""}`}
      onClick={() => onClick(buttonText)}
    >
      {buttonText}
    </button>
  );
}
