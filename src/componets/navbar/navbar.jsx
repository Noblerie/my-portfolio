import React, { useState } from 'react';
import { FaAlignJustify, FaX } from "react-icons/fa6";

import styles from './navbar.module.css';
import { getImageUrl } from '../../utils';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
        <a className={styles.title} href="/">My Portfolio</a>
        <div className={styles.menu}>
        <div onClick={() => setMenuOpen(!menuOpen)} className={styles.menuBtn}>
            {menuOpen ? <FaX className={styles.title}/> : <FaAlignJustify className={styles.title}/>}
        </div>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={() => setMenuOpen(false)}>
            <li><a href='#about'>About</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
        </div>
        
        </nav>
    );
    }