import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container } from '@mui/material';

import { Spinner } from '../components/design';
import { EpisodeDetails } from '../components/episodes';
import { useGetEpisodeByIdQuery } from '../services/rickAndMortyApi';

// TODO : Finish implementing and styling this page
// TODO : Create a EpisodeDetails component for this page
// TODO : Incorporate pictures from: https://rickandmorty.fandom.com/wiki/Category:Episodes
const EpisodePage = () => {
    const { id } = useParams();

    const navigate = useNavigate();
    
    const [episode, setEpisode] = useState({});

    const { data, isLoading } = useGetEpisodeByIdQuery(id);

    useEffect(() => {
        if (!isLoading) setEpisode(data);
    }, [data, isLoading]);

    console.log(episode);
    
    return isLoading ? <Spinner /> : (
        <Box sx={{ my: 4 }}>
            <Container maxWidth='sm'>
                <EpisodeDetails
                    episode={episode}
                    navigate={navigate}
                />
            </Container>
        </Box>
    );
};

export default EpisodePage;

