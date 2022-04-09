import { Link } from 'react-router-dom';
import { Box, Container } from '@mui/material';

import { Button } from '../components/controls';
import { NotFoundCard, NotFoundTitle, NotFoundImg } from '../components/styled/NotFound.styled';
import { pixelRick as rickImg } from '../images';

const NotFoundPage = () => (
    <Box sx={{ my: 4 }}>
        <Container maxWidth='xs'>
            <NotFoundCard elevation={2}>
                <NotFoundTitle component='h4' variant='h5'>
                    404 - Page Not Found
                </NotFoundTitle>
                <NotFoundImg
                    component='img'
                    src={rickImg}
                    alt=''
                />
                <Button variant='contained' component={Link} to='/' sx={{ my: 2 }}>
                    Home
                </Button>
            </NotFoundCard>
        </Container>
    </Box>
);

export default NotFoundPage;