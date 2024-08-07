"use client";
import { BriefcaseBusiness, FileText, User } from "lucide-react";

import { useState } from "react";
import PersonalData from "./_components/PersonalData";
import ProfessionalData from "./_components/ProfessionalData";
import DocumentsData from "./_components/DocumentsData";
import { clientApi } from "@/client/react";
import { createEmployee } from "../../../../actions/createUser";
import { useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/packages/ui/breadcrumb";
import Link from "next/link";

type FormData = {
  personalData: {
    title: string;
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

export default function AddEmployee() {
  const router = useRouter();
  const departments = clientApi.department.getDepartments.useQuery();
  const [currentStep, setCurrentStep] = useState(1);
  const [FormData, setFormData] = useState<FormData>({
    personalData: {
      title: "",
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
      leaveDays: "",
      role: "",
      officeLocation: "",
      startDate: "",
      status: "Inactive",
    },
    documentsData: {
      url: "",
    },
  });

  const updateFormData = (
    section: keyof FormData,
    field: string,
    value: any,
  ) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [section]: {
        ...prevFormData[section],
        [field]: value,
      },
    }));
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleSubmit = async () => {
    console.log("here");
    const res = await createEmployee({
      name: FormData.personalData.name,
      surname: FormData.personalData.surname,
      email: FormData.personalData.email,
      contactNumber: FormData.personalData.contactNumber,
      idNumber: FormData.personalData.idNumber,
      dob: FormData.personalData.dob,
      gender: FormData.personalData.gender,
      maritalStatus: FormData.personalData.maritalStatus,
      address: FormData.personalData.address,
      city: FormData.personalData.city,
      province: FormData.personalData.province,
      postalCode: FormData.personalData.postalCode,
      ethnicity: FormData.personalData.ethnicity,
      role: FormData.professionalData.role,
      status: FormData.professionalData.status,
      leaveDays: FormData.professionalData.leaveDays,
      officeLocation: FormData.professionalData.officeLocation,
      startDate: FormData.professionalData.startDate,
      department: FormData.professionalData.department,
      ndtEmail: FormData.professionalData.ndtEmail,
      position: FormData.professionalData.position,
      employmentType: FormData.professionalData.employeeType,
      title: FormData.personalData.title,
    });

    router.push("/admin/employees");

    console.log(res);
  };

  return (
    <div>
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/admin/employees">All Employees</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Add New Employee</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="w-full rounded-xl border border-blue-700 p-4">
        <div className="flex items-center gap-x-8">
          <span
            className={`flex items-center gap-x-2 ${currentStep === 1 ? "border-b-2 border-[#dda83a] font-semibold text-[#dda83a]" : "text-gray-900"}`}
          >
            <User
              size={20}
              strokeWidth={currentStep === 1 ? 3 : 2}
              className={`${currentStep === 1 ? "text-[#dda83a]" : "text-gray-900"}`}
            />{" "}
            Personal Information
          </span>
          <span
            className={`flex items-center gap-x-2 ${currentStep === 2 ? "border-b-2 border-[#dda83a] font-semibold text-[#dda83a]" : "text-gray-900"}`}
          >
            <BriefcaseBusiness
              size={20}
              strokeWidth={currentStep === 2 ? 3 : 2}
              className={`${currentStep === 2 ? "text-[#dda83a]" : "text-gray-900"}`}
            />{" "}
            Professional Information
          </span>
          <span
            className={`flex items-center gap-x-2 ${currentStep === 3 ? "border-b-2 border-[#dda83a] font-semibold text-[#dda83a]" : "text-gray-900"}`}
          >
            <FileText
              size={20}
              strokeWidth={currentStep === 3 ? 3 : 2}
              className={`${currentStep === 3 ? "text-[#dda83a]" : "text-gray-900"}`}
            />{" "}
            Documents
          </span>
        </div>
        <div>
          {currentStep === 1 ? (
            <div>
              <div className="grid gap-4">
                <div className="flex items-center justify-between gap-y-2">
                  <div className="grid gap-y-2">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      id="title"
                      value={FormData.personalData.title}
                      onChange={(e) =>
                        updateFormData("personalData", "title", e.target.value)
                      }
                    />
                  </div>
                  <div className="grid gap-y-2">
                    <label htmlFor="name">First Name</label>
                    <input
                      type="text"
                      id="name"
                      value={FormData.personalData.name}
                      onChange={(e) =>
                        updateFormData("personalData", "name", e.target.value)
                      }
                    />
                  </div>

                  <div className="grid gap-y-2">
                    <label htmlFor="surname">Last Name</label>
                    <input
                      type="text"
                      id="surname"
                      value={FormData.personalData.surname}
                      onChange={(e) =>
                        updateFormData(
                          "personalData",
                          "surname",
                          e.target.value,
                        )
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
                      value={FormData.personalData.email}
                      onChange={(e) =>
                        updateFormData("personalData", "email", e.target.value)
                      }
                    />
                  </div>

                  <div className="grid gap-y-2">
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input
                      type="text"
                      id="contactNumber"
                      value={FormData.personalData.contactNumber}
                      onChange={(e) =>
                        updateFormData(
                          "personalData",
                          "contactNumber",
                          e.target.value,
                        )
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
                      value={FormData.personalData.idNumber}
                      onChange={(e) =>
                        updateFormData(
                          "personalData",
                          "idNumber",
                          e.target.value,
                        )
                      }
                    />
                  </div>

                  <div className="grid gap-y-2">
                    <label htmlFor="dob">Date of Birth</label>
                    <input
                      type="text"
                      id="dob"
                      value={FormData.personalData.dob}
                      onChange={(e) =>
                        updateFormData("personalData", "dob", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-y-2">
                  <div className="grid gap-y-2">
                    <label htmlFor="gender">Gender</label>
                    <select
                      id="gender"
                      value={FormData.personalData.gender}
                      onChange={(e) =>
                        updateFormData(
                          "personalData",
                          "gender",
                          e.target.value as "Male" | "Female" | "Non_Binary",
                        )
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
                      value={FormData.personalData.ethnicity}
                      onChange={(e) =>
                        updateFormData(
                          "personalData",
                          "ethnicity",
                          e.target.value,
                        )
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
                      value={FormData.personalData.maritalStatus}
                      onChange={(e) =>
                        updateFormData(
                          "personalData",
                          "maritalStatus",
                          e.target.value,
                        )
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
                      value={FormData.personalData.address}
                      onChange={(e) =>
                        updateFormData(
                          "personalData",
                          "address",
                          e.target.value,
                        )
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
                      value={FormData.personalData.province}
                      onChange={(e) =>
                        updateFormData(
                          "personalData",
                          "province",
                          e.target.value,
                        )
                      }
                    />
                  </div>
                  <div className="grid gap-y-2">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      value={FormData.personalData.city}
                      onChange={(e) =>
                        updateFormData("personalData", "city", e.target.value)
                      }
                    />
                  </div>

                  <div className="grid gap-y-2">
                    <label htmlFor="postalCode">Postal Code</label>
                    <input
                      type="text"
                      id="postalCode"
                      value={FormData.personalData.postalCode}
                      onChange={(e) =>
                        updateFormData(
                          "personalData",
                          "postalCode",
                          e.target.value,
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {currentStep === 2 ? (
            <div>
              <div className="grid  gap-4">
                <div className="flex items-center justify-between gap-y-2">
                  <div>
                    <label htmlFor="employeeType">Employee Type</label>
                    <select
                      id="employeeType"
                      value={FormData.professionalData.employeeType}
                      onChange={(e) =>
                        updateFormData(
                          "professionalData",
                          "employeeType",
                          e.target.value,
                        )
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
                      value={FormData.professionalData.ndtEmail}
                      onChange={(e) =>
                        updateFormData(
                          "professionalData",
                          "ndtEmail",
                          e.target.value,
                        )
                      }
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-y-2">
                  <div>
                    <label htmlFor="department">Department</label>
                    <select
                      id="department"
                      value={FormData.professionalData.department}
                      onChange={(e) =>
                        updateFormData(
                          "professionalData",
                          "department",
                          e.target.value,
                        )
                      }
                    >
                      {departments?.data?.map((department) => (
                        <option key={department.id} value={department.id}>
                          {department.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="position">Position</label>
                    <input
                      type="text"
                      id="position"
                      value={FormData.professionalData.position}
                      onChange={(e) =>
                        updateFormData(
                          "professionalData",
                          "position",
                          e.target.value,
                        )
                      }
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-y-2">
                  <div>
                    <label htmlFor="role">Role</label>
                    <select
                      id="role"
                      value={FormData.professionalData.role}
                      onChange={(e) =>
                        updateFormData(
                          "professionalData",
                          "role",
                          e.target.value,
                        )
                      }
                    >
                      <option value="Admin">Admin</option>
                      <option value="Employee">Employee</option>
                      <option value="Manager">Manager</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="status">Status</label>
                    <input
                      type="text"
                      value={FormData.professionalData.status}
                      readOnly
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-y-2">
                  <div>
                    <label htmlFor="startDate">Start Date</label>
                    <input
                      type="text"
                      id="startDate"
                      value={FormData.professionalData.startDate}
                      onChange={(e) =>
                        updateFormData(
                          "professionalData",
                          "startDate",
                          e.target.value,
                        )
                      }
                    />
                  </div>

                  <div>
                    <label htmlFor="leaveDays">Leave Days</label>
                    <input
                      type="text"
                      id="leaveDays"
                      value={FormData.professionalData.leaveDays}
                      onChange={(e) =>
                        updateFormData(
                          "professionalData",
                          "leaveDays",
                          e.target.value,
                        )
                      }
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="officeLocation">Office Location</label>
                  <input
                    type="text"
                    id="officeLocation"
                    value={FormData.professionalData.officeLocation}
                    onChange={(e) =>
                      updateFormData(
                        "professionalData",
                        "officeLocation",
                        e.target.value,
                      )
                    }
                  />
                </div>
              </div>
            </div>
          ) : null}
          {currentStep === 3 ? (
            <>
              <h2>Docs</h2>
            </>
          ) : null}

          {currentStep <= 1 ? (
            <div>
              <button onClick={handlePrevious}>Previous</button>
              <button onClick={handleNext}>Next</button>
            </div>
          ) : (
            <div>
              <button onClick={handlePrevious}>Previous</button>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
