import React from 'react'
import classes from './Description.module.css'
import FlashScreenButton from './flashScreenButton'
import ArrowButton from './ArrowButton'
const Description = ({heading,headingTwo,span,description,descriptiontwo,color,image,onNext,onPrev }) => {
    
  return (
    <div className={classes.container}>
    <h1 className={classes.heading}>{heading}<br/>{headingTwo}<span style={{color:color,fontWeight:600}}>{span}</span></h1>
        <p className={classes.description}>{description}<br/>{descriptiontwo}</p>
        <div className={classes['button-container']}>
        <ArrowButton onPrev={onPrev}/>    
        <FlashScreenButton onNext={onNext} text='Next' top="88%" left="55%"/>
        </div>
        <img src={image} alt="flash-screen" className={classes.images}/>
    </div>
  )
}

export default Description