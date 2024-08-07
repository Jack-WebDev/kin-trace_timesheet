import { TRPCError } from "@trpc/server";
import { Context } from "../../trpc";
import {
  CreateDepartmentSchemaType,
  DeleteDepartmentSchemaType,
  UpdateDepartmentSchemaType,
} from "@/schema/department";

export const createDepartment = async (
  ctx: Context,
  input: CreateDepartmentSchemaType,
) => {
  try {
    await ctx.db.department.create({
      data: {
        ...input,
      },
    });
    return {
      message: "Department created successfully",
    };
  } catch (error) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Failed to create new department",
    });
  }
};

export const updateDepartment = async (
  ctx: Context,
  input: UpdateDepartmentSchemaType,
) => {
  try {
    await ctx.db.department.update({
      where: { id: input.id },
      data: {
        ...input,
      },
    });
    return {
      message: "Department updated successfully",
    };
  } catch (error) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Failed to update department",
    });
  }
};

export const deleteDepartment = async (ctx: Context, id: string) => {
  // find the user
  const department = await ctx.db.department.findUnique({ where: { id } });
  if (!department) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "Department not found",
    });
  }

  try {
    await ctx.db.department.delete({ where: { id } });
    return { message: "Department deleted successfully" };
  } catch (error) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "failed to delete department",
    });
  }
};

