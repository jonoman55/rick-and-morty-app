import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@mui/material';

import { Spinner } from '../design';
import Pagination from '../tools/Pagination';
import { ReusableGrid } from '../tools/ReusableGrid';
import { Paper } from '../styled/Grid.styled';
import { appActions } from '../../reducers/appSlice';
import { useGetEpisodesQuery } from '../../services/rickAndMortyApi';
import { usePathname } from '../../hooks/usePathname';
import { useQuery } from '../../hooks/useQuery';

const EpisodesGrid = () => {
    const query = useQuery();
    const pathname = usePathname();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { page } = useSelector((state) => state.app);
    const { data, isLoading } = useGetEpisodesQuery(page);

    const [count, setCount] = useState(0);
    const currentPage = parseInt(query.get('page') || '1', 10);

    useEffect(() => {
        if (pathname.includes('episodes')) {
            dispatch(appActions.setPage(currentPage));
            navigate(`${pathname}?page=${currentPage}`);
        }
    }, [currentPage, dispatch, navigate, pathname]);

    useEffect(() => {
        if (!isLoading) setCount(data?.info?.pages);
    }, [data, isLoading]);
  
    return isLoading ? <Spinner /> : (
        <Paper elevation={2}>
            <Grid container spacing={2}> 
                <ReusableGrid
                    xs={12} sm={6} md={6} lg={6} xl={3}
                    type='episodes'
                    items={data?.results}
                />
            </Grid>
            <Pagination
                path={pathname}
                count={count}
                currentPage={currentPage}
            />
        </Paper>
    );
};

export default EpisodesGrid;