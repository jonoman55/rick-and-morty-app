import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    page: 1,
    characters: [],
};

// https://redux-toolkit.js.org/api/createSlice
export const rickAndMortySlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setCharacters: (state, action) => {
            if (state.characters !== action.payload && action.payload?.length) {
                action.payload.forEach((character) =>
                    state.characters.push(character)
                );
            }
        },
        clearCharacters: (state, action) => {
            state.characters = action.payload;
        }
    },
});

export const { setPage, setCharacters, clearCharacters } = rickAndMortySlice.actions;

export const currentPage = (state) => state.app.page;
export const selectCharacters = (state) => state.app.characters;

export default rickAndMortySlice.reducer;