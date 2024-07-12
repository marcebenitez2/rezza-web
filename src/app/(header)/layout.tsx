import { Navbar } from "@/shared/components/nav/Navbar";
import { ReactNode } from "react";

export default function HeaderLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen pt-20">
      <Navbar />
      {children}
    </div>
  );
}
