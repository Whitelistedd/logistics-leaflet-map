import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { HYDRATE } from "next-redux-wrapper";
import { RoutesType } from "@/types/routes";

export const routesApi = createApi({
  reducerPath: "routesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}api/`,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getRoutes: builder.query<RoutesType, void>({
      query: () => `routes`,
    }),
  }),
});

export const { useGetRoutesQuery } = routesApi;
