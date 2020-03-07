import React from 'react'
import styles from './styles.module.css'
import { Button } from '../Button'

export default function StartPage() {
    
    return <div className="container">
                <h1 className={styles.MainHeading}>React JS match-match game</h1>
                    <div className={styles.wrapper}>
                        <h4 className={styles.heading}>How to play:</h4>
                        <p className={styles.playRights}>Memory is a counter game where the object is to find pairs. When the game begins, all pictures are hidden.</p>
                        <h4 className={styles.heading}>To play:</h4>
                        <p className={styles.playRights}>1. Select two cards to try match the pictures<br /> 
                           2. If you match the pictures you can go again. <br /> 
                           3. If they didn't match it is the computer turn them<br />
                           4. The player that finds all pairs wins!<br />
                           5. Have Fun!</p>
                    </div>
                    <Button nameBtn='New game' href="/formUser" />
            </div> 
}
