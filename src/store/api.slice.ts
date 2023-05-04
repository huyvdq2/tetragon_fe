import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LogData, PodData, ResourcesData } from "types/api.type";

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
      transformResponse: (response: { data: ResourcesData[] }) => response.data,
      providesTags: ["pod"],
    }),
    deletePod: builder.mutation({
      query: (params: { pod: string; namespace: string }) => ({
        url: "/pods",
        method: "DELETE",
        params,
      }),
      invalidatesTags: ["pod"],
    }),
    getLogs: builder.query({
      query: (params: { status: string }) => ({
        url: "/logs",
        params,
      }),
      transformResponse: (response: { data: LogData[] }) => response.data,
      transformErrorResponse: () => [],
    }),
  }),
});

export const {
  useGetPodsQuery,
  useGetResourcesQuery,
  useDeletePodMutation,
  useGetLogsQuery,
} = api;
