import React from "react";
import Link from "next/link";
import styles from "./LargeButton.module.css";

const LargeButton = ({ className, text, href }) => {
  return (
    <Link href={href}>
      <button className={`${styles.largeButton} ${className}`}>{text}</button>
    </Link>
  );
};

export default LargeButton;