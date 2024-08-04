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

export const deleteDepartment = async (
  ctx: Context,
  input: DeleteDepartmentSchemaType,
) => {
  try {
    await ctx.db.department.delete({
      where: { id: input.id },
    });
    return {
      message: "Department deleted successfully",
    };
  } catch (error) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Failed to delete department",
    });
  }
};
