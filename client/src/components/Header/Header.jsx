import styles from'./Header.module.css'
import logo from '../../assets/Logo.png'
import search from '../../assets/search-normal.png'
import heart from '../../assets/heart.png'
import bag from '../../assets/shopping-bag.png'
import profile from '../../assets/profile.png'
import arrow from '../../assets/arrow-bottom.png'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.notificationBar}>
                <p>Free shipping on orders over ₹450!</p>
            </div>
            <div className={styles.logoSection}>
                <img src={logo} alt="" className={styles.logo} />
                <div className={styles.logoText}>LOGO</div>
                <menu className={styles.menuIcons}>
                    <img src={search} alt="" className={styles.icon} />
                    <img src={heart} alt="" className={styles.icon} />
                    <img src={bag} alt="" className={styles.icon} />
                    <img src={profile} alt="" className={styles.icon} />
                    <div className={styles.language}>
                        ENG
                        <img src={arrow} alt="" className={styles.icon} />
                    </div>
                </menu>
            </div>
            <nav className={styles.navMenu}>
                <button className={styles.navButton}>SHOP</button>
                <button className={styles.navButton}>SKILLS</button>
                <button className={styles.navButton}>STORIES</button>
                <button className={styles.navButton}>ABOUT</button>
                <button className={styles.navButton}>CONTACT US</button>
            </nav>
        </header>
    )
}
