
import { useState } from "react";
import FlashScreen from "./flashScreen";
import FlashScreenTwo from "./FlashScreenTwo";
import FlashScreenThree from "./FlashScreenThree";
import FlashScreenFour from "./FlashScreenFour";

const  MainFlashScreen= ({ onComplete }) => {
    const [currentStep, setCurrentStep] = useState(1);
  
    const handleNextStep = () => {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
      } else {
        // Handle completion of onboarding
        onComplete();
      }
    };

    const handlePrevStep = () => {
      if (currentStep >1)setCurrentStep(currentStep -1);
      
    };
    
    const handleSkip = () => {
    onComplete();
      };
   console.log(currentStep)

  return (
    <div>
      {currentStep === 1 && <FlashScreen onNext={handleNextStep}    onSkip={handleSkip} />}
      {currentStep === 2 && <FlashScreenTwo onNext={handleNextStep}  onPrev={handlePrevStep}  onSkip={handleSkip}/>}
      {currentStep === 3 && <FlashScreenThree onNext={handleNextStep} onPrev={handlePrevStep}  onSkip={handleSkip}/>}
      {currentStep === 4 && <FlashScreenFour onNext={handleNextStep} onPrev={handlePrevStep}  onSkip={handleSkip}/>}
      
    </div>
  );
};

export default MainFlashScreen