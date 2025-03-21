import React from 'react';

import { FaGithub,FaLinkedin,FaEnvelope } from "react-icons/fa6";
import styles from './contact.module.css';

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Fell free to contact me!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link} ><a href="mailto:hulinesteban@gmail.com"><FaEnvelope className={styles.icon} />hulinesteban@gmail.com</a></li>
                <li className={styles.link}><a href="https://www.linkedin.com/in/esteban-hulin/" target="_blank" rel="noreferrer"><FaLinkedin className={styles.icon} />linkedin.com/in/esteban-hulin</a></li>
                <li className={styles.link}><a href="https://www.github.com/Noblerie" target="_blank" rel="noreferrer"><FaGithub className={styles.icon} />github.com/Noblerie</a></li>
            </ul>
        </footer>
    )
}