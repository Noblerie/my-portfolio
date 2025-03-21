import React from 'react';

import { FaGithub } from "react-icons/fa6";
import styles from './projectCard.module.css';
import { getImageUrl } from '../../utils';

export const ProjectCard = ({ project : {title, imageSrc, description, skills, url } }) => {
    return (
        <div className={styles.container}>
            <img src={getImageUrl(imageSrc)} alt={title} className={styles.img} />
            <h3 className={styles.title} >{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {
                    skills.map((skills, id) => {
                        return <li key={id} className={styles.skill} >{skills}</li>
                    })
                }
            </ul>
            <a className={styles.links} href={url} target="_blank" rel="noreferrer"><FaGithub className={styles.icon} />View the project on Github</a>
        </div>
    )
}
        