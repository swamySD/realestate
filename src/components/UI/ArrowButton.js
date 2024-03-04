import React from 'react'

import arrowIcon from '../../assests/arrow-left-line.png'
import classes from './ArrowButton.module.css'
const ArrowButton = ({onPrev}) => {
  return (
    <button onClick={onPrev} className={classes.arrowbutton}><img className={classes.image} src={arrowIcon} alt="arrow-icon"/></button>
  )
}

export default ArrowButton