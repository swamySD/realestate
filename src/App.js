import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate,useNavigate } from 'react-router-dom';
import MainFlashScreen from './components/FlashScreens/MainFlashScreen';
import LoginPage from './Pages/LoginPage';
// OnboardingStep1, OnboardingStep2, OnboardingStep3, and OnboardingStep4 components are assumed to be defined similarly as before.



// const LoginPage = ({ navigateToRegister }) => (
//   <div>
//     <h2>Login Page</h2>
//     {/* ... Login page content */}
//     <button onClick={navigateToRegister}>Register Now</button>
//   </div>
// );

const RegisterPage = () => (
  <div>
    <h2>Register Page</h2>
    {/* ... Register page content */}
  </div>
);

const App = () => {
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  

  const handleOnboardingComplete = () => {
    setOnboardingComplete(true);
  };

  // const handleSkipOnboarding = () => {
  //   // Handle skipping the onboarding
  //   console.log('Onboarding skipped!');
  // };

  const navigateToRegister = () => {
    // Navigate to the register page
    // This is where you would replace this logic with React Router v6 navigation
    console.log('Navigate to register page');
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            !onboardingComplete ? (
              <MainFlashScreen onComplete={handleOnboardingComplete}/>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={<LoginPage navigateToRegister={navigateToRegister} />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
