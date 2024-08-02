import { Notification } from "@/modules/dashboard";

import React from "react";

const Page = async () => {
  return (
    <div className="flex h-max w-full flex-col gap-6 ">
      <div className="flex max-h-none  flex-wrap items-stretch justify-start gap-x-10 gap-y-5 md:flex-row">
        <Notification />
      </div>
    </div>
  );
};

export default Page;
