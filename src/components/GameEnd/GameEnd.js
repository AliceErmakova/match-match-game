import React from 'react'
import styles from './styles.module.css'
import { Button } from '../Button'

export default function GameEnd() {

    return <div className="container box.join(' ')">
                <h1 className={styles.MainHeading}>Well Done!</h1>
                    <div className={styles.wrapper}>
                    <span className={styles.textName}>{localStorage.getItem("FirstName")}</span>, you finished this game with time: {localStorage.getItem("minuts")} min {localStorage.getItem("seconds")} s 
                    </div>
                    <div className={styles.wrapperBtn}>
                        <Button nameBtn='Restart game' href="/game" />
                        <Button nameBtn='Quit' href="/" />   
                    </div>
            </div> 
}
