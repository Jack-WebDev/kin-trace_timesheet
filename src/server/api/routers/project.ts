import { z } from "zod";
import {
  createProject,
  deleteProject,
  updateProject,
} from "../controllers/projects/mutation";
import { getProject, getProjects } from "../controllers/projects/query";
import { protectedProcedure } from "../trpc";
import {
  createProjectSchema,
  updateProjectSchema,
} from "@/schema/project";

export const projectRouter = {
  getProjects: protectedProcedure.query(async ({ ctx }) => {
    return await getProjects(ctx);
  }),
  getProject: protectedProcedure.input(z.string()).query(async ({ input, ctx }) => {
    return await getProject(ctx, input);
  }),
  createProject: protectedProcedure
    .input(createProjectSchema)
    .mutation(async ({ input, ctx }) => {
      return await createProject(ctx, input);
    }),
  updateProject: protectedProcedure
    .input(updateProjectSchema)
    .mutation(async ({ input, ctx }) => {
      return await updateProject(ctx, input);
    }),
  deleteProject: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      return await deleteProject(ctx, input);
    }),
};
