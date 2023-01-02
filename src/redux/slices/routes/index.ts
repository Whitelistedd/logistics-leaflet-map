import { createSlice } from "@reduxjs/toolkit";
import { initiailCartState } from "./routes.types";

const initialState: initiailCartState = {
  selectedRoute: {
    requestNumber: null,
    fromLat: null,
    fromLng: null,
    toLat: null,
    toLng: null,
  },
};

const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    addRoute: (state, action) => {
      state.selectedRoute = action.payload;
    },
  },
});

export const { addRoute } = routesSlice.actions;
export default routesSlice.reducer;
