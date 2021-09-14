import React from 'react'
import { Support } from "../components/support";
import { Subscribe } from "../components/subscribe";
import styles from '../styles/extras.module.scss'


export default function Extras() {
    return (
        <div className={styles.extras}>
           
           <div className={styles.contents}> <div className={styles.support}><Support/></div>
            <div className={styles.sub}>
                <h1>Subscribe</h1>
                <section><Subscribe/></section></div></div>
        </div>
    )
}
