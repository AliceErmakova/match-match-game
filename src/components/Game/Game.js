import React, { useState, useEffect } from 'react';
import Board from '../Board/Board';
import Timer from '../Timer/Timer';
import initializeVal from '../value'
import {Button} from '../Button/Button'
import './styles.css'
import GameEnd from '../GameEnd/GameEnd'

export default function  Game ()  {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)
  
  useEffect(()=>{
    setCards(initializeVal())
  }, [])

  const handleClick = (id) => {
    setDisabled(true)
    if(flipped.length === 0){
      setFlipped([id])
      setDisabled(false)
    } 
    else {
      if(sameCardClicked(id)) return
      setFlipped([flipped[0], id])
      if(isMatch(id)){
        setSolved([...solved, flipped[0], id])
        resetCards()
      } else {
        setTimeout(resetCards, 2000)
      }
    }
  }

  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }

  const sameCardClicked = (id) => flipped.includes(id)
  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id)
    const flippedCard = cards.find((card) => flipped[0] === card.id)
    return flippedCard.type === clickedCard.type
  }

  const solvedLen = solved
  const solvedLength = solvedLen.length
  const numCards= localStorage.getItem('numCards')

  const NumSolvedCard = numCards*2

  const StopGame = ({solved, cards, disabled, flipped, handleClick}) =>{
    if(NumSolvedCard===solvedLength){
      return <GameEnd />
    }
    return (
      <div>
          <h2>Can you remember where the cards are?</h2>
          <div className="wrapper">
            <Timer solved={solved}/> 
            <Button className="btn" nameBtn='Quit' href="/" /> 
          </div>
          <Board solved={solved} cards={cards}  disabled={disabled} flipped={flipped} handleClick={handleClick} />
      </div>
    )
      
  }

    return (
        <div className="Game">
          <StopGame  solved={solved} cards={cards}  disabled={disabled} flipped={flipped} handleClick={handleClick}/>
        </div>
    );
  }

