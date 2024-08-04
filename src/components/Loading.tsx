import { Loader } from "@/packages/ui";
import React from "react";

export const Loading = () => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex flex-col items-center justify-center bg-white dark:bg-sideBarBg m-auto">
      <Loader className="border-[#dda83a]" />
      <p className="text-[#dda83a] font-semibold text-xs">Loading...</p>
    </div>
  );
};
