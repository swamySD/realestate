import React from 'react'
import classes from './flashScreenButton.module.css'
const FlashScreenButton = ({text,onNext,top,left}) => {


  return (
    <button  onClick={onNext} className={classes.button} style={{top:top,left:left}}>{text}</button>
  )
}

export default FlashScreenButton