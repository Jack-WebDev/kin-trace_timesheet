import React from 'react'

type StepProps = {
    setCurrentStep: (step: number) => void;
  }

export default function DocumentsData({setCurrentStep}: StepProps) {
    const prevStep = () => setCurrentStep(2);
  
    return (
      <div>
        <h2>Documents Data</h2>
        {/* Your documents data form goes here */}
        <button onClick={prevStep}>Previous</button>
        {/* Submit button or other logic */}
      </div>
    );
}
