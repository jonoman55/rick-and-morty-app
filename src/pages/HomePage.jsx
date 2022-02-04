import { NavLink } from 'react-router-dom';
import { Button, Stack, Container, Paper } from '@mui/material';

// TODO : Finish styling this page
// TODO : Need to implement Episode and Location Pages
const HomePage = () => (
    <Container maxWidth='lg' disableGutters>
        <Paper elevation={0} sx={{ bgcolor: 'inherit' }}>
            <Stack spacing={4} sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Button variant='contained' LinkComponent={NavLink} to='/characters'>Characters</Button>
                <Button variant='contained' LinkComponent={NavLink} to='/episodes'>Episodes</Button>
                <Button variant='contained' LinkComponent={NavLink} to='/locations'>Locations</Button>
            </Stack>
        </Paper>
    </Container>
);

export default HomePage;