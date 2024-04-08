import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IoCart } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FramerComponent } from "../framerMotion/FramerComponent";

export const Navbar = () => {
  return (
    <FramerComponent
      style="h-20 w-full flex justify-between border-b items-center px-2 fixed top-0 lg:px-8"
      animationInitial={{ y: -100 }}
      animationAnimate={{ y: 0 }}
    >
      <span>Logo</span>
      <nav>
        <ul className="hidden lg:flex gap-8">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="flex gap-2 h-full items-center">
        <IoCart className="text-4xl lg:text-5xl" />
        <div className="flex lg:hidden">
          <DropdownNav />
        </div>
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
      <DropdownMenuContent>
        <DropdownMenuItem>Home</DropdownMenuItem>
        <DropdownMenuItem>About</DropdownMenuItem>
        <DropdownMenuItem>Services</DropdownMenuItem>
        <DropdownMenuItem>Contact</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
