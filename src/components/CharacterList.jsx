import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Box, Grid, Stack, Paper, Card, CardContent, Pagination } from '@mui/material';
import { Button } from '../components/controls';
import Character from './Character';
import Spinner from './Spinner';
import { setPage } from '../features/rickAndMortySlice';
import { useGetCharactersQuery } from '../services/rickAndMortyApi';

// TODO : Finish styling this component and fix the grid layout
// TODO : Convert the buttons into a bottom nav component
// TODO : Update pagination -> https://mui.com/components/pagination/#router-integration
const CharacterList = () => {
    const dispatch = useDispatch();
    const { page } = useSelector((state) => state.app);
    const { data, isLoading } = useGetCharactersQuery(page);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isLoading) {
            setCount(data?.info?.pages);
        }
        // eslint-disable-next-line
    }, [isLoading]);

    const handleChange = (event, value) => {
        dispatch(setPage(value));
    };  
  
    return isLoading ? <Spinner /> : (
        <Box sx={{ p: 2 }}>
            <Paper elevation={2} sx={{ p: 1, bgcolor: 'primary.dark', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Grid container spacing={4} sx={{ width: '100%', flex: '1 0 auto', mr: 8, mt: 0, ml: 4, mb: 4, p: 2, }}>
                    {data?.results?.map((character, index) => (
                        <Grid item key={index} component={NavLink} to={`/characters/${character?.id}`} xs={12} sm={10} md={6} lg={4} xl={4} sx={{
                            textDecoration: 'none', color: 'primary.contrastText'
                        }}>
                            <Character character={character} />
                        </Grid>
                    ))}
                    <Grid item xs={12} sm={10} md={6} lg={4} xl={4}>
                        <Card elevation={2} sx={{ display: 'flex', maxWidth: 475, minHeight: 150 }}>
                            <CardContent sx={{ p: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: '1 0 auto', '&:last-child': { pb: 0 } }}>
                                <Stack direction='row' width='100%' justifyContent='center' spacing={2} padding={1}>
                                    <Button variant='contained' onClick={() => dispatch(setPage(page - 1))} disabled={page === 1} sx={{ width: 125 }}>
                                        Previous
                                    </Button>
                                    <Button variant='contained' onClick={() => dispatch(setPage(page + 1))} disabled={page === count} sx={{ width: 125 }}>
                                        Next
                                    </Button>
                                </Stack>
                                <Stack direction='row' width='100%' justifyContent='center' spacing={2} padding={1}>
                                    <Button variant='contained' LinkComponent={NavLink} to='/characters/all' sx={{ width: 125 }}>
                                        Show All
                                    </Button>
                                    <Button variant='contained' LinkComponent={NavLink} to='/' sx={{ width: 125 }}>
                                        Home
                                    </Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Box sx={{ p: 1 }}>
                    <Pagination count={count} page={page} onChange={handleChange} />
                </Box>
            </Paper>
        </Box>
    );
};

export default CharacterList;