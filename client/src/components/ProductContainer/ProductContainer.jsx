import styles from './ProductContainer.module.css'
import HeaderBar from "./HeaderBar";
import SideBar from "./SideBar";
import MenuCard from './MenuCard';
import { useState } from 'react';


export default function ProductContainer() {
    const [isMenuShow, setisMenuShow] = useState(false);

    return (
        <div className={styles.container}>
            <HeaderBar setisMenuShow={setisMenuShow} />
            <SideBar />
            {isMenuShow && <MenuCard />}
        </div>
    )
}
