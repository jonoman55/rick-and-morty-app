import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Grid, Stack } from '@mui/material';
import Character from './Character';
import Spinner from './Spinner';
import { setPage } from '../features/rickAndMortySlice';
import { useGetCharactersQuery } from '../services/rickAndMortyApi';

// TODO : Convert into a Paper component and finish styling
const CharacterList = () => {
    const dispatch = useDispatch();
    const { page } = useSelector((state) => state.app);
    const { data, isLoading } = useGetCharactersQuery(page);
    const [lastPage, setLastPage] = useState(0);

    useEffect(() => {
        if (!isLoading) {
            setLastPage(data?.info?.pages);
        }
        // eslint-disable-next-line
    }, [isLoading]);
  
    return isLoading ? <Spinner /> :  (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Grid container spacing={8}>
                {data?.results?.map((character, index) => (
                    <Grid item key={index} sx={{ display: 'flex', flexDirection:'row', alignItems: 'center' }}>
                        <Character character={character} />
                    </Grid>
                ))}
            </Grid>
            <Box component={Stack} direction='row' spacing={2} sx={{ mt: 2 }}>
                <Button variant='contained' onClick={() => dispatch(setPage(page - 1))} disabled={page === 1}>
                    Previous
                </Button>
                <Button variant='contained' onClick={() => dispatch(setPage(page + 1))} disabled={page === lastPage}>
                    Next
                </Button>
            </Box>
        </Box>
    );
};

export default CharacterList;