import { configureStore } from '@reduxjs/toolkit';
import { rickAndMortyApi } from '../services/rickAndMortyApi';
import { rickAndMortySlice } from '../features/rickAndMortySlice';
import { themeSlice } from '../features/themeSlice';

export const store = configureStore({
    reducer: {
        app: rickAndMortySlice.reducer,
        theme: themeSlice.reducer,
        [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(
        rickAndMortyApi.middleware,
    ),
});