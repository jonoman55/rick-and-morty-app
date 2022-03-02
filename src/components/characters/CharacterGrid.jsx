import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Grid } from '@mui/material';

import { Spinner } from '../design/Spinner';
import IconArray from '../design/IconArray';
import Pagination from '../tools/Pagination';
import { ReusableGrid } from '../tools/ReusableGrid';
import { Paper } from '../styled/Grid.styled';
import { setPage } from '../../reducers/appSlice';
import { useGetCharactersQuery } from '../../services/rickAndMortyApi';
import { usePathname } from '../../hooks/usePathname';
import { useQuery } from '../../hooks/useQuery';

const CharacterGrid = () => {
    const query = useQuery();
    const pathname = usePathname();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { page } = useSelector((state) => state.app);
    const { data, isLoading } = useGetCharactersQuery(page);
    
    const [count, setCount] = useState(0);
    const currentPage = parseInt(query.get('page') || '1', 10);

    useEffect(() => {
        if (pathname.includes('characters')) {
            dispatch(setPage(currentPage));
            navigate(`${pathname}?page=${currentPage}`);
        }
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
            <Paper elevation={2}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <ReusableGrid
                        xs={12} sm={12} md={6} lg={6} xl={6}
                        type='characters'
                        items={data?.results}
                    />
                </Grid>
                <Pagination
                    path={pathname}
                    count={count}
                    currentPage={currentPage}
                />
            </Paper>
        </Box>
    );
};

export default CharacterGrid;