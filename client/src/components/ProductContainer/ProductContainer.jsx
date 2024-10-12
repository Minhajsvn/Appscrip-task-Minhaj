import styles from './ProductContainer.module.css'
import HeaderBar from "./HeaderBar";
import SideBar from "./SideBar";
import MenuCard from './MenuCard';
import { useState } from 'react';
import ProductFeed from './ProductFeed';


export default function ProductContainer() {
    const [isMenuShow, setisMenuShow] = useState(false);
    const [displaySideBar, setDisplaySideBar] = useState(false);
    
    return (
        <div className={styles.container}>
            <HeaderBar setisMenuShow={setisMenuShow} setDisplaySideBar={setDisplaySideBar} />
            {isMenuShow && <MenuCard />}
            <div className={styles.layoutContainer}>
                {displaySideBar && <SideBar  />}
                <ProductFeed displaySideBar={displaySideBar} />
            </div>
        </div>
    )
}
