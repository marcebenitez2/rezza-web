import AdminNav from "@/shared/components/AdminNav/AdminNav";
import { ReactNode } from "react";

export default function HeaderLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen pt-10">
      <AdminNav />
      {children}
    </div>
  );
}
