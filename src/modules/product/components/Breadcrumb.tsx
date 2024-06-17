"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

export const BreadcrumbComponent = () => {
  const pathname = usePathname();

  const categoryMatch = pathname.match(/\/category\/([^\/]*)\//);
  const category = categoryMatch ? categoryMatch[1] : null;

  const productMatch = pathname.match(/\/category\/[^\/]*\/(.*)/);
  const product = productMatch ? productMatch[1].replace(/-/g, " ") : null;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href={"/"}>Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href={`/category/${category}`}>{category}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{product}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
