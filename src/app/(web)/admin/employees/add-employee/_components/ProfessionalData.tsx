import React from 'react'

type StepProps = {
    setCurrentStep: (step: number) => void;
  }

export default function ProfessionalData({setCurrentStep}: StepProps) {
    const nextStep = () => setCurrentStep(3);
    const prevStep = () => setCurrentStep(1);
    
    return (
      <div>
        <h2>Professional Data</h2>
        {/* Your professional data form goes here */}
        <button onClick={prevStep}>Previous</button>
        <button onClick={nextStep}>Next</button>
      </div>
    );
}
