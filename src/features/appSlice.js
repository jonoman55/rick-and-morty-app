import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // app state
    page: 1,
    characters: [],
    episodes: [],
    locations: [],
    // search state
    filter: '',
    searchResults: [],
};

// https://redux-toolkit.js.org/api/createSlice
export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
        },
        setCharacters: (state, action) => {
            state.characters = action.payload;
        },
    },
});

export const { setPage, setFilter, setSearchResults, setCharacters } = appSlice.actions;
export default appSlice.reducer;