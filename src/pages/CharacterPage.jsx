import { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { Box, Container, Stack, Typography, Card, CardContent, CardActions, CardMedia } from '@mui/material';
import { Button } from '../components/controls';
import Spinner from '../components/Spinner';
import { useGetCharacterByIdQuery } from '../services/rickAndMortyApi';

// TODO : Create a CharacterDetails component for this page and finish styling
const CharacterPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data, isLoading } = useGetCharacterByIdQuery(id);
    const [character, setCharacter] = useState({});

    useEffect(() => {
        if (!isLoading) {
            setCharacter(data);
        }
        // eslint-disable-next-line
    }, [isLoading]);

    console.log(character);
    
    return isLoading ? <Spinner /> : (
        <Box sx={{ p: 2 }}>
            <Container maxWidth='sm'>
                <Card elevation={2} sx={{
                    p: 2, width: 'auto', display: 'flex', flexDirection: 'column', flexWrap: 'nowrap',
                    justifyContent: 'center', alignItems: 'center', '& .MuiCardContent-root:last-child': { pb: 0 }
                }}>
                    <Typography component='h4' variant='h5' gutterBottom sx={{ color: 'primary.contrastText', textAlign: 'center' }}>
                        {character?.name}
                    </Typography>
                    <Typography component={NavLink} to={`/locations/${character?.origin?.url.slice(-1)}`} variant='subtitle1' gutterBottom sx={{
                        textDecoration: 'none',
                        color: 'text.secondary',
                        textAlign: 'center',
                        '&:hover': {
                            color: 'custom.main'
                        }
                    }}>
                        {character?.origin?.name}
                    </Typography>
                    <Box sx={{ p: 1 }}>
                        <CardMedia
                            component='img'
                            src={character?.image}
                            height='100%'
                            width='100%'
                            alt=''
                            sx={{
                                p: 0, border: `1px solid black`,
                                borderRadius: (theme) => theme.shape.borderRadius,
                            }}
                        />
                    </Box>
                    <CardContent>
                        <Typography component='p' variant='body1' sx={{ mt: 1, color: 'primary.contrastText', textAlign: 'center' }} gutterBottom>
                            Status: {character?.status}
                        </Typography>
                        <Typography component={NavLink} to={`/locations/${character?.location?.url.slice(-1)}`} variant='body1' gutterBottom sx={{
                            textDecoration: 'none',
                            color: 'primary.contrastText',
                            textAlign: 'center',
                            '&:hover': {
                                color: 'custom.main'
                            }
                        }}>
                            Last Seen: {character?.location?.name}
                        </Typography>
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

export default CharacterPage;