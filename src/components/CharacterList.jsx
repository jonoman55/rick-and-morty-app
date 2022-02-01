import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Box, Grid, Stack, Paper, Divider } from '@mui/material';
import { Button } from '../components/controls';
import Character from './Character';
import Spinner from './Spinner';
import { setPage } from '../features/rickAndMortySlice';
import { useGetCharactersQuery } from '../services/rickAndMortyApi';

// TODO : Finish styling this component and fix the grid layout
// TODO : Convert the buttons into a bottom nav component
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
  
    return isLoading ? <Spinner /> : (
        <Box sx={{ p: 2 }}>
            <Paper elevation={0} sx={{ p: 1, bgcolor: 'primary.light', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Grid container spacing={4} sx={{ width: 'auto', mt: 0, ml: 0, mb: 8 }}>
                    {data?.results?.map((character, index) => (
                        <Grid item key={index} component={NavLink} to={`/characters/${character?.id}`} xs={12} sm={12} md={6} lg={4} sx={{
                            textDecoration: 'none', color: 'primary.contrastText'
                        }}>
                            <Character character={character} />
                        </Grid>
                    ))}
                </Grid>
                <Divider flexItem variant='fullWidth' sx={{ mt: 2 }} />
                <Stack direction='row' spacing={2} sx={{ mt: 2 }}>
                    <Button variant='contained' onClick={() => dispatch(setPage(page - 1))} disabled={page === 1} sx={{ width: 125 }}>
                        Previous
                    </Button>
                    <Button variant='contained' onClick={() => dispatch(setPage(page + 1))} disabled={page === lastPage} sx={{ width: 125 }}>
                        Next
                    </Button>
                </Stack>
                <Stack direction='row' spacing={2} sx={{ my: 2 }}>
                    <Button variant='contained' LinkComponent={NavLink} to='/characters/all' sx={{ width: 125 }}>
                        Show All
                    </Button>
                    <Button variant='contained' LinkComponent={NavLink} to='/' sx={{ width: 125 }}>
                        Home
                    </Button>
                </Stack>
            </Paper>
        </Box>
    );
};

export default CharacterList;