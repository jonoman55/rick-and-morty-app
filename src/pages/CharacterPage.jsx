import { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { styled, Box, Container, Stack, Typography, Card, CardContent, CardActions, CardMedia } from '@mui/material';
import { Button } from '../components/controls';
import Spinner from '../components/Spinner';
import { useGetCharacterByIdQuery } from '../services/rickAndMortyApi';

const StyledNavLink = styled(Typography)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    textAlign: 'center',
    '&:hover': {
        color: theme.palette.custom.main,
    },
}));

const StyledText = styled(Typography)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    textAlign: 'center',
}));

const isUrl = (url) => {
    if (url?.startsWith('https'))
        return true;
    return false;
};

const createLink = (url) => `/locations/${url.split('/')[5]}`;

const Origin = ({ character }) => {
    const link = createLink(character?.origin?.url);
    console.log(link);
    if (isUrl(character?.origin?.url)) {
        return (
            <StyledNavLink component={NavLink} to={`${link}`} variant='subtitle1' gutterBottom>
                {character?.origin?.name}
            </StyledNavLink>
        );
    }
    else return (
        <StyledText component='p' variant='subtitle1' gutterBottom>
            {character?.origin?.name}
        </StyledText>
    );
};

const Location = ({ character }) => {
    const link = createLink(character?.location?.url);
    console.log(link);
    if (isUrl(character?.location?.url)) {
        return (
            <StyledNavLink component={NavLink} to={`${link}`} variant='body1' gutterBottom>
                Last Seen: {character?.location?.name}
            </StyledNavLink>
        );
    }
    else return (
        <StyledText component='p' variant='body1' gutterBottom>
            Last Seen: {character?.location?.name}
        </StyledText>
    );
};

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
        <Box sx={{ my: 4 }}>
            <Container maxWidth='sm'>
                <Card elevation={2} sx={{ p: 2, width: 'auto', display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography component='h4' variant='h5' gutterBottom sx={{ color: 'primary.contrastText', textAlign: 'center' }}>
                        {character?.name}
                    </Typography>
                    {character?.origin?.name && (
                        <Origin character={character} />
                    )}
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
                        {character?.location?.name && (
                            <Location character={character} />
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

export default CharacterPage;