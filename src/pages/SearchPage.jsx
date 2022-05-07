import { Box, Container } from '@mui/material';

import { Search } from '../components/search';

const SearchPage = () => (
    <Box sx={{ my: 8 }}>
        <Container maxWidth='xl'>
            <Search />
        </Container>
    </Box>
);

export default SearchPage;