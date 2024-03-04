import React from 'react';
import maskimage from '../../assests/Mask group.png'
import image from '../../assests/image 3.png'

import classes from './flashScreen.module.css';
import FlashScreenButton from '../UI/flashScreenButton';


const FlashScreen = ({onNext}) => {
  console.log('check')
  return (
    <div className={classes.container}>
      <div className={classes['gradient-overlay']}></div>
      <img src={maskimage} className={classes.maskimage}  alt="mask-view"/>
      <h1 className={classes.title}>Rise <br/>Real Estate </h1>
      <img className={classes.image} src={image} alt="flash-view" />
      <FlashScreenButton text={"let's start"} onNext={onNext} top="80%" left="50%"/>
      <p className={classes.version}><span style={{fontSize:'14px',fontWeight:'100'}}>Made with love</span><br/><span style={{fontSize:'10px',fontWeight:'700'}}>v.1.0</span></p>
    </div>
  );
}

export default FlashScreen;
