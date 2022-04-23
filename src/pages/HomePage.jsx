import { Box, Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { HomeCard } from '../components/home';
import { appActions } from '../reducers/appSlice';
import { useNotifier } from '../hooks/useNotifier';

const HomePage = () => {
    const notify = useNotifier();
    const dispatch = useDispatch();
    
    const { hasLoaded } = useSelector((state) => state.app);

    useEffect(() => {
        dispatch(appActions.setHasLoaded(true));
    }, [dispatch]);

    useEffect(() => {
        if (!hasLoaded) {
            notify('Welcome to The Rick and Morty Portal!', 'success');
        }
    }, [hasLoaded, notify]);

    return (
        <Box sx={{ my: 4 }}>
            <Container maxWidth='sm'>
                <HomeCard />
            </Container>
        </Box>
    );
};

export default HomePage;