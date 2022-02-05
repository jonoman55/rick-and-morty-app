import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Link, Stack, Typography, Card, CardContent } from '@mui/material';
import { Button } from '../components/controls';
import Spinner from '../components/Spinner';
import { useGetLocationByIdQuery } from '../services/rickAndMortyApi';

// TODO : Create a CharacterDetails component for this page and finish styling
const CharacterPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data, isLoading } = useGetLocationByIdQuery(id);
    const [location, setLocation] = useState({});

    useEffect(() => {
        if (!isLoading) {
            setLocation(data);
        }
        // eslint-disable-next-line
    }, [isLoading]);

    console.log(location);
    
    return isLoading ? <Spinner /> : (
        <Box sx={{ p: 2 }}>
            <Container sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center' }} maxWidth='md'>
                <Card elevation={2} sx={{ p: 1 }}>
                    <Typography component='h4' variant='h5' sx={{color: 'primary.contrastText', textAlign: 'center' }} gutterBottom>{location.name}</Typography>
                    <CardContent component='img' src={location.image} alt='' sx={{ p: 1, borderRadius: (theme) => theme.shape.borderRadius }} />
                    <Typography component='p' variant='body1' sx={{ color: 'primary.contrastText', textAlign: 'center' }}>{location.type}</Typography>
                    <Typography component='p' variant='body1' sx={{color: 'primary.contrastText', textAlign: 'center' }}>{location.dimension}</Typography>
                    <Stack direction='row' spacing={2} justifyContent='center' sx={{ mt: 4, mb: 2 }}>
                        <Button variant='contained' LinkComponent={Link} href='/'>Home</Button>
                        <Button variant='contained' onClick={() => navigate(-1)}>Back</Button>
                    </Stack>
                </Card>
            </Container>
        </Box>
    );
};

export default CharacterPage;