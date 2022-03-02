import { useState } from 'react';
import { Box, Container } from '@mui/material';

import { LocationsGrid } from '../components/locations';
import { UnderConstruction } from '../components/design/UnderConstruction';

// TODO : Finish implementing this page
const LocationsPage = () => {
    const [preview, setPreview] = useState(false);
    return (
        <Box sx={{ my: 4 }}>
            <Container maxWidth='md'>
                <UnderConstruction
                    preview={preview}
                    onClick={() => setPreview(!preview)}
                />
            </Container>
            {preview && (
                <Container maxWidth='xl'>
                    <LocationsGrid />
                </Container>
            )}
        </Box>
    );
};

export default LocationsPage;