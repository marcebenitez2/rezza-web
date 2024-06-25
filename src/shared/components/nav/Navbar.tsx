"use client";

import { FramerComponent } from "../framerMotion/FramerComponent";
import Image from "next/image";
import Link from "next/link";
import { useRouterHelper } from "@/shared/hooks/useRouterHelper";
import { CartIcon } from "./Cart";

export const Navbar = () => {
  const { getHome } = useRouterHelper();

  const home = getHome()?.path;

  return (
    <FramerComponent
      style="h-20 w-full flex items-center px-4 lg:px-10 fixed top-0  justify-between fixed bg-[#e7d7c9] z-50 shadow-md"
      animationInitial={{ y: -100 }}
      animationAnimate={{ y: 0 }}
    >
      <Link href={home || "/"} className=" flex-1 flex">
        <Image src={"/logo.png"} width={100} height={90} alt="Logo de rezza" />
      </Link>
      <div className="flex gap-4">
        <a href="https://www.instagram.com/by.rezza?igsh=MWIybWwzYzdiejk1cA==">
          <img src="/instagramLogo.png" className="w-12" />
        </a>
        <CartIcon />
      </div>
    </FramerComponent>
  );
};
