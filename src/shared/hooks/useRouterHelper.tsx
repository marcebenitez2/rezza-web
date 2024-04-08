import { usePathname } from "next/navigation";
import { IRoute, ROUTES } from "@/shared/routes/routes";

export const useRouterHelper = () => {
  const pathname = usePathname();

  const getCurrentRoute = () => {
    const currentRoute = ROUTES.find((route) => route.path === pathname);
    return currentRoute;
  };

  const isOnRoute = (route: string) => {
    return pathname === route;
  };

  const getRouteExcluding = (routeToExclude: IRoute) => {
    return ROUTES.filter((route) => route.name !== routeToExclude.name);
  };

  const getOneRoute = (routeName: string) => {
    return ROUTES.find((route) => route.name === routeName);
  };

  return {
    getCurrentRoute,
    isOnRoute,
    getRouteExcluding,
    getOneRoute,
  };
};
