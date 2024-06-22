import { usePathname } from "next/navigation";
import { IRoute, ROUTES } from "@/shared/routes/routes";

export const useRouterHelper = () => {
  const pathname = usePathname();

  const getCurrentRoute = () => {
    return ROUTES.find((route) => {
      const routeParts = route.path.split("/");
      const pathnameParts = pathname.split("/");

      if (routeParts.length !== pathnameParts.length) {
        return false;
      }

      // Comparar cada parte de la ruta
      return routeParts.every((part, index) => {
        return part.startsWith(":") || part === pathnameParts[index];
      });
    });
  };

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
