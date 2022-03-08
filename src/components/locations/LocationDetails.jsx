import { Box, Stack, Typography, Card, CardMedia, CardContent, CardActions } from '@mui/material';

import { Button } from '../controls';

// TODO : Finish implementing and styling this component
const LocationDetails = ({ location, image, navigate }) => {
    console.log(location);
    // eslint-disable-next-line
    const residents = location?.residents?.map((resident, index) => (
        <Box key={index}>
            {console.log(resident)}
        </Box>
    ));
    return (
        <Card elevation={2} sx={{ p: 2, display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center' }}>
            <Typography component='h4' variant='h5' paragraph gutterBottom sx={{ color: 'primary.contrastText', textAlign: 'center' }}>
                {location?.name}
            </Typography>
            <Box sx={{ p: 1 }}>
                <CardMedia
                    component='img'
                    height='100%'
                    width='100%'
                    src={`${image}`}
                    alt=''
                    sx={{
                        p: 0, border: `1px solid black`,
                        borderRadius: (theme) => theme.shape.borderRadius,
                    }}
                />
            </Box>
            <CardContent>
                <Typography component='h5' variant='body1' sx={{ color: 'primary.contrastText', textAlign: 'center' }} gutterBottom>
                    Type: {location?.type}
                </Typography>
                {location?.dimension && (
                    <Typography component='p' variant='body1' sx={{ color: 'primary.contrastText', textAlign: 'center' }} gutterBottom>
                        Dimension: {location?.dimension}
                    </Typography>
                )}
                {/* Residents */}
                {/* <Stack direction='row' spacing={1} sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1 }}>
                    {location?.residents && (
                        <>{residents}</>
                    )}
                </Stack> */}
            </CardContent>
            <CardActions>
                <Stack direction='row' spacing={2} justifyContent='center' sx={{ mt: 4, mb: 2 }}>
                    <Button variant='contained' onClick={() => navigate('/')}>Home</Button>
                    <Button variant='contained' onClick={() => navigate(-1)}>Back</Button>
                </Stack>
            </CardActions>
        </Card>
    );
};

export default LocationDetails;