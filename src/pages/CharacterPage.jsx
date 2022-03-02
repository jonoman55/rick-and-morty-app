import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container } from '@mui/material';

import { Spinner } from '../components/design/Spinner';
import { CharacterDetails } from '../components/characters';
import { useGetCharacterByIdQuery } from '../services/rickAndMortyApi';

const CharacterPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data, isLoading } = useGetCharacterByIdQuery(id);
    const [character, setCharacter] = useState({});

    useEffect(() => {
        if (!isLoading) setCharacter(data);
        // eslint-disable-next-line
    }, [isLoading]);

    return isLoading ? <Spinner /> : (
        <Box sx={{ my: 4 }}>
            <Container maxWidth='sm'>
                <CharacterDetails
                    character={character}
                    navigate={navigate}
                />
            </Container>
        </Box>
    );
};

export default CharacterPage;