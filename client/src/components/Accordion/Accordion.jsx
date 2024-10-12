import { useState } from "react";
import styles from './Accordion.module.css';
import downArrow from '../../assets/down-arrow.svg'
import upArrow from '../../assets/up-arrow.svg'

/*
content: ['Men', 'Women', 'Baby & Kids']
*/

function AccordionItem({ title, content, isActive, onClick }){
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckboxChange = (item) => {
        setSelectedItems((prevSelectedItems) =>
            prevSelectedItems.includes(item)
                ? prevSelectedItems.filter((selectedItem) => selectedItem !== item)
                : [...prevSelectedItems, item]
        );
    };

    const handleUnselectAll = () => {
        setSelectedItems([]);
    };

    return (
        <div className={styles.accordionItem}>
            <div className={styles.accordionHeader} onClick={onClick}>
                <h4>{title}</h4>
                <span>{isActive ? <img src={upArrow} alt="" /> : <img src={downArrow} alt="" />}</span>
            </div>
            <div>ALL</div>
            <div className={styles.checkboxList}>
                {isActive && (
                    <div>
                        <button className={styles.unselectAllButton} onClick={handleUnselectAll}>
                        Unselect All
                    </button>
                    {content.map((item, index) => (
                        <label htmlFor={item} key={index}>
                            <input 
                                type="checkbox" 
                                name={item} 
                                id={item} 
                                checked={selectedItems.includes(item)}
                                onChange={() => handleCheckboxChange(item)}
                            />
                            {item}
                        </label>
                    ))}
                    </div>
            )}</div>
        </div>
    )
}

export default function Accordion({ items }) {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.accordion}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isActive={activeIndex === index}
                    onClick={() => handleItemClick(index)}
                />
            ))}
        </div>
    );
}
