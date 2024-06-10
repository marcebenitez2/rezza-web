import { usePathname } from "next/navigation";
import { IRoute, ROUTES } from "@/shared/routes/routes";

export const useRouterHelper = () => {
  const pathname = usePathname();

  const getCurrentRoute = () => ROUTES.find((route) => route.path === pathname);

  const isOnRoute = (route: string) => pathname === route;

  const getRouteExcluding = (routeToExclude: IRoute) =>
    ROUTES.filter((route) => route.name !== routeToExclude.name);

  const getOneRoute = (routeName: string) =>
    ROUTES.find((route) => route.name === routeName);

  const getHome = () => getOneRoute("Home");

  return {
    getCurrentRoute,
    isOnRoute,
    getRouteExcluding,
    getOneRoute,
    getHome,
  };
};
