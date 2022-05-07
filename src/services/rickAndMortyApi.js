import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// https://rickandmortyapi.com/documentation/
// https://redux-toolkit.js.org/rtk-query/api/createApi
export const rickAndMortyApi = createApi({
    reducerPath: 'rickAndMortyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://rickandmortyapi.com/api/'
    }),
    tagTypes: ['Characters', 'Locations', 'Episodes'],
    endpoints: (builder) => ({
        charactersSearch: builder.query({
            query: (name) => `character/?name=${name}`,
            providesTags: ['Characters'],
        }),
        getAllCharacters: builder.query({
            query: (ids) => `character/${ids}`,
            providesTags: ['Characters'],
        }),
        getCharacters: builder.query({
            query: (page = 1) => `character/?page=${page}`,
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
        locationsSearch: builder.query({
            query: (name) => `location/?name=${name}`,
            providesTags: ['Locations'],
        }),
        getAllLocations: builder.query({
            query: () => `location`,
            providesTags: ['Locations'],
        }),
        getLocations: builder.query({
            query: (page = 1) => `location/?page=${page}`,
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
        episodesSearch: builder.query({
            query: (name) => `episode/?name=${name}`,
            providesTags: ['Episodes'],
        }),
        getAllEpisodes: builder.query({
            query: () => `episode`,
            providesTags: ['Episodes'],
        }),
        getEpisodes: builder.query({
            query: (page = 1) => `episode/?page=${page}`,
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
    useCharactersSearchQuery,
    useLocationsSearchQuery,
    useEpisodesSearchQuery,
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