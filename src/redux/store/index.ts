import { ThunkAction, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { Action } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { routesApi } from "@/services/routes";
import routesReducer from "../slices/routes";

const store = configureStore({
  reducer: {
    routes: routesReducer,
    [routesApi.reducerPath]: routesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routesApi.middleware),
});

const makeStore = () => store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const AppDispatch = () => useDispatch<AppDispatchType>(); //

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
