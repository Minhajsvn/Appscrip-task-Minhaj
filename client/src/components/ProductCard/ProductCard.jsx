import styles from './ProductCard.module.css';
import demoImage from '../../assets/demoImage.png'
import heartIcon from '../../assets/heart.svg'

export default function ProductCard() {
    return (
        <div className={styles.card}>
            <img src={demoImage} alt="" />
            <h3>PRODUCT NAME</h3>
            <div className={styles.description}>
                <p className={styles.callToAction}>Sign in or Create an account to see pricing</p>
                <img src={heartIcon} alt="" className={styles.icon} />
            </div>
        </div>
    )
}
