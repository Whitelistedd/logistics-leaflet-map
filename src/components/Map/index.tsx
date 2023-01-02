import "leaflet/dist/leaflet.css";
import React from "react";
import dynamic from "next/dynamic";
import { useAppSelector } from "@/redux/store";
import styled from "styled-components";

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
    <StyledMapContainer zoom={5} center={[70, 70]} id="mapId">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <RoutingMachine selectedRoute={selectedRoute} />
    </StyledMapContainer>
  );
};

const StyledMapContainer = styled(MapContainer)`
  min-height: 100vh;
  width: 100vw;
  .leaflet-routing-container {
    background-color: white;
    padding: 10px;
    overflow-y: scroll;
  }
`;
