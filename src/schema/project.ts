import { array, object, string, z } from "zod";

export const projectsType = object({
  id: string().cuid(),
  name: string(),
  client: string(),
  departmentId: string().cuid(),
  description: string(),
  manager: string(),
  projectTeam: array(string()),
});

export const createProjectSchema = object({
  name: string(),
  client: string(),
  departmentId: string().cuid(),
  description: string(),
  manager: string(),
  projectTeam: array(string()),
});

export const updateProjectSchema = object({
  id: string().uuid(),
  name: string(),
  client: string(),
  departmentId: string().uuid(),
  description: string(),
  manager: string(),
  projectTeam: array(string()),
});

export const deleteProjectSchema = object({
  id: string().uuid(),
});

export type ProjectsType = z.infer<typeof projectsType>;
export type CreateProjectSchemaType = z.infer<typeof createProjectSchema>;
export type UpdateProjectSchemaType = z.infer<typeof updateProjectSchema>;
export type DeleteProjectSchemaType = z.infer<typeof deleteProjectSchema>;
