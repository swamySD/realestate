import React from 'react'
import HomeImage from '../../assests/Mask group.png'
import  classes from './HomeIcon.module.css'
const HomeIcon = () => {
  return (
    <img src={HomeImage} alt='Home-Icon' className={classes.image} />
  )
}

export default HomeIcon