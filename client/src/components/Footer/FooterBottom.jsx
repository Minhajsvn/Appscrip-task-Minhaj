import styles from './Footer.module.css'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import gpay from '../../assets/gpay.svg'
import mastercard from '../../assets/mastercard.svg'
import paypal from '../../assets/paypal.svg'
import amex from '../../assets/amex.svg'
import apple from '../../assets/apple.svg'
import opay from '../../assets/opay.svg'

const column1 = ['About us', 'Stories', 'Artisans', 'Boutiques', 'Contact Us', 'EU Compliances Docs']
const column2 = ['Orders & Shipping', 'Join/Login as a Seller', 'Payment & Pricing', 'Return & Refunds', 'FAQs', 'Privacy Policy', 'Terms & Conditions']

export default function FooterBottom() {
    return (
        <div className={styles.FooterBottom}>
            <div className={styles.section}>
                <h4>mettā muse</h4>
                {column1.map((item, index) => (
                    <button key={index}>{item}</button>
                ))} 
            </div>
            <div className={styles.section}>
                <h4>QUICK LINKS</h4>
                {column2.map((item, index) => (
                    <button key={index}>{item}</button>
                ))}
            </div>
            <div>
                <div>
                    <div>
                        <h4>FOLLOW US</h4>
                        <img src={instagram} alt="instagram" className={styles.img} />
                        <img src={linkedin} alt="linkedin" className={styles.img} />
                    </div>
                    <div>
                        <h4>mettā muse ACCEPTS</h4>
                        <img src={gpay} alt="gpay icon" className={styles.img} />
                        <img src={mastercard} alt="mastercard" className={styles.img} />
                        <img src={paypal} alt="paypal" className={styles.img} />
                        <img src={amex} alt="amex" className={styles.img} />
                        <img src={apple} alt="apple pay" className={styles.img} />
                        <img src={opay} alt="opay" className={styles.img} />
                    </div>
                </div>
            </div>
        </div>
    )
}
