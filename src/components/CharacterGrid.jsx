import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Box, Grid, Paper } from '@mui/material';
import IconArray from './IconArray';
import CharacterCard from './CharacterCard';
import NavCard from './NavCard';
import Spinner from './Spinner';
import Pagination from './Pagination';
import { setPage } from '../features/rickAndMortySlice';
import { useGetCharactersQuery } from '../services/rickAndMortyApi';

// TODO : Finish styling this component and fix the grid layout
// TODO : Make this component mobile friendly
const CharacterGrid = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { page } = useSelector((state) => state.app);
    const { data, isLoading } = useGetCharactersQuery(page);
    const [count, setCount] = useState(0);
    const currentPage = parseInt(query.get('page') || '1', 10);

    useEffect(() => {
        dispatch(setPage(currentPage));
        navigate(`/characters?page=${currentPage}`);
        // eslint-disable-next-line
    }, [currentPage]);

    useEffect(() => {
        if (!isLoading) {
            setCount(data?.info?.pages);
        }
        // eslint-disable-next-line
    }, [isLoading]);
  
    return isLoading ? <Spinner /> : (
        <Box>
            <IconArray />
            <Paper elevation={2} sx={{ p: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Grid container spacing={4} sx={{ width: '100%', mr: 8, mt: 0, ml: 4, mb: 4, p: 2 }}>
                    {data?.results?.map((character, index) => (
                        <Grid item key={index} component={NavLink} to={`/characters/${character?.id}`} xs={12} sm={10} md={6} lg={4} xl={4} sx={{
                            textDecoration: 'none', color: 'primary.contrastText'
                        }}>
                            <CharacterCard character={character} />
                        </Grid>
                    ))}
                    <Grid item xs={12} sm={10} md={6} lg={4} xl={4}>
                        <NavCard />
                    </Grid>
                </Grid>
                <Box sx={{ p: 1, mb: 1 }}>
                    <Pagination
                        count={count}
                        currentPage={currentPage}
                    />
                </Box>
            </Paper>
        </Box>
    );
};

export default CharacterGrid;