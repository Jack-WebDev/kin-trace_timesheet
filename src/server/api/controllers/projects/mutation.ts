import { TRPCError } from "@trpc/server";
import { Context } from "../../trpc";
import { CreateProjectSchemaType, DeleteProjectSchemaType, UpdateProjectSchemaType } from "@/schema/project";

export const createProject = async (ctx: Context, input: CreateProjectSchemaType) => {
  try {
    await ctx.db.project.create({
      data: {
        ...input,
      },
    });
    return {
      message: "Project created successfully",
    };
  } catch (error) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Failed to create new project",
    });
  }
};

export const updateProject = async (ctx: Context, input: UpdateProjectSchemaType) => {
  const { id, ...others } = input;

  // find the project first
  const project = await ctx.db.project.findUnique({ where: { id } });
  if (!project) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "Project not found",
    });
  }

  try {
    await ctx.db.project.update({
      where: { id },
      data: {
        ...others,
      },
    });
    return {
      message: "Project updated successfully",
    };
  } catch (error) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Failed to update project",
    });
  }
};

export const deleteProject = async (ctx: Context, input: DeleteProjectSchemaType) => {
  try {
    await ctx.db.project.delete({
      where: { id: input.id },
    });
    return {
      message: "Project deleted successfully",
    };
  } catch (error) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Failed to delete project",
    });
  }
};