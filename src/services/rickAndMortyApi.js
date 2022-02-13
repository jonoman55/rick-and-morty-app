import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// https://redux-toolkit.js.org/rtk-query/api/createApi
// https://rickandmortyapi.com/documentation/
export const rickAndMortyApi = createApi({
    reducerPath: 'rickAndMortyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
    tagTypes: ['Characters', 'Locations', 'Episodes'],
    endpoints: (builder) => ({
        getAllCharacters: builder.query({
            query: (ids) => `character/${ids}`,
            providesTags: ['Characters'],
            keepUnusedDataFor: 5,
        }),
        getCharacters: builder.query({
            query: (page = 1) => `character?page=${page}`,
            keepUnusedDataFor: 5,
            providesTags: ['Characters'],
        }),
        getCharacterByName: builder.query({
            query: (name) => `character/${name}`,
            providesTags: ['Characters'],
        }),
        getCharacterById: builder.query({
            query: (id) => `character/${id}`,
            providesTags: ['Characters'],
        }),
        getAllLocations: builder.query({
            query: () => `location`,
            providesTags: ['Locations'],
        }),
        getLocations: builder.query({
            query: (page = 1) => `location?page=${page}`,
            providesTags: ['Locations'],
        }),
        getLocationByName: builder.query({
            query: (name) => `location/${name}`,
            providesTags: ['Locations'],
        }),
        getLocationById: builder.query({
            query: (id) => `location/${id}`,
            providesTags: ['Locations'],
        }),
        getAllEpisodes: builder.query({
            query: () => `episode`,
            providesTags: ['Locations'],
        }),
        getEpisodes: builder.query({
            query: (page = 1) => `episode?page=${page}`,
            providesTags: ['Episodes'],
        }),
        getEpisodeByName: builder.query({
            query: (name) => `episode/${name}`,
            providesTags: ['Episodes'],
        }),
        getEpisodeById: builder.query({
            query: (id) => `episode/${id}`,
            providesTags: ['Episodes'],
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