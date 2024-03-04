import React from 'react'
import classes from './InputCard.module.css'
const InputCard = ({children}) => {
  return (
    <div className={classes.card}>
        {children}
    </div>
  )
}

export default InputCard