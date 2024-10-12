import styles from './ProductContainer.module.css'


const menus = ['RECOMMENDED', 'NEWEST FIRST', 'POPULAR', 'PRICE: HIGH TO LOW', 'PRICE: LOW TO HIGH'];

export default function MenuCard() {
    return (
        <div className={styles.menuCard}>
            {menus.map((item, index) => (
                <button className={styles.menuButton} key={index}>{item}</button>
            ))}
        </div>
    )
}
