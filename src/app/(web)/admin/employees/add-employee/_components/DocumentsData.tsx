import React, { useState } from 'react'

type StepProps = {
    setCurrentStep: (step: number) => void;
    updateUserData: (key: string, value: any) => void;
    data: UserData;
  }


  type UserData = {
    personalData: {
      name: string;
      surname: string;
      email: string;
      contactNumber: string;
      idNumber: string;
      dob: string;
      gender: string;
      maritalStatus: string;
      address: string;
      city: string;
      province: string;
      postalCode: string;
      ethnicity: string;
    };
    professionalData: {
      employeeType: string;
      ndtEmail: string;
      department: string;
      position: string;
      role: string;
      leaveDays: string;
      officeLocation: string;
      startDate: string;
      status: string;
    };
    documentsData: {
      url: string;
    };
  };
export default function DocumentsData({setCurrentStep}: StepProps) {
    const prevStep = () => setCurrentStep(2);
    const [UserData, setUserData] = useState<UserData>({
        personalData: {
          name: "",
          surname: "",
          email: "",
          contactNumber: "",
          idNumber: "",
          dob: "",
          gender: "",
          maritalStatus: "",
          address: "",
          city: "",
          province: "",
          postalCode: "",
          ethnicity: "",
        },
        professionalData: {
          employeeType: "",
          ndtEmail: "",
          department: "",
          leaveDays:"",
          position: "",
          role: "",
          officeLocation: "",
          startDate: "",
          status: "",
        },
        documentsData: {
          url: "",
        },
      });
    
      const updateUserData = (key: string, value: any) => {
        setUserData((prevUserData) => ({
          ...prevUserData,
          [key]: value,
        }));
      };
  
    return (
      <div>
        <h2>Documents Data</h2>
        {/* Your documents data form goes here */}
        {/* <button onClick={prevStep}>Previous</button>
        <button>Submit</button> */}
      </div>
    );
}
