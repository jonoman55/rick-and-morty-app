import { NavLink } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

// TODO : Convert into a Paper component
const NotFoundPage = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center' }}>
        <Typography component='p' variant='body1' sx={{ mb: 2 }}>
            404 - Page Not Found
        </Typography>
        <Button variant='contained' LinkComponent={NavLink} to='/'>
            Home
        </Button>
    </Box>
);

export default NotFoundPage;