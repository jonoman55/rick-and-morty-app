import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Box, Card, Grid, Typography } from '@mui/material';
import Spinner from '../components/Spinner';
import { setCharacters, clearCharacters } from '../features/rickAndMortySlice'; 
import { useGetAllCharactersQuery, useGetCharactersQuery } from '../services/rickAndMortyApi';
import { createIdsList } from '../utils';

// TODO : Finish styling this page
// TODO : Be careful with this page - possible to hit API limit if pics are included (HTTP Status - 429)
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
        dispatch(setCharacters(data))
        // eslint-disable-next-line
    }, [isLoading, characterIds]);

    return isLoading ? <Spinner /> : (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography component='h5' variant='h6' sx={{ m: 1 }}>
                All Characters - Count: {characters?.length}
            </Typography>
            <Grid container direction='column' spacing={1} sx={{ width: 'auto', mt: 0, ml: 0, mb: 8 }}>
                {characters?.map((character, index) => (
                    <Grid key={index} item xs={12} sm={12} component={NavLink} to={`/characters/${character?.id}`} sx={{
                        textDecoration: 'none', color: 'primary.contrastText'
                    }}>
                        <Card elevation={2}>
                            <Typography component="div" variant="h5" textAlign='center'>
                                {character?.name}
                            </Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default AllCharactersPage;