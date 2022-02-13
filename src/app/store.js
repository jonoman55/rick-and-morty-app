import { configureStore } from '@reduxjs/toolkit';
import { rickAndMortyApi } from '../services/rickAndMortyApi';
import { appSlice } from '../features/appSlice';
import { themeSlice } from '../features/themeSlice';
import { logger } from '../middleware/logger';

// TODO : Remove the logger middleware after testing is complete
export const store = configureStore({
    reducer: {
        app: appSlice.reducer,
        theme: themeSlice.reducer,
        [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(
        rickAndMortyApi.middleware,
        process.env.NODE_ENV !== 'production' && logger,
    ),
});