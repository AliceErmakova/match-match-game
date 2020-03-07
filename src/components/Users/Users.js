import styles from './styles.module.css'
import React, {useState, useRef} from 'react';
import { Button } from '../Button'

export default function Users(){
 
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  localStorage.setItem('firstName', firstName)
  localStorage.setItem('lastName', lastName)
  localStorage.setItem('email', email)

  const onSubmitHandler = (event) => {
    event.preventDefault()
  }
 
  let firstNameRef = useRef()
  let lastNameRef = useRef()
  let emailRef = useRef()
  
  const handleClick = () => {
    setFirstName(firstNameRef.current.value)
    setLastName(lastNameRef.current.value)
    setEmail(emailRef.current.value)
  }

    return(
      
        <div className="container">
        <h2 className={styles.heading}>Player Registration</h2>
        <form id="user" onSubmit={onSubmitHandler}>
        <div className={styles.wrapper}><label htmlFor="firstName" className={styles.text}>FirstName:</label><input id="firstname" className={styles.input} type="text" name="firstName"  ref={firstNameRef} required="required"  /></div>
        <div className={styles.wrapper}><label htmlFor="LastName" className={styles.text}>LastName:</label><input className={styles.input} type="text" name="LastName" ref={lastNameRef}  required="required"/></div>
        <div className={styles.wrapper}><label htmlFor="email" className={styles.text}>Email:</label><input className={styles.inputMail} type="email" name="email" ref={emailRef} required="required" /></div>
        <Button type="submit" className={styles.btnSubmit} nameBtn="Start Game" href="/Settings" onClick={handleClick}   />
        </form>
      </div> 
    )
}



