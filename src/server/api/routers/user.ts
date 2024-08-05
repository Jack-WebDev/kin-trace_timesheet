import { createUserSchema, updateUserSchema, userId } from "@/schema";
import {
  createUser,
  updateUser,
  deleteUser,
  getUsers,
  getUser,
} from "../controllers/user";
import { z } from "zod";
import { adminProcedure, createRouter, protectedProcedure } from "../trpc";

export const userRouter = createRouter({
  getUsers: adminProcedure.query(async ({ ctx }) => {
    const users = await getUsers(ctx);

    return users;
  }),

  me: protectedProcedure.query(async ({ ctx }) => {
    const user = ctx.user;
    return user;
  }),

  getUser: adminProcedure.input(z.string()).query(async ({ input, ctx }) => {
    const user = await getUser(ctx, input);

    return user;
  }),

  create: adminProcedure
    .input(createUserSchema)
    .mutation(async ({ input, ctx }) => {
      return await createUser(ctx, input);
    }),

  update: adminProcedure
    .input(updateUserSchema)
    .mutation(async ({ input, ctx }) => {
      return await updateUser(ctx, input);
    }),
  delete: adminProcedure.input(z.string()).mutation(async ({ input, ctx }) => {
    return deleteUser(ctx, input);
  }),
});
