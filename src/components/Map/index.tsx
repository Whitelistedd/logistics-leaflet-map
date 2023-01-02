import "leaflet/dist/leaflet.css";
import React from "react";
import dynamic from "next/dynamic";
import { useAppSelector } from "@/redux/store";

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

export const Map = () => {
  const selectedRoute = useAppSelector((state) => state.routes.selectedRoute);

  const RoutingMachine = React.useMemo(
    () =>
      dynamic(
        () =>
          import("../RoutingMachine/index").then((mod) => mod.RoutingMachine),
        {
          loading: () => <p>A map is loading</p>,
          ssr: true,
        }
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedRoute]
  );

  return (
    <MapContainer zoom={5} center={[70, 70]} id="mapId">
      <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}" />
      <RoutingMachine selectedRoute={selectedRoute} />
    </MapContainer>
  );
};
