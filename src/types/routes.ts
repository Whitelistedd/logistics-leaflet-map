export type RouteType = {
  requestNumber: string | null;
  fromLat: number | null;
  fromLng: number | null;
  toLat: number | null;
  toLng: number | null;
};

export type RoutesType = RouteType[];
