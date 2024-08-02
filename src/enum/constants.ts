import { SelectData } from "@/packages/ui";
import { Gender, UserRole, UserStatus } from "@prisma/client";
import { startCase } from "lodash";

export const genderList: SelectData[] = Object.values(Gender).map((value) => ({
  value,
  title: startCase(value),
  id: "d71c4764-aaa6-54b2-8d5b-5841fbd18c7b",
}));

export const userRoles: SelectData[] = Object.values(UserRole).map((value) => ({
  value,
  title: startCase(value),
  id: "95718412-fe6c-50e4-a4b7-fa05a740fd9a",
}));

export const userStatus: SelectData[] = Object.values(UserStatus).map(
  (value) => ({
    value,
    title: startCase(value),
    id: "f3092673-a924-5a07-8e12-26951f7764e3",
  }),
);
