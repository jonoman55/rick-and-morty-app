import { Box, Container } from '@mui/material';

import { EpisodesGrid } from '../components/episodes';

const EpisodesPage = () => (
    <Box sx={{ my: 4 }}>
        <Container maxWidth='xl'>
            <EpisodesGrid />
        </Container>
    </Box>
);

export default EpisodesPage;