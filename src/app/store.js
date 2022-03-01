import { configureStore } from '@reduxjs/toolkit';

import appReducer from '../reducers/appSlice';
import themeReducer from '../reducers/themeSlice';
import { rickAndMortyApi } from '../services/rickAndMortyApi';

export const store = configureStore({
    reducer: {
        app: appReducer,
        theme: themeReducer,
        [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(
        rickAndMortyApi.middleware,
    ),
});