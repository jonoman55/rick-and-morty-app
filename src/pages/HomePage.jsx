import { NavLink } from 'react-router-dom';
import { Stack, Container, Paper, Card } from '@mui/material';
import { Button } from '../components/controls';

// TODO : Finish styling this page
// TODO : Need to implement Episode and Location Pages
const HomePage = () => (
    <Container maxWidth='xs' disableGutters sx={{ mt: 4 }}>
        <Paper elevation={0}>
            <Card elevation={2} sx={{ p: 2 }}>
                <Stack spacing={4} sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'space-evenly', alignItems: 'center', }}>
                    <Button variant='contained' LinkComponent={NavLink} to='/characters' sx={{ width: 125 }}>Characters</Button>
                    <Button variant='contained' LinkComponent={NavLink} to='/episodes' sx={{ width: 125 }}>Episodes</Button>
                    <Button variant='contained' LinkComponent={NavLink} to='/locations' sx={{ width: 125 }}>Locations</Button>
                </Stack>
            </Card>
        </Paper>
    </Container>
);

export default HomePage;