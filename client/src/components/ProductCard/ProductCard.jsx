import styles from './ProductCard.module.css';
import heartIcon from '../../assets/heart.svg'

export default function ProductCard({ key, item }) {
    return (
        <div className={styles.card} key={key}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <h3>{item.title}</h3>
            <div className={styles.description}>
                <p className={styles.callToAction}>Sign in or Create an account to see pricing</p>
                <img src={heartIcon} alt='add to wishlist' className={styles.icon} />
            </div>
        </div>
    )
}
