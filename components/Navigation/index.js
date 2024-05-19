import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Navigation.module.css";
import {
  UilEstate,
  UilLocationPoint,
  UilSchedule,
  UilUserCircle,
} from "@iconscout/react-unicons";

export function NavigationBar() {
  const router = useRouter();
  const [selectedButton, setSelectedButton] = useState(null);

  useEffect(() => {
    switch (router.pathname) {
      case "/Page-Home":
        setSelectedButton("home");
        break;
      case "/Page-Map":
        setSelectedButton("map");
        break;
      case "/Calendar":
        setSelectedButton("calendar");
        break;
      case "/Profile":
        setSelectedButton("profile");
        break;
      default:
        setSelectedButton(null);
    }
  }, [router.pathname]);

  return (
    <main className={`${styles.main}`}>
    <div className={styles.containerNav}>
      <Link href="/Page-Home">
        <button
          className={
            selectedButton === "home" ? styles.selectedButton : styles.button
          }
          onClick={() => setSelectedButton("home")}
        >
          <UilEstate className={styles.icon} />
        </button>
      </Link>
      <Link href="/Page-Map">
        <button
          className={
            selectedButton === "map" ? styles.selectedButton : styles.button
          }
          onClick={() => setSelectedButton("map")}
        >
          <UilLocationPoint className={styles.icon} />
        </button>
      </Link>
      <Link href="/Calendar">
        <button
          className={
            selectedButton === "calendar"
              ? styles.selectedButton
              : styles.button
          }
          onClick={() => setSelectedButton("calendar")}
        >
          <UilSchedule className={styles.icon} />
        </button>
      </Link>
      <Link href="/Profile">
        <button
          className={
            selectedButton === "profile" ? styles.selectedButton : styles.button
          }
          onClick={() => setSelectedButton("profile")}
        >
          <UilUserCircle className={styles.icon} />
        </button>
      </Link>
    </div>
    </main>
  );
}
