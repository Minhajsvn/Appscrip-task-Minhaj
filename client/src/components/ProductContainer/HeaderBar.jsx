import { useState } from "react"
import styles from './ProductContainer.module.css'
import downArrow from '../../assets/down-arrow.svg'

export default function HeaderBar({ setisMenuShow, setDisplaySideBar } ) {
    const [isShow, setIsShow] = useState(false);
    
    
    const selectSortOptions = () => {
        setisMenuShow(prevState => !prevState)
    }

    return (
        <div className={styles.headerContainer}>
            <div className={styles.leftHeader}>
                <div className={styles.headerText}>3245 ITEMS</div>
                <button onClick={() => {
                    setIsShow(prevState => !prevState)
                    setDisplaySideBar(prevState => !prevState)
                }}>{isShow ? '< HIDE' : '> SHOW'} FILTER</button>
            </div>
            <button className={styles.recomendButton} onClick={selectSortOptions}>
                RECOMMENDED
                <img src={downArrow} alt="" className={styles.icon} />
            </button>
        </div>
    )
}
