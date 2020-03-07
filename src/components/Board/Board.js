import React from 'react'
import './styles.css'
import {Card} from '../Card'


export default function Board({disabled, solved, cards, flipped, handleClick}){

    return(
     <div className="board" >
        {
            cards.map((card) =>(
            <Card  
                key={card.id}
                id={card.id}
                type={card.type}  
                width={150} 
                height={150} 
                flipped={flipped.includes(card.id)}
                handleClick={handleClick}
                solved={solved.includes(card.id)}
                disabled={disabled || solved.includes(card.id)}
                />
            ))
        }
    </div>
    )
}
