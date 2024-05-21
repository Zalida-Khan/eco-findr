import Head from "next/head";
import LargeButton from "@/components/LargeButton/large";
import React, { useState } from "react";
import { NavigationBar } from "@/components/Navigation";
import HamburgerMenu from "@/components/HamburgerMenu";
import Switch from "react-switch";
import styles from "@/styles/Profile.module.css";

const translations = {
  en: {
    title: "Eco Findr",
    description: "Generated by create next app",
    textSizeLabel: "Text Size",
    savedEvents: "Saved Events",
    eventHistory: "Event History",
    editAlt: "Edit",
    profileAlt: "Profile",
    languageLabel: "Language",
  },
  fr: {
    title: "Eco Findr",
    description: "Généré par create next app",
    textSizeLabel: "Taille du texte",
    savedEvents: "Événements enregistrés",
    eventHistory: "Historique des événements",
    editAlt: "Éditer",
    profileAlt: "Profil",
    languageLabel: "Langue",
  },
};

const Profile = () => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [profilePic, setProfilePic] = useState("/images/blank-profile.webp");
  const [isEditing, setIsEditing] = useState(false);
  const [language, setLanguage] = useState("en");

  const toggleHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    document.getElementById("fileInput").click();
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilePic(event.target.result);
        setIsEditing(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  const t = translations[language];

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <img
              src={"/images/hamburgerMenu.png"}
              className={styles.menuIcon}
              width="40px"
              height="auto"
              alt="hamburger menu"
              onClick={toggleHamburgerMenu}
            />
            {showHamburgerMenu && <HamburgerMenu closeMenu={toggleHamburgerMenu} />}
            <div className={styles.profileCont}>
              <div className={styles.profileImgWrapper}>
                <img
                  className={styles.profileImg}
                  src={profilePic}
                  alt={t.profileAlt}
                />
                <p className={styles.editIcon} onClick={handleEditClick}>{t.editAlt}</p>
                <input
                  type="file"
                  accept="image/*"
                  id="fileInput"
                  className={styles.fileInput}
                  onChange={handleProfilePicChange}
                />
              </div>
              <div className={styles.lgBtnCont}>
                <LargeButton
                  className={styles.lgBtn}
                  text={t.savedEvents}
                  href="TargetedPage"
                />
                <LargeButton
                  className={styles.lgBtn}
                  text={t.eventHistory}
                  href="/EventHistory"
                />
              </div>
            </div>
            <div className={styles.toggleContainer}>
              <div className={styles.toggleItem}>
                <label htmlFor="languageSwitch" className={styles.toggleLabel}>
                  {t.languageLabel}
                </label>
                <Switch
                  onChange={toggleLanguage}
                  checked={language === "fr"}
                  className={styles.switch}
                  uncheckedIcon={<div className={styles.switchLabel}>EN</div>}
                  checkedIcon={<div className={styles.switchLabel}>FR</div>}
                  checkedHandleIcon={<div style={{ backgroundColor: "var(--lightGreen)" }} className={styles.switchHandle} />}
                  uncheckedHandleIcon={<div style={{ backgroundColor: "var(--lightGreen)" }} className={styles.switchHandle} />}
                />
              </div>
            </div>
          </div>
          <NavigationBar />
        </div>
      </main>
    </>
  );
};

export default Profile;
