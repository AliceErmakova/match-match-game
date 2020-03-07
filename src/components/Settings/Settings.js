import React, { useState } from 'react'
import styles from './styles.module.css'
import { Button } from '../Button'
import imgBack1 from '../../assets/image/imgBack1.png'
import imgBack2 from '../../assets/image/imgBack2.png'
import imgBack3 from '../../assets/image/imgBack3.png'
import imgBack4 from '../../assets/image/imgBack4.png'

function Settings () {
    const [cardImg, setCardImg] = useState('imgBack1')
    const [numCard, setNumCard] = useState('arr5')
    const [numCards, setNumCards] = useState(5)

    localStorage.setItem('cardImg', cardImg)
    localStorage.setItem('numCard', numCard)
    localStorage.setItem('numCards', numCards)

    const onSubmitHandler = (event) =>
    event.preventDefault()
   
    const setGame = () => {
        setNumCard('arr5')
        setNumCards(5)
    }
    const setGame1 = () => {
        setNumCard('arr10')
        setNumCards(10)
    }
    const setGame2 = () => {
        setNumCard('arr15')
        setNumCards(15)
    }
      return (
        <div className="container">
            <h1 className={styles.heading}>Initial settings game</h1>
                <div className={styles.wrapper}>
                    <form onSubmit={onSubmitHandler}>
                        <div>Please, choose color card:
                            <br />
                            <div className={styles.boxColor}>
                                <input type="radio" name="cardImg" value={cardImg} defaultChecked="checked" onClick={() => {setCardImg('imgBack1')}}  /> 
                                <div  className={styles.cardimgBack}><img alt="imgBack1" src={imgBack1} width="70" height="70" /></div>  
                            </div> 
                            <div className={styles.boxColor}>
                                <input type="radio" name="cardImg" value={cardImg} onClick={() => {setCardImg('imgBack2')}} /> 
                                <div  className={styles.cardimgBack}><img alt="imgBack2" src={imgBack2} width="70" height="70" /></div>
                            </div>
                            <div className={styles.boxColor}>
                                <input type="radio" name="cardImg" value={cardImg} onClick={() => {setCardImg('imgBack3')}} /> 
                                <div  className={styles.cardimgBack}><img alt="imgBack3" src={imgBack3} width="70" height="70" /></div>
                            </div>
                            <div className={styles.boxColor}>
                                <input type="radio"name="cardImg" value={cardImg} onClick={() => {setCardImg('imgBack4')}} /> 
                                <div  className={styles.cardimgBack}><img alt="imgBack4" src={imgBack4} width="70" height="70" /></div>
                            </div>
                        </div>
                    </form>
                    <form className={styles.formDifficulty} onSubmit={onSubmitHandler}>
                        <div>Please, choose difficulty level of the game:
                            <br />
                            <div className={styles.boxColor}>
                                <input type="radio" name="numCard" value={numCard} defaultChecked="checked" onClick={()=> setGame()} />
                                easy    
                            </div> 
                            <div className={styles.boxColor}>
                                <input type="radio" name="numCard" value={numCard} onClick={()=> setGame1()} /> 
                                middle
                            </div>
                            <div className={styles.boxColor}>
                                <input type="radio" name="numCard" value={numCard} onClick={()=> setGame2()} /> 
                                difficult
                            </div>
                        </div>
                    </form> 
                </div>    
            <Button className="btn" nameBtn='Start' href="/game" />
        </div>
      )
}

export default Settings


