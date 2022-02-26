import { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { styled, Box, Container, Stack, Typography, Card, CardContent, CardActions, CardMedia, Paper, Icon } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import { Button } from '../components/controls';
import Spinner from '../components/Spinner';
import { StatusIcon, GenderIcon, SpeciesIcon } from '../helpers/icons';
import { useGetCharacterByIdQuery } from '../services/rickAndMortyApi';
import { genderColor, speciesColor, statusColor } from '../helpers/colors';

const StyledNavLink = styled(Typography)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    textAlign: 'center',
    '&:hover': {
        color: theme.palette.custom.seen,
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

const originStyles = {
    color: 'custom.main',
    fontWeight: 'bold',
    '&:hover': {
        color: 'custom.darkDisabled'
    },
};

const Origin = ({ character }) => {
    const link = createLink(character?.origin?.url);
    if (isUrl(character?.origin?.url)) {
        return (
            <StyledNavLink component={NavLink} to={`${link}`} variant='subtitle1' gutterBottom sx={originStyles}>
                {character?.origin?.name}
            </StyledNavLink>
        );
    }
    else return (
        <StyledText component='p' variant='subtitle1' gutterBottom sx={originStyles}>
            {character?.origin?.name}
        </StyledText>
    );
};

const linkStyles = {
    m: 0, py: 1,
    color: 'custom.seen',
    fontWeight: 'bold',
    '&:hover': {
        color: 'custom.darkDisabled',
        cursor: 'pointer'
    }
};

const Location = ({ character }) => {
    const link = createLink(character?.location?.url);
    if (isUrl(character?.location?.url)) {
        return (
            <StyledNavLink component={NavLink} to={`${link}`} variant='body1' gutterBottom sx={linkStyles}>
                Last Seen: {character?.location?.name}
            </StyledNavLink>
        );
    }
    else return (
        <StyledText component='p' variant='body1' gutterBottom sx={linkStyles}>
            Last Seen: {character?.location?.name}
        </StyledText>
    );
};

// TODO : Finish styling this page
// TODO : Create a CharacterDetails component for this page
// TODO : Fix last seen styles
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
                    <CardContent component={Paper} elevation={1} sx={{
                        display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', mt: 1, bgcolor: 'primary.main',
                        justifyContent: 'center', alignItems: 'flex-start', width: '80%', height: '100%'
                    }}>
                        <Box sx={{
                            display: 'flex', flexDirection: 'row', flexWrap: 'nowrap',
                            justifyContent: 'flex-start', alignItems: 'center', width: '100%', height: '100%'
                        }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', p: 1, mx: 1 }}>
                                <Icon sx={{ color: genderColor(character?.gender) }} >
                                    <GenderIcon gender={character?.gender} />
                                </Icon>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'space-around', p: 1, mx: 1 }}>
                                <Typography component='p' variant='body1' sx={{ mt: 1, color: 'primary.contrastText', textAlign: 'center' }} gutterBottom>
                                    Gender:
                                </Typography>
                                <Typography variant='body1' sx={{ ml: 1, mt: 1, color: genderColor(character?.gender), textAlign: 'center', fontWeight: 'bold' }} gutterBottom>
                                    {character?.gender}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                            display: 'flex', flexDirection: 'row', flexWrap: 'nowrap',
                            justifyContent: 'flex-start', alignItems: 'center', width: '100%', height: '100%'
                        }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', p: 1, mx: 1 }}>
                                <Icon sx={{ color: statusColor(character?.status) }} >
                                    <StatusIcon status={character?.status} />
                                </Icon>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'space-around', p: 1, mx: 1 }}>
                                <Typography component='p' variant='body1' sx={{ mt: 1, color: 'primary.contrastText', textAlign: 'center' }} gutterBottom>
                                    Status:
                                </Typography>
                                <Typography variant='body1' sx={{ ml: 1, mt: 1, color: statusColor(character?.status), textAlign: 'center', fontWeight: 'bold' }} gutterBottom>
                                    {character?.status}
                                </Typography>
                            </Box>
                        </Box>
                        {character?.location?.name && (
                            <Box sx={{
                                display: 'flex', flexDirection: 'row', flexWrap: 'nowrap',
                                justifyContent: 'flex-start', alignItems: 'center', width: '100%', height: '100%'
                            }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                                    <Visibility sx={{ color: 'custom.seen' }} />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', p: 1, mx: 1 }}>
                                    <Location character={character} />
                                </Box>
                            </Box>
                        )}
                        <Box sx={{
                            display: 'flex', flexDirection: 'row', flexWrap: 'nowrap',
                            justifyContent: 'flex-start', alignItems: 'center', width: '100%', height: '100%'
                        }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', p: 1, mx: 1 }}>
                                <Icon sx={{ color: speciesColor(character?.species) }} >
                                    <SpeciesIcon species={character?.species} />
                                </Icon>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'space-around', p: 1, mx: 1 }}>
                                <Typography component='p' variant='body1' sx={{ mt: 1, color: 'primary.contrastText', textAlign: 'center' }} gutterBottom>
                                    Species:
                                </Typography>
                                <Typography variant='body1' sx={{ ml: 1, mt: 1, color: speciesColor(character?.species), textAlign: 'center', fontWeight: 'bold' }} gutterBottom>
                                    {character?.species}
                                </Typography>
                            </Box>
                        </Box>
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