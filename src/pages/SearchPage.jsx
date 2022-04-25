import { useState } from 'react';
import { Box, Container } from '@mui/material';

import { Search } from '../components/search';
import { UnderConstruction } from '../components/design';

// TODO : Finish implementing this page
const SearchPage = () => {
    // eslint-disable-next-line no-unused-vars
    const [preview, setPreview] = useState(false);
    return (
        <Box sx={{ my: 4 }}>
            <Container maxWidth='md'>
                <UnderConstruction
                    title='Search'
                    // withPreview={true}
                    // preview={preview}
                    // onClick={() => setPreview(!preview)}
                />
            </Container>
            {preview && (
                <Search />
            )}
        </Box>
    );
};

export default SearchPage;