export enum ERoutes {
  HOME = "/",
}

export type TRoutes = "Home";

export interface IRoute {
  name: TRoutes;
  path: string;
}

export const ROUTES: IRoute[] = [
  {
    name: "Home",
    path: ERoutes.HOME,
  },
];
