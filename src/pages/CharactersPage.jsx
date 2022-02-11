import { Box, Container } from '@mui/material';
import CharacterGrid from '../components/CharacterGrid';

const CharactersPage = () => (
    <Box sx={{ my: 4 }}>
        <Container maxWidth='xl'>
            <CharacterGrid />
        </Container>
    </Box>
);

export default CharactersPage;