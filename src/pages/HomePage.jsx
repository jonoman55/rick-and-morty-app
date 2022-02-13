import { NavLink } from 'react-router-dom';
import { Box, Stack, Container, Card } from '@mui/material';
import { Button } from '../components/controls';

// TODO : Finish styling this page
// TODO : Need to implement Episode and Location Pages
// TODO : Create cards folder in components and create a HomeCard
const HomePage = () => (
    <Box sx={{ mt: 4 }}>
        <Container maxWidth='xs'>
            <Card elevation={2} sx={{ p: 2 }}>
                <Stack spacing={4} sx={{ py: 1, display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'space-evenly', alignItems: 'center', }}>
                    <Button variant='contained' LinkComponent={NavLink} to='/characters' sx={{ width: 125 }}>Characters</Button>
                    <Button variant='contained' LinkComponent={NavLink} to='/locations' sx={{ width: 125 }}>Locations</Button>
                    <Button variant='contained' LinkComponent={NavLink} to='/episodes' sx={{ width: 125 }}>Episodes</Button>
                    <Button variant='contained' LinkComponent={NavLink} to='/search' sx={{ width: 125 }}>Search</Button>
                </Stack>
            </Card>
        </Container>
    </Box>
);

export default HomePage;