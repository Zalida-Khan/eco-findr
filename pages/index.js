import React from "react";
import Head from "next/head";
import Link from "next/link";
import Button from "@/components/Button";
import styles from "@/styles/Landing.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>Eco Findr</title>
        <meta name="description" content="Welcome to the Quiz App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.container}>
          <div className={styles.appName}>
          <img
                                src={"/images/hamburgerMenu.png"}
                                className={styles.menuIcon}
                                width="40px"
                                height="auto"
                                alt="hamburger menu"
                            />
          </div>
          <div className={styles.buttonContainer}>
            <Link href="/Quiz">
              <Button className={styles.button} text="Get Started &#8594;" />
            </Link>
            <Link href="/Tutorial">
              <Button className={styles.buttonTwo} text="Tutorial" />
            </Link>
          </div>
        </div>

      </main>
    </>
  );
};

export default Home;
