import { object, string, z } from "zod";

export const departmentsType = object({
  id: string().uuid(),
  name: string(),
  _count: z.object({
    User: z.number(),
  }),
});

export const createDepartmentSchema = object({
  name: string(),
});

export const updateDepartmentSchema = object({
  id: string().uuid(),
  name: string(),
});

export const deleteDepartmentSchema = object({
  id: string().uuid(),
});

export type DepartmentsType = z.infer<typeof departmentsType>;
export type CreateDepartmentSchemaType = z.infer<typeof createDepartmentSchema>;
export type UpdateDepartmentSchemaType = z.infer<typeof updateDepartmentSchema>;
export type DeleteDepartmentSchemaType = z.infer<typeof deleteDepartmentSchema>;
