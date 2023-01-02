// leaflet-routing-machine.d.ts

import * as L from "leaflet";

declare module "leaflet" {
  namespace Routing {
    function control(options: ControlOptions): L.Routing.Control;
    function line(route: any, options: LineOptions): L.Routing.Line;
  }

  namespace Routing {
    interface ControlOptions {
      // Add options for the Routing control here
    }

    interface LineOptions {
      // Add options for the Routing line here
    }

    interface Control extends L.Control {
      // Add methods and properties for the Routing control here
    }

    interface Line extends L.Polyline {
      // Add methods and properties for the Routing line here
    }
  }
}
