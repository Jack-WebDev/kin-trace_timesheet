import { z } from "zod";
import {
  getDepartment,
  getDepartments,
} from "../controllers/departments/query";
import { adminProcedure } from "../trpc";
import {
  createDepartment,
  deleteDepartment,
  updateDepartment,
} from "../controllers/departments/mutation";

export const departmentRouter = {
  getDepartments: adminProcedure.query(async ({ ctx }) => {
    return await getDepartments(ctx);
  }),
  getDepartment: adminProcedure
    .input(z.string())
    .query(async ({ input, ctx }) => {
      return await getDepartment(ctx, input);
    }),
  createDepartment: adminProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input, ctx }) => {
      return await createDepartment(ctx, input);
    }),
  updateDepartment: adminProcedure
    .input(z.object({ id: z.string(), name: z.string() }))
    .mutation(async ({ input, ctx }) => {
      return await updateDepartment(ctx, input);
    }),
  deleteDepartment: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      return await deleteDepartment(ctx, input);
    }),
};
