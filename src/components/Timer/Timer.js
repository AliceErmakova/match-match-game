import React, { useState, useEffect} from 'react';

const Timer = ({solved}) => {
    const [seconds, setSeconds] = useState(0)
    const [minuts, setMinuts] = useState(0)
    const [isActive, setIsActive] = useState(false)

    const solvedLen = solved
    const solvedLength = solvedLen.length
    const numCards= localStorage.getItem('numCards')

    const NumSolvedCard = numCards*2

    function stopTimer(){
        setIsActive(true)
    }

   localStorage.setItem('IsActive', isActive)

   useEffect(() => {
       let interval = null
       if (!isActive) {
           if(seconds<60){
              interval = setInterval(() => {
              setSeconds(seconds => seconds + 1); 
              }, 1000)  
           }
           else if(seconds === 60){
               setSeconds(0)
               setMinuts(minuts+1)
           }
       }   
       if(solvedLength===NumSolvedCard){
        stopTimer()
        localStorage.setItem('seconds', seconds)
        localStorage.setItem('minuts', minuts)
       }
           
           else if (isActive && seconds !==0 && minuts !==0){
               clearInterval(interval)
           }
           return () => clearInterval(interval);
       }, [isActive, seconds, minuts, solvedLength, NumSolvedCard]);

       return (
           <div>
             <div className="time">Timer: {minuts} min {seconds} s</div>  
           </div>
       )
}
export default  Timer
