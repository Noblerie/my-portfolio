import React from "react";

import styles from "./presentation.module.css";
import { getImageUrl } from '../../utils';

export const Presentation = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello, I'm Esteban Hulin</h1>
            <p className={styles.description}>
            I'm a fullstack developer based in Rennes, France. 
            I learned differents programming languages such as PHP, Javascript, Python and now I'm looking for new opportunities to work on exciting projects.
            </p>
            <a href="#contact" className={styles.contactBtn}>Contact me</a>
        </div>
        <div className={styles.profile}>
            <img
            src={getImageUrl("profile.png")}
            alt="Profile"
            className={styles.profileImg}
            />
        </div>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  );
}