import { Context } from "../../trpc";

export const getUsers = async (ctx:Context) => {
  const users = await ctx.db.user.findMany();
  return users;
}

export const getUser = async (ctx:Context, id:string) => {
  const user = await ctx.db.user.findUnique({ where: { id } });
  return user;
}