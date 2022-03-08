import { Box, Container } from '@mui/material';

import { LocationsGrid } from '../components/locations';

const LocationsPage = () => (
    <Box sx={{ my: 4 }}>
        <Container maxWidth='xl'>
            <LocationsGrid />
        </Container>
    </Box>
);

export default LocationsPage;