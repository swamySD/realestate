import React from 'react'
import SkipComponet from '../UI/SkipComponet'
import Description from '../UI/Description'
import image from "../../assests/Rectangle 7.png"
import { DefaultConstants } from '../Constants.js/constants'

const FlashScreenFour = ({onNext,onSkip,onPrev}) => {
  return (
    <div>
        <SkipComponet onSkip={onSkip}/>
        <Description onNext={onNext} onPrev={onPrev} heading='Find perfect choice' headingTwo='your future ' span="House" color="#204D6C" description={DefaultConstants.LOREM_TEXT} descriptiontwo={DefaultConstants.LOREM_TEXT2} image={image}/>
    </div>
  )
}

export default FlashScreenFour