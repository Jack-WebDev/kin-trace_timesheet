import React, { useState } from "react";

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
    officeLocation: string;
    startDate: string;
    status: string;
  };
  documentsData: {
    url: string;
  };
};

type StepProps = {
  setCurrentStep: (step: number) => void;
  updateUserData: (key: string, value: any) => void;
  data: UserData;
};

export default function PersonalData({ setCurrentStep }: StepProps) {
  const nextStep = () => setCurrentStep(2);
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
      <div className="grid gap-4">
        <div className="flex items-center justify-between gap-y-2">
          <div className="grid gap-y-2">
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="name"
              value={UserData.personalData.name}
              onChange={(e) =>
                updateUserData("personalData.name", e.target.value)
              }
            />
          </div>

          <div className="grid gap-y-2">
            <label htmlFor="surname">Last Name</label>
            <input
              type="text"
              id="surname"
              value={UserData.personalData.surname}
              onChange={(e) =>
                updateUserData("personalData.surname", e.target.value)
              }
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-y-2">
          <div className="grid gap-y-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={UserData.personalData.email}
              onChange={(e) =>
                updateUserData("personalData.email", e.target.value)
              }
            />
          </div>

          <div className="grid gap-y-2">
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              type="text"
              id="contactNumber"
              value={UserData.personalData.contactNumber}
              onChange={(e) =>
                updateUserData("personalData.contactNumber", e.target.value)
              }
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-y-2">
          <div className="grid gap-y-2">
            <label htmlFor="idNumber">ID Number</label>
            <input
              type="text"
              id="idNumber"
              value={UserData.personalData.idNumber}
              onChange={(e) =>
                updateUserData("personalData.idNumber", e.target.value)
              }
            />
          </div>

          <div className="grid gap-y-2">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="text"
              id="dob"
              value={UserData.personalData.dob}
              onChange={(e) =>
                updateUserData("personalData.dob", e.target.value)
              }
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-y-2">
          <div className="grid gap-y-2">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              value={UserData.personalData.gender}
              onChange={(e) =>
                updateUserData("personalData.gender", e.target.value)
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non_Binary">Non Binary</option>
            </select>
          </div>

          <div className="grid gap-y-2">
            <label htmlFor="ethnicity">Ethnicity</label>
            <select
              id="ethnicity"
              value={UserData.personalData.ethnicity}
              onChange={(e) =>
                updateUserData("personalData.ethnicity", e.target.value)
              }
            >
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Coloured">Coloured</option>
              <option value="Indian">Indian</option>
              <option value="Asian">Asian</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between gap-y-2">
          <div className="grid gap-y-2">
            <label htmlFor="maritalStatus">Marital Status</label>
            <select
              id="maritalStatus"
              value={UserData.personalData.maritalStatus}
              onChange={(e) =>
                updateUserData("personalData.maritalStatus", e.target.value)
              }
            >
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Widowed">Widowed</option>
            </select>
          </div>
          <div className="grid gap-y-2">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={UserData.personalData.address}
              onChange={(e) =>
                updateUserData("personalData.address", e.target.value)
              }
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-y-2">
          <div className="grid gap-y-2">
            <label htmlFor="province">Province</label>
            <input
              type="text"
              id="province"
              value={UserData.personalData.province}
              onChange={(e) =>
                updateUserData("personalData.province", e.target.value)
              }
            />
          </div>
          <div className="grid gap-y-2">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              value={UserData.personalData.city}
              onChange={(e) =>
                updateUserData("personalData.city", e.target.value)
              }
            />
          </div>

          <div className="grid gap-y-2">
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              value={UserData.personalData.postalCode}
              onChange={(e) =>
                updateUserData("personalData.postalCode", e.target.value)
              }
            />
          </div>
        </div>
      </div>
      <button onClick={nextStep}>Next</button>
    </div>
  );
}
