export enum ERoutes {
  HOME = "/",
  CATEGORY = "/category/:category",
  PRODUCT = "/category/:category/:product",
}

export type TRoutes = "Home" | "Category" | "Product";

export interface IRoute {
  name: TRoutes;
  path: string;
}

export const ROUTES: IRoute[] = [
  {
    name: "Home",
    path: ERoutes.HOME,
  },
  {
    name: "Category",
    path: ERoutes.CATEGORY,
  },
  {
    name: "Product",
    path: ERoutes.PRODUCT,
  },
];
