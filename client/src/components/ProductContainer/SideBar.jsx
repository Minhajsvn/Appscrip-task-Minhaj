import Accordion from "../Accordion/Accordion";
import styles from './ProductContainer.module.css'

const accordionData = [
    { title: "IDEAL FOR", content: ['Men', 'Women', 'Baby & Kids'] },
    { title: "OCCASION", content: [] },
    { title: "WORK", content: [] },
    { title: "FABRIC", content: [] },
    { title: "SEGMENT", content: [] },
    { title: "SUITABLE FOR", content: [] },
    { title: "RAW MATERIALS", content: [] },
    { title: "PATTERN", content: [] },
];

export default function SideBar({ setDisplaySideBar }) {
    return (
        <div className={styles.sideBar}>
            <label htmlFor="customizable">
                <input type="checkbox" name="customizable" id="customizable" />
                CUSTOMIZABLE
            </label>
            <Accordion items={accordionData} />
        </div>
    )
}
