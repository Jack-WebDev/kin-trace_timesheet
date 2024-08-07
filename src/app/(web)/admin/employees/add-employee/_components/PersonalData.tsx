import React from 'react'

type StepProps = {
    setCurrentStep: (step: number) => void;
  }

export default function PersonalData({setCurrentStep}: StepProps) {
    const nextStep = () => setCurrentStep(2);
  
    return (
      <div>
        <h2>Personal Data</h2>
        {/* Your personal data form goes here */}
        <button onClick={nextStep}>Next</button>
      </div>
    );
}
