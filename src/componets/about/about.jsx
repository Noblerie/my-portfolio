import React from "react";
import { FaSchool, FaComputer, FaSymfony } from "react-icons/fa6";

import styles from "./about.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About me</h2>
        <div className={styles.content}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <FaSymfony className={styles.icon} />
                    <h3 className={styles.subtitle}>Work Experience</h3>
                    <p className={styles.description}>
                    I got hands-on experience as a PHP Symfony developer during a 6-month internship at 6TM.
                    I worked on cool back-end and front-end features for big clients, making their apps better and smoother.
                    </p>
                </li>
                <li className={styles.item}>
                    <FaSchool className={styles.icon} />
                    <h3 className={styles.subtitle}>Education Journey</h3>
                    <p className={styles.description}>
                    I spent a year studying at BINUS University in Jakarta, Indonesia, during my 4th year of studies at Epitech, where I graduated with a degree in Computer Science in 2024.
                    </p>
                </li>
                <li className={styles.item}>
                    <FaComputer className={styles.icon} />
                    <h3 className={styles.subtitle}>What’s Next</h3>
                    <p className={styles.description}>
                    These days, I’m all about creating awesome personal projects and learning new technologies to be a better developer.
                    </p>
                </li>
            </ul>
        </div>
        </section>
    );
}    