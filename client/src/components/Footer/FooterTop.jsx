import styles from './Footer.module.css'
import usFlag from '../../assets/us.svg'

export default function FooterTop() {
    return (
        <div className={styles.footerTop}>
            <div>
                <h4>BE THE FIRST TO KNOW</h4>
                <p>Sign up for updates from mettā muse.</p>
                <input type="email" name="email" id="email" placeholder='Enter your e-mail...' />
                <button>SUBSCRIBE</button>
            </div>
            <div>
                <h4>CONTACT US</h4>
                <p>+44 221 133 5360</p>
                <p>customercare@mettamuse.com</p>
                <h4>CURRENCY</h4>
                <div className={styles.country}>
                <img src={usFlag} alt="" className={styles.img} /> USD
                </div>
                <small>Transactions will be completed in Euros and a currency reference is available on hover.</small>
            </div>
        </div>
    )
}
