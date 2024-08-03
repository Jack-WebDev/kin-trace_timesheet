import React from "react";
import { Radio } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Logo = (props: Props) => {
  const { sideNav } = props;
  return sideNav ? (
    <Link
      href="/dashboard"
      className="flex h-24 w-full items-center justify-center border-b border-gray-700 py-0"
    >
      <div className="grid place-items-center">

      <Image
        src={"/ndt-technologies-web-logo.svg"}
        alt=""
        width={50}
        height={50}
      />
      <h1 className="flex items-center text-xl font-bold">
          NEW DAWN
        <span className="pl-2 text-[#dda83a]">
          360
        </span>
      </h1>
      </div>
    </Link>
  ) : (
    <div className="flex w-full flex-col items-center gap-4">
      <Image
        src={"/ndt-technologies-web-logo.svg"}
        alt=""
        width={50}
        height={50}
      />
    </div>
  );
};

type Props = {
  sideNav?: boolean;
};
