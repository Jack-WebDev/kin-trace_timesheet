import { TRPCError } from "@trpc/server";
import { Context } from "../../trpc";

export const getDepartments = async (ctx: Context) => {
  try {
    const departments = await ctx.db.department.findMany({
      include: {
        _count: {
          select: {
            User: true,
          },
        }
      }
    });
    return departments;
  } catch (error) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Failed to get all departments",
    });
  }
};

export const getDepartment = async (ctx: Context, id: string) => {
  try {
    const department = await ctx.db.department.findUnique({ where: { id } });
    return department;
  } catch (error) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Failed to get department",
    });
  }
};
