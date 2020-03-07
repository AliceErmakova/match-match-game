import React from 'react'
import './styles.css'

export function Card({
    handleClick,
    disabled,
    id,
    solved,
    type,
    flipped,
    height,
    width
}){
    const imgBack = localStorage.getItem('cardImg')

    return(
   
    <div className={`flip-container ${flipped ? 'flipped' : ''}`}
    style={
        {width, height}
    }
    onClick={()=> (disabled ? null : handleClick(id))}
    >
        <div className="flipper">
            <img alt="front img" 
            style={{
                height, width
            }}
            className={flipped ? 'front' : `back`}
            src={flipped || solved ? require(`../../assets/image/${type}.png`) : require(`../../assets/image/${imgBack}.png`)}
           /> 
        </div>
    </div>
    )
}