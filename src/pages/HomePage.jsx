import { NavLink } from 'react-router-dom';
import { Box, Button, Stack, Container } from '@mui/material';

// TODO : Finish styling this page
// TODO : Need to implement Episode and Location Pages
const HomePage = () => (
    <Container sx={{ marginY: 2 }}>
        <Box component={Stack} spacing={4} sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Button variant='contained' LinkComponent={NavLink} to='/characters'>Characters</Button>
            <Button variant='contained' LinkComponent={NavLink} to='/episodes'>Episodes</Button>
            <Button variant='contained' LinkComponent={NavLink} to='/locations'>Locations</Button>
        </Box>
    </Container>
);

export default HomePage;