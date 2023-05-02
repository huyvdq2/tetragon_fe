import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PodData } from "types/api.type";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:50000/api/v1" }),
  tagTypes: ["pod"],
  endpoints: (builder) => ({
    getPods: builder.query({
      query: () => "/pods",
      transformResponse: (response: { data: PodData[] }) => response.data,
      providesTags: ["pod"],
    }),
    getResources: builder.query({
      query: () => "/resources",
      transformResponse: (response: {
        data: Array<{
          cpu: string;
          memory: string;
          name: string;
        }>;
      }) => response.data,
      providesTags: ["pod"],
    }),
    deletePod: builder.mutation({
      query: (params: { name: string; namespace: string }) => ({
        url: "/pods",
        method: "DELETE",
        params,
      }),
      invalidatesTags: ["pod"],
    }),
  }),
});

export const { useGetPodsQuery, useGetResourcesQuery, useDeletePodMutation } =
  api;
