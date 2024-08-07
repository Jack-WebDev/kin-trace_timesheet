import { authRouter } from "./routers/auth";
import { createCallerFactory, createRouter } from "@/server/api/trpc";
import { userRouter } from "./routers/user";
import { notificationRouter } from "./routers/notification";
import { departmentRouter } from "./routers/department";
import { projectRouter } from "./routers/project";

export const appRouter = createRouter({
  auth: authRouter,
  user: userRouter,
  notification: notificationRouter,
  department: departmentRouter,
  project: projectRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);

