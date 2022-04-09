import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container } from '@mui/material';

import { Spinner } from '../components/design';
import { LocationDetails } from '../components/locations';
import { useGetLocationByIdQuery } from '../services/rickAndMortyApi';
import { getLocationImg } from '../helpers/urls';

const LocationPage = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const [location, setLocation] = useState({});

    const { data, isLoading } = useGetLocationByIdQuery(id);
    
    const image = getLocationImg(parseInt(id));

    useEffect(() => {
        if (!isLoading) setLocation(data);
    }, [data, isLoading]);
    
    return isLoading ? <Spinner /> : (
        <Box sx={{ my: 4 }}>
            <Container maxWidth='sm'>
                <LocationDetails
                    location={location}
                    image={image}
                    navigate={navigate}
                />
            </Container>
        </Box>
    );
};

export default LocationPage;