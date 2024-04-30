import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
export const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.themoviedb.org/3/`,
    headers,
  }),
  tagTypes: ["User", "Course"],
  endpoints: (builder) => ({
    searchMovies: builder.mutation({
      query: (data) => `/search/multi?query=${data}&page=${1}`,
    }),
    movieList: builder.query({
      query: (data) => ({
        url: `/discover/movie?page=1`,
      }),
    }),
    movieDetails: builder.query({
      query: ({ mediaType, id }) => ({
        url: `/${mediaType}/${id}`,
      }),
    }),
  }),
});

export const {
  useSearchMoviesMutation,
  useMovieListQuery,
  useMovieDetailsQuery,
} = api;
