import styles from'./Header.module.css'
import logo from '../../assets/Logo.png'
import search from '../../assets/search-normal.png'
import heart from '../../assets/heart.png'
import bag from '../../assets/shopping-bag.png'
import profile from '../../assets/profile.png'
import arrow from '../../assets/arrow-bottom.png'
import toggle from '../../assets/toggle.svg'
import { useState } from 'react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className={styles.header}>
            <div className={styles.notificationBar}>
                <p>Free shipping on orders over ₹450!</p>
            </div>
            <div className={styles.logoSection}>
                <button className={styles.toggleButton} onClick={toggleMenu}>
                    <img src={toggle} alt="toggle-button" />
                </button>
                <img src={logo} alt="logo of the company" className={styles.logo} />
                <div className={styles.logoText}>LOGO</div>
                <menu className={styles.menuIcons}>
                    <img src={search} alt="search icon" className={styles.icon} />
                    <img src={heart} alt="wish list" className={styles.icon} />
                    <img src={bag} alt="cart" className={styles.icon} />
                    <img src={profile} alt="profile" className={`${styles.icon} profile`} />
                    <div className={styles.language}>
                        ENG
                        <img src={arrow} alt="select language" className={styles.icon} />
                    </div>
                </menu>
            </div>
            <nav className={`${styles.navMenu} ${
                    isMenuOpen ? styles.mobileNavMenu : ''
                }`}>
                <button className={styles.navButton}>SHOP</button>
                <button className={styles.navButton}>SKILLS</button>
                <button className={styles.navButton}>STORIES</button>
                <button className={styles.navButton}>ABOUT</button>
                <button className={styles.navButton}>CONTACT US</button>
            </nav>
        </header>
    )
}
