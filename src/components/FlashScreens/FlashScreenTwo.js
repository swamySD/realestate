import React from 'react'
import  SkipComponet  from '../UI/SkipComponet'
import Description from '../UI/Description'
import { DefaultConstants } from '../Constants.js/constants'
import image from "../../assests/Rectangle 6.png"

const FlashScreenTwo = ({onNext,onSkip,onPrev}) => {
  return (
    <div>
        <SkipComponet onSkip={onSkip}/>
        <Description onNext={onNext} onPrev={onPrev} heading='Find best place' headingTwo='to stay in ' span="good Price" color="#204D6C" description={DefaultConstants.LOREM_TEXT} descriptiontwo={DefaultConstants.LOREM_TEXT2} image={image}/>
        
    </div>
  )
}

export default FlashScreenTwo