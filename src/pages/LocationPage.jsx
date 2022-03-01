import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Stack, Typography, Card, CardMedia, CardContent, CardActions } from '@mui/material';

import { Button } from '../components/controls';
import { Spinner } from '../components/Spinner';
import { useGetLocationByIdQuery } from '../services/rickAndMortyApi';

const getLocationImg = (id) => {
    switch (id) {
        case 1:
            return 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/713aedcd-9408-42c6-b34c-7afe51780b08/dc8fh6l-aa106f18-32bf-4807-bd59-a2da2b3761a1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcxM2FlZGNkLTk0MDgtNDJjNi1iMzRjLTdhZmU1MTc4MGIwOFwvZGM4Zmg2bC1hYTEwNmYxOC0zMmJmLTQ4MDctYmQ1OS1hMmRhMmIzNzYxYTEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xwwNZMbS1qVJmiJeTUEqRjyOxIPRXY0BN4CYU2s061Q';
        default:
            return 'https://hbomax-images.warnermediacdn.com/2021-06/ricky-and-morty-1200x675.jpg';
    }
};

// TODO : Finish styling this page
// TODO : Create a LocationDetails component for this page
// TODO : Incorporate pictures from: https://rickandmorty.fandom.com/wiki/Category:Locations
const LocationPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data, isLoading } = useGetLocationByIdQuery(id);
    const [location, setLocation] = useState({});
    const image = getLocationImg(parseInt(id));

    useEffect(() => {
        if (!isLoading) {
            setLocation(data);
        }
        // eslint-disable-next-line
    }, [isLoading]);

    console.log(location);
    
    return isLoading ? <Spinner /> : (
        <Box sx={{ my: 4 }}>
            <Container maxWidth='sm'>
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
                    </CardContent>
                    <CardActions>
                        <Stack direction='row' spacing={2} justifyContent='center' sx={{ mt: 4, mb: 2 }}>
                            <Button variant='contained' onClick={() => navigate('/')}>Home</Button>
                            <Button variant='contained' onClick={() => navigate(-1)}>Back</Button>
                        </Stack>
                    </CardActions>
                </Card>
            </Container>
        </Box>
    );
};

export default LocationPage;