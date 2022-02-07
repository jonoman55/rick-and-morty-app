import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
                    <Typography component='h5' variant='subtitle1' color='text.secondary' textAlign='center' gutterBottom>
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
                                p: 0, borderRadius: (theme) => theme.shape.borderRadius,
                                border: `1px solid black`,
                            }}
                        />
                    </Box>
                    <CardContent>
                        <Typography component='p' variant='body1' sx={{ mt: 1, color: 'primary.contrastText', textAlign: 'center' }}>
                            Status: {character?.status}
                        </Typography>
                        <Typography component='p' variant='body1' sx={{ mt: 1, color: 'primary.contrastText', textAlign: 'center' }}>
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