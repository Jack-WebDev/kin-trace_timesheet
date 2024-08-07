import { nativeEnum, object, string, z } from "zod";

export const createUserSchema = object({
  title: string(),
  name: string({
    required_error: "Name is required",
    invalid_type_error: "Invalid entry",
  }),
  surname: string({
    required_error: "Surname  is required",
    invalid_type_error: "invalid entry ",
  }),
  email: string({
    required_error: "Email is required",
    invalid_type_error: "Email must be a string",
  }).email({ message: "Invalid email address" }),
  password: string().optional(),
  idNumber: string({
    required_error: "ID Number is required",
    invalid_type_error: "ID Number must be a string",
  })
    .min(13, { message: "ID Number must be 13 characters" })
    .max(13, { message: "ID Number must be 13 characters" }),
  dob: string(),
  contactNumber: string({
    required_error: "Contact number required",
  })
    .startsWith("0", { message: "Contact must start with '0'" })
    .refine((val) => val.length === 10, { message: "invalid phone length" }),
  ndtEmail: string({
    required_error: "NDT Email is required",
    invalid_type_error: "NDT Email must be a string",
  })
    .email({ message: "Invalid NDT email address" })
    .refine((email) => email.endsWith("@ndt.co.za"), {
      message: "NDT Email must be a valid NDT email",
    }),
  gender: string(),
  position: string(),
  employeeType: string(),
  maritalStatus: string(),
  address: string(),
  city: string(),
  province: string(),
  leaveDays: string(),
  postalCode: string(),
  ethnicity: string(),
  role: string(),
  status: string(),

  officeLocation: string(),
  startDate: string(),
  department: string(),
});

export const userId = string();

export const updateUserSchema = object({
  id: string().cuid(),
  title: string(),
  name: string({
    required_error: "Name is required",
    invalid_type_error: "Invalid entry",
  }),
  surname: string({
    required_error: "Surname  is required",
    invalid_type_error: "invalid entry ",
  }),
  email: string({
    required_error: "Email is required",
    invalid_type_error: "Email must be a string",
  }).email({ message: "Invalid email address" }),
  password: string().optional(),
  idNumber: string({
    required_error: "ID Number is required",
    invalid_type_error: "ID Number must be a string",
  })
    .min(13, { message: "ID Number must be 13 characters" })
    .max(13, { message: "ID Number must be 13 characters" }),
  dob: string(),
  contactNumber: string({
    required_error: "Contact number required",
  })
    .startsWith("0", { message: "Contact must start with '0'" })
    .refine((val) => val.length === 10, { message: "invalid phone length" }),
  ndtEmail: string({
    required_error: "NDT Email is required",
    invalid_type_error: "NDT Email must be a string",
  })
    .email({ message: "Invalid NDT email address" })
    .refine((email) => email.endsWith("@ndt.co.za"), {
      message: "NDT Email must be a valid NDT email",
    }),
  gender: string(),
  position: string(),
  employeeType: string(),
  maritalStatus: string(),
  address: string(),
  city: string(),
  province: string(),
  leaveDays: string(),
  postalCode: string(),
  ethnicity: string(),
  role: string(),
  status: string(),

  officeLocation: string(),
  startDate: string(),
  department: object({
    connect: object({
      id: string(),
    }),
  }),
});

export type createUserType = {
  title: string;
  email: string;
  name: string;
  surname: string;
  role: string;
  status: string;
  gender: string;
  address: string;
  city: string;
  leaveDays: string,
  ethnicity: string;
  position: string;
  employmentType?: string;
  maritalStatus: string;
  postalCode: string;
  province: string;
  idNumber: string;
  dob: string;
  officeLocation: string;
  startDate: string;
  ndtEmail: string;
  contactNumber: string;
  department: string
}

export type UserType = {
  id: string;
  title: string;
  email: string;
  name: string;
  surname: string;
  role: string;
  status: string;
  gender: string;
  address: string;
  city: string;
  leaveDays: string,
  ethnicity: string;
  position: string;
  employmentType?: string;
  maritalStatus: string;
  postalCode: string;
  province: string;
  idNumber: string;
  dob: string;
  officeLocation: string;
  startDate: string;
  ndtEmail: string;
  contactNumber: string;
  department?: string
};

export type AuthUserType = {
  id: string;
  status: string;
  role: string;
  accessToken: string;
};

export const userSchema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string(),
  contactNumber: z
    .string()
    .refine((val) => val.startsWith("0") && val.length === 10, {
      message: "Invalid phoneNumber",
    }),
});

export type AuthProfileType = {
  id: string;
  role: string;
  status: string;
};

export type CreateUserSchemaType = z.infer<typeof createUserSchema>;
export type UpdateUserSchemaType = z.infer<typeof updateUserSchema>;
