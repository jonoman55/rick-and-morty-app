import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container } from '@mui/material';

import { Spinner } from '../components/design';
import { CharacterDetails } from '../components/characters';
import { useGetCharacterByIdQuery } from '../services/rickAndMortyApi';

const CharacterPage = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const [character, setCharacter] = useState({});

    const { data, isLoading } = useGetCharacterByIdQuery(id);

    useEffect(() => {
        if (!isLoading) setCharacter(data);
    }, [data, isLoading]);

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