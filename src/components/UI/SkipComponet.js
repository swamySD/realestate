import React from 'react'
import HomeIcon from './HomeIcon'
import SkipButton from './SkipButton'
import classes from './SkipComponent.module.css'
 const SkipComponet = ({onSkip}) => {
  return (
    <div className={classes.container}>
        <HomeIcon/>
        <SkipButton onSkip={onSkip}/>
    </div>
  )
}

export default SkipComponet
