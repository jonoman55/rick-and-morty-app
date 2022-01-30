import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Container, Grid, Typography } from '@mui/material';
import Character from '../components/Character';
import Spinner from '../components/Spinner';
import { setAllCharacters, clearCharacters } from '../features/rickAndMortySlice'; 
import { useGetAllCharactersQuery, useGetCharactersQuery } from '../services/rickAndMortyApi';
import { createIdsList } from '../utils';

// TODO : Finish styling this page
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

    useEffect(() => {
        if (characters) {
            dispatch(clearCharacters([]));
        }
        dispatch(setAllCharacters(data))
        // eslint-disable-next-line
    }, [isLoading, characterIds]);

    return isLoading ? <Spinner /> : (
        <Box>
            <Container sx={{ marginY: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component='h5' variant='h6' sx={{ m: 1 }}>
                    All Characters - Count: {characters?.length}
                </Typography>
                <Grid container direction='column' spacing={1}>
                    {characters?.map((character, index) => (
                        <Grid item xs={12} sm={12} key={index}>
                            <Character character={character} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default AllCharactersPage;