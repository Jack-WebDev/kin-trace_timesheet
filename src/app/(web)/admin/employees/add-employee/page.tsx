"use client";
import { BriefcaseBusiness, FileText, User } from "lucide-react";

import { useState } from "react";
import PersonalData from "./_components/PersonalData";
import ProfessionalData from "./_components/ProfessionalData";
import DocumentsData from "./_components/DocumentsData";
export default function AddEmployee() {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div>

      <div className="w-full rounded-xl border border-blue-700 p-4">
        <div className="flex items-center gap-x-8">
          <span className={`flex items-center gap-x-2 ${currentStep === 1 ? "text-[#dda83a] border-b-2 border-[#dda83a] font-semibold": "text-gray-900"}`}>
            <User size={20} strokeWidth={currentStep === 1 ? 3 : 2} className={`${currentStep === 1 ? "text-[#dda83a]": "text-gray-900"}`} /> Personal Information
          </span>
          <span className={`flex items-center gap-x-2 ${currentStep === 2 ? "text-[#dda83a] border-b-2 border-[#dda83a] font-semibold": "text-gray-900"}`}>
            <BriefcaseBusiness size={20} strokeWidth={currentStep === 2 ? 3 : 2} className={`${currentStep === 2 ? "text-[#dda83a]": "text-gray-900"}`} /> Professional Information
          </span>
          <span className={`flex items-center gap-x-2 ${currentStep === 3 ? "text-[#dda83a] border-b-2 border-[#dda83a] font-semibold": "text-gray-900"}`}>
            <FileText size={20} strokeWidth={currentStep === 3 ? 3 : 2} className={`${currentStep === 3 ? "text-[#dda83a]": "text-gray-900"}`} /> Documents
          </span>
        </div>
        <div>
          {currentStep === 1? <PersonalData setCurrentStep={setCurrentStep}/> : null}
          {currentStep === 2? <ProfessionalData setCurrentStep={setCurrentStep}/> : null}
          {currentStep === 3? <DocumentsData setCurrentStep={setCurrentStep}/> : null}
        </div>
      </div>
    </div>
  );
}
