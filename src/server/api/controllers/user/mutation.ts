import { TRPCError } from "@trpc/server";
import type { CreateUserSchemaType, UpdateUserSchemaType } from "@/schema";
import type { Context } from "@/server/api/trpc";

export const createUser = async (ctx: Context, input: CreateUserSchemaType) => {
  try {
    await ctx.db.user.create({
      data: {
        ...input,
      },
    });

    return {
      message: "User added successfully",
    };
  } catch (error) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Failed to create new user",
    });
  }
};

export const updateUser = async (ctx: Context, input: UpdateUserSchemaType) => {
  const { id, ...others } = input;

  const user = await ctx.db.user.findUnique({ where: { id: id } });
  if (!user) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "User not found",
    });
  }

  try {
    const updateUser = await ctx.db.user.update({
      where: { id: id },
      data: {
        ...others,
      },
    });

    return {
      message: "User updated successfully",
      userId: updateUser.id,
    };
  } catch (error) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "failed to update user",
    });
  }
};

export const deleteUser = async (ctx: Context, id: string) => {
  // find the user
  const user = await ctx.db.user.findUnique({ where: { id } });
  if (!user) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "User not found",
    });
  }

  try {
    await ctx.db.user.delete({ where: { id } });
    return { message: "User deleted successfully" };
  } catch (error) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "failed to delete user",
    });
  }
};
