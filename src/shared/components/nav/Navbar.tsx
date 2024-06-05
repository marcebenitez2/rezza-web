import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IoCart } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FramerComponent } from "../framerMotion/FramerComponent";
import Image from "next/image";

export const Navbar = () => {
  return (
    <FramerComponent
      style="h-20 w-full flex items-center px-2 lg:px-10 fixed top-0  justify-between fixed bg-[#e7d7c9] z-50 shadow-md"
      animationInitial={{ y: -100 }}
      animationAnimate={{ y: 0 }}
    >
      <div className="lg:hidden flex-1">
        <DropdownNav />
      </div>

      <div className="w-32 flex-1 flex justify-center lg:justify-start">
        <Image src={"/logo.png"} width={130} height={100} alt="Logo de rezza" />
      </div>

      <ul className="hidden lg:flex flex-1 gap-8 justify-center w-full">
        <li className="text-center">Home</li>
        <li className="text-center">About</li>
        <li className="text-center">Services</li>
        <li className="text-center">Contact</li>
      </ul>

      <div className="flex flex-1 justify-end">
        <IoCart className="text-4xl lg:text-5xl" color="#81638b" />
      </div>
    </FramerComponent>
  );
};

const DropdownNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <GiHamburgerMenu className="text-4xl" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-none shadow">
        <DropdownMenuItem>Home</DropdownMenuItem>
        <DropdownMenuItem>About</DropdownMenuItem>
        <DropdownMenuItem>Services</DropdownMenuItem>
        <DropdownMenuItem>Contact</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
