import React from 'react';
import styles from './styles.module.css';

export function Button(props) {
    return (
      <button className={styles.button} onClick={props.click}><a href={props.href}>{props.nameBtn}</a></button>
    );
}