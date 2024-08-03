"use client";

import React from "react";
import { Logo } from "..";
import { Profile } from "./Profile";
import MenuList from "./menuList";

import { useUiStateContext } from "@/context";
import { clientApi } from "@/client/react";
import Image from "next/image";

export const SideNav = () => {
  const { data: userProfile } = clientApi.user.me.useQuery();

  const { menu } = useUiStateContext();
  const width = menu === "open" ? "17rem" : "5rem";
  return (
    <div
      className={`sticky  top-0 flex h-screen w-16 flex-col items-center gap-10 border-r-gray-200 bg-[#015a4a] py-4 pb-2 text-white shadow-lg md:w-72`}
      style={{ width }}
    >
      {menu === "open" ? (
        <div className="grid place-items-center gap-y-2">
          <Image
            src={"/ndt-technologies-web-logo.svg"}
            alt=""
            width={100}
            height={100}
          />
          <h1 className="flex items-center text-xl font-bold">
            NEW DAWN
            <span className="pl-2 text-[#dda83a]">360</span>
          </h1>
        </div>
      ) : (
        <Image
          src={"/ndt-technologies-web-logo.svg"}
          alt=""
          width={50}
          height={50}
        />
      )}

      {/* <Logo sideNav={true} /> */}
      <MenuList userProfile={userProfile} />

      <div className="absolute bottom-10 left-0 right-0 mx-auto flex w-full items-center justify-center md:px-8">
        <Profile />
      </div>
    </div>
  );
};
