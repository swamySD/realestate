import React from 'react';
import classes from './SkipButton.module.css';
const SkipButton = ({onSkip}) => {
  return (
    <button onClick={onSkip} className={classes.skipButton}>skip</button>
  )
}

export default SkipButton