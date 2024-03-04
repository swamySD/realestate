import React from 'react'
import { LOREM_TEXT,LOREM_TEXT2 } from '../Constants.js/constants'
import { DefaultConstants } from '../Constants.js/constants'
import SkipComponet from '../UI/SkipComponet'
import Description from '../UI/Description'
import image from '../../assests/third.png'
const FlashScreenThree = ({onNext,onSkip,onPrev}) => {
  return (
    <div>
        <SkipComponet onSkip={onSkip}/>
        <Description onNext={onNext} onPrev={onPrev} heading='Fast sell your property' headingTwo='in just ' span="one click" color="#204D6C" description={DefaultConstants.LOREM_TEXT} descriptiontwo={DefaultConstants.LOREM_TEXT2} image={image}/>
    </div>
  )
}

export default FlashScreenThree