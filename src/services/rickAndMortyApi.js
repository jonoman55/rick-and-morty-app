import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// https://redux-toolkit.js.org/rtk-query/api/createApi
// TODO: API Documentation: https://rickandmortyapi.com/documentation/
export const rickAndMortyApi = createApi({
    reducerPath: 'rickAndMortyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
    endpoints: (builder) => ({
        getAllCharacters: builder.query({
            query: (ids) => `character/${ids}`,
        }),
        getCharacters: builder.query({
            query: (page = 1) => `character?page=${page}`,
        }),
        getCharacterByName: builder.query({
            query: (name) => `character/${name}`,
        }),
        getCharacterById: builder.query({
            query: (id) => `character/${id}`,
        }),
        getAllLocations: builder.query({
            query: () => `location`,
        }),
        getLocations: builder.query({
            query: (page = 1) => `location?page=${page}`,
        }),
        getLocationByName: builder.query({
            query: (name) => `location/${name}`,
        }),
        getLocationById: builder.query({
            query: (id) => `location/${id}`,
        }),
        getAllEpisodes: builder.query({
            query: () => `episode`,
        }),
        getEpisodes: builder.query({
            query: (page = 1) => `episode?page=${page}`,
        }),
        getEpisodeByName: builder.query({
            query: (name) => `episode/${name}`,
        }),
        getEpisodeById: builder.query({
            query: (id) => `episode/${id}`,
        }),
    }),
});

export const {
    useGetAllCharactersQuery,
    useGetCharactersQuery,
    useGetCharacterByNameQuery,
    useGetCharacterByIdQuery,
    useGetAllLocationsQuery,
    useGetLocationsQuery,
    useGetLocationByNameQuery,
    useGetLocationByIdQuery,
    useGetAllEpisodesQuery,
    useGetEpisodesQuery,
    useGetEpisodeByNameQuery,
    useGetEpisodeByIdQuery,
} = rickAndMortyApi;