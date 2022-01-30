import { configureStore } from '@reduxjs/toolkit';
import { rickAndMortyApi } from '../services/rickAndMortyApi';
import { rickAndMortySlice } from '../features/rickAndMortySlice';

export const store = configureStore({
    reducer: {
        app: rickAndMortySlice.reducer,
        [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(
        rickAndMortyApi.middleware,
    ),
});