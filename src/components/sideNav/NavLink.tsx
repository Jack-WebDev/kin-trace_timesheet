"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Play } from "lucide-react";
import { useUiStateContext } from "@/context";

type NavLinkProps = {
  title: string;
  url: string;
  Icon: React.ElementType;
};

export const NavLink = (props: NavLinkProps) => {
  const { title, url, Icon } = props;
  const [active, setActive] = useState(false);
  const { menu } = useUiStateContext();


  const pathname = usePathname();
  const location = pathname.split("/")[2];
  const linkLocation = url.split("/")[2];

  useEffect(() => {
    if (location === linkLocation) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [location, linkLocation]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const list = document.querySelectorAll(".navLink");
    list.forEach((item) => {
      item.classList.remove("bg-primary", "font-semibold");
      item.classList.add("text-gray-400");
      const icon = item.querySelector(".icon");
      if (icon) {
        icon.classList.remove("text-white");
      }
    });

    e.currentTarget.classList.add("bg-primary", "text-white", "font-semibold");
    const icon = e.currentTarget.querySelector(".icon");
    if (icon) {
      icon.classList.add("text-white");
    }
  };

  const cls = active
    ? "bg-primary text-white font-semibold"
    : "bg-transparent hover:text-primary hover:bg-transparent";
  const iconStyle = active ? "hidden md:flex rotate-90" : "hidden md:flex";

  return (
    <Link
      href={url}
      className={`${menu === "closed" ? "md:px-0" :  "md:px-3 md:justify-between"} navLink text-md flex w-fit items-center justify-center gap-4 rounded-full py-3 text-white md:w-full  md:rounded-lg md:px-4 ${cls}`}
      onClick={(e) => handleClick(e)}
    >
      <div className={`${menu === "closed" ? "md:gap-0" :  "md:gap-4"} flex items-center gap-0`}>
        <Icon size={menu === "closed" ? 30 : 20} className="icon text-white" />
        <p className={`hidden text-white md:flex`}>
          {" "}
          {menu === "open" ? <span>{title}</span> : null}
        </p>
      </div>
      {menu === "open" ? <Play size={12} className={iconStyle} /> : null}
      {/* <Play size={12} className={iconStyle} /> */}
    </Link>
  );
};
