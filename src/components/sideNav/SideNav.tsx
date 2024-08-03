import React from "react";
import { Logo } from "..";
import { Profile } from "./Profile";
import MenuList from "./menuList";
import type { AuthUserType } from "@/schema";
import { UserRole, UserStatus } from "@prisma/client";


export const SideNav = async () => {
  const auth: AuthUserType = {
    accessToken: "",
    id: "",
    role: UserRole.Admin,
    status: UserStatus.Active,
  };
  

  return (
    <div
      className={`h-screen  flex flex-col items-start gap-10 w-16 md:w-72  pb-2 bg-[#015a4a] shadow-lg border-r-gray-200 text-white sticky top-0`}
    >
      <Logo sideNav={true} />
      <MenuList auth={auth} />

      <div className="absolute bottom-10 w-full md:px-8 left-0 right-0 mx-auto flex items-center justify-center">
        <Profile />
      </div>
    </div>
  );
};
