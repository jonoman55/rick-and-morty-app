import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // app state
    page: 1,
    hasLoaded: false,
    // search state
    filter: '',
    searchResults: [],
};

// https://redux-toolkit.js.org/api/createSlice
export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        reset: () => initialState,
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
        },
        setHasLoaded: (state, action) => {
            state.hasLoaded = action.payload;
        },
    },
});

export const appActions = appSlice.actions;
export default appSlice.reducer;