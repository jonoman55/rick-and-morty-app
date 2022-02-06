import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Box, Grid, Stack, Paper, Card, CardContent, Pagination, PaginationItem } from '@mui/material';
import { Button } from '../components/controls';
import IconArray from '../components/IconArray';
import Character from './Character';
import Spinner from './Spinner';
import { setPage } from '../features/rickAndMortySlice';
import { useGetCharactersQuery } from '../services/rickAndMortyApi';

// TODO : Finish styling this component and fix the grid layout
// TODO : Figure out how to separate the pagination and nav card
// TODO : Update the nav card (remove nex/previous) and add location and episodes
const CharacterList = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { page } = useSelector((state) => state.app);
    const { data, isLoading } = useGetCharactersQuery(page);
    const [count, setCount] = useState(0);
    const currentPage = parseInt(query.get('page') || '1', 10);

    useEffect(() => {
        if (page !== 1) {
            navigate(`?page=${page}`);
        }
        // eslint-disable-next-line
    }, [page]);

    useEffect(() => {
        if (!isLoading) {
            setCount(data?.info?.pages);
        }
        // eslint-disable-next-line
    }, [isLoading]);

    const handleChange = (event, value) => {
        dispatch(setPage(value));
        navigate(currentPage);
    };  
  
    return isLoading ? <Spinner /> : (
        <Box sx={{ p: 2 }}>
            <IconArray />
            <Paper elevation={2} sx={{ p: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Grid container spacing={4} sx={{ width: '100%', flex: '1 0 auto', mr: 8, mt: 0, ml: 4, mb: 4, p: 2, }}>
                    {data?.results?.map((character, index) => (
                        <Grid item key={index} component={NavLink} to={`/characters/${character?.id}`} xs={12} sm={10} md={6} lg={4} xl={4} sx={{
                            textDecoration: 'none', color: 'primary.contrastText'
                        }}>
                            <Character character={character} />
                        </Grid>
                    ))}
                    {/* Nav Card Grid Item */}
                    <Grid item xs={12} sm={10} md={6} lg={4} xl={4}>
                        <Card elevation={2} sx={{ display: 'flex', maxWidth: 475, minHeight: 150 }}>
                            <CardContent sx={{
                                p: 0, bgcolor: 'primary.main', display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: '1 0 auto', '&:last-child': { pb: 0 }
                            }}>
                                <Stack direction='row' width='100%' justifyContent='center' spacing={2} padding={1}>
                                    <Button variant='contained' LinkComponent={NavLink} to='/' sx={{ width: 125 }}>
                                        Home
                                    </Button>
                                    <Button variant='contained' LinkComponent={NavLink} to='/search' sx={{ width: 125 }}>
                                        Search
                                    </Button>
                                </Stack>
                                <Stack direction='row' width='100%' justifyContent='center' spacing={2} padding={1}>
                                    <Button variant='contained' LinkComponent={NavLink} to='/episodes' sx={{ width: 125 }}>
                                        Episodes
                                    </Button>
                                    <Button variant='contained' LinkComponent={NavLink} to='/locations' sx={{ width: 125 }}>
                                        Locations
                                    </Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Box sx={{ p: 1 }}>
                    <Pagination
                        variant='outlined'
                        shape='rounded'
                        count={count}
                        page={currentPage}
                        onChange={handleChange}
                        renderItem={(item) => (
                            <PaginationItem
                                component={Link}
                                to={`/characters${item.page === 1 ? '' : `?page=${item.page}`}`}
                                {...item}
                            />
                        )}
                    />
                </Box>
            </Paper>
        </Box>
    );
}

export default CharacterList;