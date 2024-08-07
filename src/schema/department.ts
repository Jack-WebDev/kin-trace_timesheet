import { object, string, z } from "zod";

export const departmentsType = object({
  id: string().cuid(),
  name: string(),
  _count: z.object({
    User: z.number(),
    Project: z.number(),
  }),
});


export const departmentType = object({
  id: string().cuid(),
  name: string(),

});

export const createDepartmentSchema = object({
  name: string(),
});

export const updateDepartmentSchema = object({
  id: string().cuid(),
  name: string(),
});

export const deleteDepartmentSchema = object({
  id: string().cuid(),
});

export type DepartmentsType = z.infer<typeof departmentsType>;
export type DepartmentType = z.infer<typeof departmentType>;
export type CreateDepartmentSchemaType = z.infer<typeof createDepartmentSchema>;
export type UpdateDepartmentSchemaType = z.infer<typeof updateDepartmentSchema>;
export type DeleteDepartmentSchemaType = z.infer<typeof deleteDepartmentSchema>;
