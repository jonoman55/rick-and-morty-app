import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Link, Stack, Typography, Card } from '@mui/material';
import { Button } from '../components/controls';
import Spinner from '../components/Spinner';
import { useGetEpisodeByIdQuery } from '../services/rickAndMortyApi';

// TODO : Finish implementing this page
const EpisodePage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data, isLoading } = useGetEpisodeByIdQuery(id);
    const [episode, setEpisode] = useState({});

    useEffect(() => {
        if (!isLoading) {
            setEpisode(data);
        }
        // eslint-disable-next-line
    }, [isLoading]);

    console.log(episode);
    
    return isLoading ? <Spinner /> : (
        <Box sx={{ p: 2 }}>
            <Container sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center' }} maxWidth='md'>
                <Card elevation={2} sx={{ p: 1 }}>
                    <Typography component='h4' variant='h5' sx={{color: 'primary.contrastText', textAlign: 'center' }} gutterBottom>{episode.name}</Typography>
                    <Stack direction='row' spacing={2} justifyContent='center' sx={{ mt: 4, mb: 2 }}>
                        <Button variant='contained' LinkComponent={Link} href='/'>Home</Button>
                        <Button variant='contained' onClick={() => navigate(-1)}>Back</Button>
                    </Stack>
                </Card>
            </Container>
        </Box>
    );
};

export default EpisodePage;