import { TRPCError } from "@trpc/server";
import { Context } from "../../trpc";

export const getProjects = async (ctx: Context) => {
  try {
    const projects = await ctx.db.project.findMany();
    return projects;
  } catch (error) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Failed to get all projects",
    });
  }
};

export const getProject = async (ctx: Context, id: string) => {
  try {
    const project = await ctx.db.project.findUnique({ where: { id } });
    return project;
  } catch (error) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Failed to get project",
    });
  }
};
