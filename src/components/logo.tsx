import React from "react";
import Image from "next/image";

export const Logo = (props: Props) => {
  const { sideNav } = props;
  return sideNav ? (
    <>
      <div className="grid place-items-center">
        <Image
          src={"/ndt-technologies-web-logo.svg"}
          alt=""
          width={50}
          height={50}
        />
        <h1 className="flex items-center text-xl font-bold">
          NEW DAWN
          <span className="pl-2 text-[#dda83a]">360</span>
        </h1>
      </div>
    </>
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
