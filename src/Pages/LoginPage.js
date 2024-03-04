import React, { useState } from 'react'
import { DefaultConstants } from '../components/Constants.js/constants'
import classes from './LoginPage.module.css'
import image from '../assests/undraw_city_life_gnpr 1.png'
import Input from '../components/MainComponents/Input'
import InputCard from '../components/UI/InputCard'
import EmailImage from '../assests/Email.png'
import LockImage from '../assests/Lock.png'
import google from '../assests/Layout.png'
import facebook from '../assests/Facebook - normal.png'

import { CiUnlock } from "react-icons/ci";

const LoginPage = () => {
  const [formData,setFormData]=useState({
    email:'',password:''
  })
  const [showPassword,setShowPassword]=useState(false)

  const inputChangeHandler=(value,name)=>{
    setFormData({...formData,[name]:value})
    
  } 
 
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log(formData)
    setFormData({
      email:'',password:''
    })
  }
  
  return (
    <div>
        <img src={image} alt="login-view" className={classes.image}/>
        <h1 className={classes.title}>{DefaultConstants.LETS_SIGN_IN}<span className={classes.text}>{DefaultConstants.SIGN_IN}  </span></h1>
        {/* <p className={classes.description}>{DefaultConstants.LETS_SING_IN_TEXT}</p> */}
        <form onSubmit={submitHandler}>
          <InputCard>

          <img src={EmailImage} alt="email" className={` ${formData.email.length>0 ? classes.istyping : classes.loginImage}`}/>
        <Input type='email' value={formData.email} name='email' onChange={inputChangeHandler} placeholder='Email'/>
        </InputCard>
        <InputCard>
        {!showPassword &&<img src={LockImage} alt="email" className={` ${formData.password.length>0 ? classes.istyping : classes.loginImage}`}/>}
        {showPassword && <CiUnlock className={classes.istyping}/>}
        <Input type={showPassword?'text':'password'} value={formData.password} name='password' onChange={inputChangeHandler} placeholder='Password'/>
        </InputCard>
        <div className={classes.fogotTextCon}>
          <span className={classes.forgotText}>Forgot Password?</span>
          <span className={classes.forgotText} onClick={()=>setShowPassword(!showPassword)}>{showPassword?'Hide Password':'Show password'}</span>
        </div>
        <div className={classes.loginButtonContainer}>
        <button className={classes.login} >Login</button>
        </div>
        < div className={classes['login-button-container']}>
          <button className={classes['login-button']}><img src={google} alt="google"/></button>
          <button className={classes['login-button']} >
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512" fill=''> 
            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
            </svg>
          </button>
        </div>
        <p className={classes.registertag}>Don't have an account?<span style={{color:'#1F4C6B'}}>Register</span></p>
        </form>
    </div>
  )
}

export default LoginPage