import { Box, Container, Card, CardMedia, Typography } from '@mui/material';

// TODO : Finish styling this page
// TODO : Create reusable Grid Component from CharactersPage to use in this page and Episodes
const LocationsPage = () => (
    <Box sx={{ mt: 4 }}>
        <Container maxWidth='sm'>
            <Card elevation={2} sx={{ p: 2, display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center' }}>
                <Typography component='h4' variant='h5' sx={{ color: 'primary.contrastText', textAlign: 'center' }} gutterBottom>
                    Locations
                </Typography>
                <CardMedia
                    component='img'
                    src='https://hbomax-images.warnermediacdn.com/2021-06/ricky-and-morty-1200x675.jpg'
                    alt=''
                    sx={{ p: 1, borderRadius: (theme) => theme.shape.borderRadius, objectFit: 'fill' }}
                />
            </Card>
        </Container>
    </Box>
);

export default LocationsPage;