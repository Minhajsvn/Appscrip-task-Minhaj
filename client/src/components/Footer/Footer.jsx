import styles from './Footer.module.css'
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <FooterTop />
            <hr />
            <FooterBottom />
            <p className={styles.copyright}>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
    )
}
