import { NavLink } from 'react-router-dom';
import { Typography, Card, Container, CardMedia } from '@mui/material';
import { Button } from '../components/controls';
import rickImg from '../images/pixel-rick.png';

// TODO : Convert into styled components
const NotFoundPage = () => (
    <Container maxWidth='xs'>
        <Card elevation={2} sx={{
            p: 2, width: '100%', display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center'
        }}>
            <Typography component='h4' variant='h5' sx={{ my: 2, color: 'primary.contrastText', fontWeight: 'bold' }}>
                404 - Page Not Found
            </Typography>
            <CardMedia
                component='img'
                src={rickImg}
                alt=''
                sx={{
                    border: '1px solid', borderRadius: (theme) => theme.shape.borderRadius, borderColor: 'custom.black',
                    bgcolor: (theme) => theme.palette.mode === 'light' ? 'custom.disabled' : 'custom.white', opacity: 0.9
                }}
            />
            <Button variant='contained' LinkComponent={NavLink} to='/' sx={{ my: 2 }}>
                Home
            </Button>
        </Card>
    </Container>
);

export default NotFoundPage;