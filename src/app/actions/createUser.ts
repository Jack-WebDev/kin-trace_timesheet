"use server";

import { createUserType, UserType } from "@/schema";
import db from "@/server/db";

export const createEmployee = async (data: createUserType) => {
  try {
    await db.user.create({
      data: {
        name: data.name,
        surname: data.surname,
        email: data.email,
        title: data.title,
        position: data.position,
        employeeType: data.employmentType,
        maritalStatus: data.maritalStatus,
        postalCode: data.postalCode,
        province: data.province,
        startDate: data.startDate,
        ndtEmail: data.ndtEmail,
        contactNumber: data.contactNumber,
        address: data.address,
        city: data.city,
        leaveDays: data.leaveDays,
        ethnicity: data.ethnicity,
        role: data.role,
        dob: data.dob,
        gender: data.gender,
        idNumber: data.idNumber,
        officeLocation: data.officeLocation,
        department: {
          connect: { id: data.department },
        },
      },
    });
  } catch (error) {
    console.error("Error creating employee:", error);
    throw error;
  }
};
