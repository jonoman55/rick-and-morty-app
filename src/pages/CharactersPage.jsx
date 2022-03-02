import { Box, Container } from '@mui/material';

import { CharacterGrid } from '../components/characters';

const CharactersPage = () => (
    <Box sx={{ my: 4 }}>
        <Container maxWidth='xl'>
            <CharacterGrid />
        </Container>
    </Box>
);

export default CharactersPage;