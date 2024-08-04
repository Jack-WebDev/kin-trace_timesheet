import { authRouter } from "./routers/auth";
import { createCallerFactory, createRouter } from "@/server/api/trpc";
import { userRouter } from "./routers/user";
import { notificationRouter } from "./routers/notification";
import { departmentRouter } from "./routers/department";

export const appRouter = createRouter({
  auth: authRouter,
  user: userRouter,
  notification: notificationRouter,
  department: departmentRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);

