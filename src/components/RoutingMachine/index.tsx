import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";

import * as L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";

const CreateRoutineMachineLayer = (props: any) => {
  const { selectedRoute } = props;

  const instance = L.Routing.control({
    waypoints: [
      L.latLng(selectedRoute.fromLat, selectedRoute.fromLng),
      L.latLng(selectedRoute.toLat, selectedRoute.fromLng),
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }],
    },
    createMarker: (
      i: number,
      waypoint: { latLng: L.LatLngExpression },
      n: number
    ) =>
      L.marker(waypoint.latLng, {
        draggable: true,
        icon: L.icon({
          iconUrl: "/images/marker-icon.png",
          iconAnchor: [14, 40],
          shadowUrl: "/images/marker-shadow.png",
        }),
      }),
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
  });

  return instance;
};

export const RoutingMachine = createControlComponent(CreateRoutineMachineLayer);
