import { Box, Container } from '@mui/material';

import { EpisodesGrid } from '../components/episodes';

// TODO : Finish implementing this page
const EpisodesPage = () => (
    <Box sx={{ my: 4 }}>
        <Container maxWidth='sm'>
            <EpisodesGrid />
        </Container>
    </Box>
);

export default EpisodesPage;