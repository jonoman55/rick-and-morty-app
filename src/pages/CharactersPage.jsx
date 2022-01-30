import { NavLink } from 'react-router-dom';
import { Box, Button, Container, Stack } from '@mui/material';
import CharacterList from '../components/CharacterList';

// TODO : Finish styling this page
const CharactersPage = () => (
    <Container sx={{ marginY: 2 }}>
        <CharacterList />
        <Box component={Stack} direction='row' spacing={2} sx={{ mt: 1, display: 'flex', justifyContent: 'center' }}>
            <Button variant='contained' LinkComponent={NavLink} to='/characters/all'>Show All</Button>
            <Button variant='contained' LinkComponent={NavLink} to='/'>Home</Button>
        </Box>
    </Container>
);

export default CharactersPage;