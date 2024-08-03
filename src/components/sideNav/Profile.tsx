"use client";
import React from "react";
import { LogOut, CircleUser } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  Loader,
} from "@/packages/ui";
import { LinkIconButton } from "../LinkButton";
import { clientApi } from "@/client/react";
import { useUiStateContext } from "@/context";

export const Profile = () => {
  const { data: userProfile, isLoading, error } = clientApi.user.me.useQuery();
  const { menu } = useUiStateContext();


  if (error) {
    return null;
  }

  const avatarFallBack =
    userProfile &&
    userProfile?.name.slice(0, 1) + userProfile?.surname.slice(0, 1);

  return isLoading ? (
    <Loader size="xs" className="h-10 w-10 min-w-0 border-primary" />
  ) : (
    userProfile && (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className={`${menu === "closed" ? "w-fit" : "w-full"} flex cursor-pointer items-center  gap-3 rounded-xl bg-[#ffffff48] p-4 px-3 shadow-lg`}>
            <div className={` flex flex-col items-center gap-x-4 gap-y-2 md:flex-row `}>
              <Avatar>
                <AvatarFallback className="bg-gray-200 p-4 text-black dark:bg-[#252729] dark:text-gray-400">
                  {avatarFallBack ?? "U"}
                </AvatarFallback>
              </Avatar>
              <div className={` ${menu === "closed" ? "hidden" : ""}`}>
                <p className="hidden text-xs font-bold md:flex">
                  {userProfile?.name + " " + userProfile?.surname}
                </p>
                <p className="flex items-center gap-2 text-xs  font-bold capitalize text-secondary">
                  {userProfile?.role?.toLowerCase()}
                </p>
              </div>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-1 w-56 rounded-xl border-none bg-white p-0">
          <DropdownMenuItem className="w-full rounded-t-xl p-0 hover:bg-[#015a4a] ">
            <LinkIconButton
              title="Profile"
              link={true}
              url={`/dashboared/profile/${userProfile.id}`}
              Icon={CircleUser}
            />
          </DropdownMenuItem>
          <DropdownMenuItem className="w-full rounded-b-xl p-0 hover:bg-[#015a4a] ">
            <LinkIconButton
              title="Logout"
              link={true}
              url="/logout"
              Icon={LogOut}
            />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  );
};
