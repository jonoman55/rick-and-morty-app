import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Box, Grid, Paper } from '@mui/material';

import { Spinner } from './Spinner';
import IconArray from './IconArray';
import CharacterCard from './CharacterCard';
import Pagination from './Pagination';
import { setPage } from '../reducers/appSlice';
import { useGetCharactersQuery } from '../services/rickAndMortyApi';

// TODO : Create reusable Grid Component from this page to use in the EpisodesPage and LocationsPage pages
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
            <Paper elevation={2} sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {data?.results?.map((character, index) => (
                        <Grid item key={index} component={NavLink} to={`/characters/${character?.id}`} xs={12} sm={12} md={6} lg={6} xl={4} sx={{
                            textDecoration: 'none', color: 'primary.contrastText'
                        }}>
                            <CharacterCard character={character} />
                        </Grid>
                    ))}
                </Grid>
                <Pagination count={count} currentPage={currentPage} />
            </Paper>
        </Box>
    );
};

export default CharacterGrid;