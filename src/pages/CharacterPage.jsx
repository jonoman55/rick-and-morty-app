import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, Link, Stack, Typography } from '@mui/material';
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
        <Box>
            <Typography component='h4' variant='h6'>Character ID: {id}</Typography>
            <Typography component='p'>{character.name} - {character.status}</Typography>
            <Box component='img' src={character.image} alt='' />
            <Box component={Stack} direction='row' spacing={2} justifyContent='center'>   
                <Button variant='contained' LinkComponent={Link} href='/'>Home</Button>
                <Button variant='contained' onClick={() => navigate(-1)}>Back</Button>
            </Box>
        </Box>
    );
};

export default CharacterPage;