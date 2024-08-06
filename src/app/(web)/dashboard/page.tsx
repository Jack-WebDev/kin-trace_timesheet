"use client";

import { clientApi } from "@/client/react";
// import { Notification } from "@/modules/home";
import React from "react";

export default function Home() {
  const { data: userProfile } = clientApi.user.me.useQuery();
  return (
    <div className="flex h-max w-full flex-col gap-6 ">
      <div className="flex max-h-none  flex-wrap items-stretch justify-start gap-x-10 gap-y-5 md:flex-row">
        {/* <Notification /> */}
      </div>

      <p>Current User: {userProfile?.role}</p>
    </div>
  );
}
