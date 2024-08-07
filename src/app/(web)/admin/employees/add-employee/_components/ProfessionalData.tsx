import React, { useState } from "react";

type StepProps = {
  setCurrentStep: (step: number) => void;
  updateUserData: (key: string, value: any) => void;
  data: UserData;
};

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
    leaveDays: string;
    role: string;
    officeLocation: string;
    startDate: string;
    status: string;
  };
  documentsData: {
    url: string;
  };
};

export default function ProfessionalData({ setCurrentStep }: StepProps) {
  const nextStep = () => setCurrentStep(3);
  const prevStep = () => setCurrentStep(1);
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
      position: "",
      role: "",
      leaveDays: "",
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
      <div className="grid  gap-4">
        <div className='flex items-center justify-between gap-y-2'>
          <div>
            <label htmlFor="employeeType">Employee Type</label>
            <select
              id="employeeType"
              value={UserData.professionalData.employeeType}
              onChange={(e) =>
                updateUserData("professionalData.employeeType", e.target.value)
              }
            >
              <option value="Contract">Contract</option>
              <option value="Full_Time">Full Time</option>
              <option value="Part_Time">Part Time</option>
              <option value="Intern">Intern</option>
            </select>
          </div>
          <div>
            <label htmlFor="ndtEmail">NDT Email</label>
            <input
              type="text"
              id="ndtEmail"
              value={UserData.professionalData.ndtEmail}
              onChange={(e) =>
                updateUserData("professionalData.ndtEmail", e.target.value)
              }
            />
          </div>
        </div>
        <div className='flex items-center justify-between gap-y-2'>
          <div>
            <label htmlFor="department">Department</label>
            <select
              id="department"
              value={UserData.professionalData.department}
              onChange={(e) =>
                updateUserData("professionalData.department", e.target.value)
              }
            >
              <option value="Finance">Finance</option>
              <option value="H.R">H.R</option>
              <option value="I.T">I.T</option>
            </select>
          </div>

          <div>
            <label htmlFor="position">Position</label>
            <input
              type="text"
              id="position"
              value={UserData.professionalData.position}
              onChange={(e) =>
                updateUserData("professionalData.position", e.target.value)
              }
            />
          </div>
        </div>

        <div className='flex items-center justify-between gap-y-2'>
            <div>
                <label htmlFor="role">Role</label>
                <select
                    id="role"
                    value={UserData.professionalData.role}
                    onChange={(e) =>
                        updateUserData("professionalData.role", e.target.value)
                    }
                >
                    <option value="Admin">Admin</option>
                    <option value="Employee">Employee</option>
                    <option value="Manager">Manager</option>
                </select>
            </div>
            <div>
                <label htmlFor="status">Status</label>
                <select
                    id="status"
                    value={UserData.professionalData.status}
                    onChange={(e) =>
                        updateUserData("professionalData.status", e.target.value)
                    }
                >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
            </div>



        </div>
        <div className='flex items-center justify-between gap-y-2'>
          <div>
            <label htmlFor="startDate">Start Date</label>
            <input
              type="text"
              id="startDate"
              value={UserData.professionalData.startDate}
              onChange={(e) =>
                updateUserData("professionalData.startDate", e.target.value)
              }
            />
          </div>

          <div>
            <label htmlFor="leaveDays">Leave Days</label>
            <input
              type="text"
              id="leaveDays"
              value={UserData.professionalData.leaveDays}
              onChange={(e) =>
                updateUserData("professionalData.leaveDays", e.target.value)
              }
            />
          </div>
        </div>
        <div>
            <label htmlFor="officeLocation">Office Location</label>
            <input
              type="text"
              id="officeLocation"
              value={UserData.professionalData.officeLocation}
              onChange={(e) =>
                updateUserData(
                  "professionalData.officeLocation",
                  e.target.value,
                )
              }
            />
        </div>
      </div>
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
}
