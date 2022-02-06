import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Box, Card, CardContent, Grid, Paper, Typography } from '@mui/material';
import Spinner from '../components/Spinner';
import SearchBar from '../components/SearchBar';
import { setCharacters, clearCharacters } from '../features/rickAndMortySlice'; 
import { useGetAllCharactersQuery, useGetCharactersQuery } from '../services/rickAndMortyApi';
import { createIdsList } from '../utils';

// TODO : Finish styling this page
// TODO : Be careful with this page - possible to hit API limit if pics are included (HTTP Status - 429)
// TODO : Turn this into a search page
const AllCharactersPage = () => {
    const [characterIds, setCharacterIds] = useState('');
    const { data: results, isFetching } = useGetCharactersQuery(1);

    useEffect(() => {
        if (!isFetching) {
            setCharacterIds(results?.info?.count + 1);
        }
        // eslint-disable-next-line
    }, [isFetching]);

    const dispatch = useDispatch();
    const { characters } = useSelector((state) => state.app);

    const ids = createIdsList(characterIds).slice(2);
    const { data, isLoading } = useGetAllCharactersQuery(ids);
    const [inputValue, setInputValue] = useState('');
    const [filteredCharacters, setFilteredCharacters] = useState([]);

    useEffect(() => {
        if (characters) {
            dispatch(clearCharacters([]));
        }
        dispatch(setCharacters(data))
        // eslint-disable-next-line
    }, [isLoading, characterIds]);

    const handleSearch = ({ target: { value } }) => {
        setInputValue(value);
        setFilteredCharacters(characters?.filter(({ name }) =>
            name?.toLowerCase().includes(inputValue.toLowerCase()))
        );
    }

    const clearSearch = () => {
        setInputValue('');
        setFilteredCharacters([]);
    };

    return isLoading ? <Spinner /> : (
        <Box component={Paper} elevation={2} sx={{
            bgcolor: 'primary.dark', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
        }}>
            <Typography component='h5' variant='h6' sx={{ m: 1 }}>
                Character Count: {characters?.length}
            </Typography>
            <Box sx={{ p: 2, mb: 4 }}>
                <SearchBar
                    value={inputValue}
                    onChange={handleSearch}
                    onClick={clearSearch}
                />
            </Box>
            <Box sx={{ width: '100%', display: 'block' }}>
                {filteredCharacters && (
                    <Grid container spacing={2} direction='column' sx={{ pb: 0, ml: 0, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        {filteredCharacters?.map((character, index) => (
                            <Grid key={index} item xs={12} sm={12} component={NavLink} to={`/characters/${character?.id}`} sx={{
                                pl: 1, pr: 2, pt: 1, pb: 2, bgcolor: 'primary.light', textDecoration: 'none', width: '100%'
                            }}>
                                <Card elevation={2} padding={2} sx={{
                                    bgcolor: 'primary.dark', '&:hover': {
                                        bgcolor: (theme) => theme.palette.mode === 'dark'
                                            ? 'custom.disabled' : 'custom.darkDisabled'
                                    }
                                }}>
                                    <CardContent sx={{ '&:last-child': { pb: 2 } }}>
                                        <Typography sx={{
                                            color: 'primary.contrastText', textAlign: 'center'
                                        }}>
                                            {character?.name}
                                        </Typography>
                                        <Typography sx={{
                                            color: 'primary.contrastText', textAlign: 'center'
                                        }}>
                                            {character?.origin?.name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Box>
            {/* <CharacterGrid characters={characters} /> */}
        </Box>
    );
};

// eslint-disable-next-line
const CharacterGrid = ({ characters }) => (
    <Grid container direction='column' spacing={1} sx={{ width: 'auto', mt: 0, ml: 0, mb: 8 }}>
        {characters?.map((character, index) => (
            <Grid key={index} item xs={12} sm={12} component={NavLink} to={`/characters/${character?.id}`} sx={{
                textDecoration: 'none', color: 'primary.contrastText'
            }}>
                <Card elevation={2}>
                    <Typography component='div' variant='h5' textAlign='center'>
                        {character?.name}
                    </Typography>
                </Card>
            </Grid>
        ))}
    </Grid>
);

export default AllCharactersPage;