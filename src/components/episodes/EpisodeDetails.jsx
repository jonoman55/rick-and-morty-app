import { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, CardContent, Icon, Stack, Collapse } from '@mui/material';

import { FlexText } from '../controls';
import { ExpandMoreButton, NavButtons } from '../design';
import { Card, Paper, CardActions, TextLink, Section, TextBox, IconBox, Image } from '../styled/EpisodeDetails.styled';
import { ResidentsIcon } from '../../helpers/icons';
import { useGetAllCharactersQuery } from '../../services/rickAndMortyApi';

const EpisodeDetails = ({ episode, navigate }) => {
    const [expanded, setExpanded] = useState(false);
    const [characters, setCharacters] = useState([]);

    const ids = useMemo(() => {
        return episode?.characters?.map((url) => url.split('/')[5]);
    }, [episode]);

    const { data, isLoading, isFetching } = useGetAllCharactersQuery(
        ids !== [] ? ids : undefined
    );

    const fetchCharacters = useCallback(() => {
        if (!isLoading && !isFetching) {
            if (!data?.info) setCharacters(data);
        }
    }, [isLoading, isFetching, data]);

    useEffect(() => {
        fetchCharacters();
    }, [fetchCharacters]);

    return (
        <Card elevation={2}>
            <Title
                name={episode?.name}
            />
            {/* TODO : Find a good source or image for each episode or remove this component */}
            {/* <ImageBox
                image={''}
            /> */}
            <CardContent component={Paper} elevation={1}>
                <DetailsTitle
                    title={'Episode Details'}
                />
                <Details
                    episode={episode}
                />
            </CardContent>
            <CardActions>
                <CharactersBox
                    episode={episode}
                />
                {!data?.info && (
                    <ExpandMoreButton
                        expand={expanded}
                        onClick={() => setExpanded(!expanded)}
                    />
                )}
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
                <CardContent>
                    <CharactersList
                        characters={characters}
                    />
                </CardContent>
            </Collapse>
            <CardActions sx={{ justifyContent: 'center' }}>
                <NavButtons
                    navigate={navigate}
                    sx={{ mt: 4, mb: 2 }}
                />
            </CardActions>
        </Card>
    );
};

const Detail = ({ color, subtext, text }) => (
    <Section>
        <IconBox>
            <Icon sx={{ color: color }}>
                {/* TODO : Create Icons and color helpers for Episode Number and First Aired */}
            </Icon>
        </IconBox>
        <TextBox>
            <Typography component='p' variant='body1' sx={{ mt: 1, color: 'primary.contrastText' }} gutterBottom>
                {text}
            </Typography>
            <Typography component='p' variant='body1' sx={{ ml: 1, mt: 1, color: color, fontWeight: 'bold' }} gutterBottom>
                {subtext}
            </Typography>
        </TextBox>
    </Section>
);

const Title = ({ name }) => (
    <Typography component='h4' variant='h5' paragraph sx={{ color: 'custom.main', textAlign: 'center', mt: 2 }} gutterBottom>
        {name}
    </Typography>
);

// eslint-disable-next-line no-unused-vars
const ImageBox = ({ image }) => (
    <Box sx={{ p: 1 }}>
        <Image
            component='img'
            src={image}
            height='100%'
            width='100%'
            alt=''
        />
    </Box>
);

const DetailsTitle = ({ title }) => (
    <FlexText sx={{
        p: 1.5, m: 1, color: 'primary.contrastText', bgcolor: 'custom.main',
        alignSelf: 'center', cursor: 'default', fontWeight: 'bold', borderRadius: '1.5rem'
    }}>
        {title}
    </FlexText>
);

const Details = ({ episode }) => (
    <Fragment>
        <Detail
            text={'Episode Number:'}
            subtext={episode?.episode}
        />
        <Detail
            text={'First Aired:'}
            subtext={episode?.air_date}
        />
    </Fragment>
);

const CharactersBox = ({ episode }) => (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <ResidentsIcon count={episode?.characters?.length} sx={{ color: 'custom.main', height: 16, width: 16 }} />
        <Typography variant='caption' fontSize={14}>
            &nbsp;{episode?.characters?.length ? episode?.characters?.length : "No"}&nbsp;Characters
        </Typography>
    </Box>
);

const CharactersList = ({ characters }) => (
    <Stack direction='column' spacing={1} sx={{ textAlign: 'center', display: 'flex', alignItems: 'center' }}>
        {characters?.length > 1 ? characters?.map((character, idx) => (
            <Box key={idx}>
                <TextLink component={Link} to={`/characters/${character.id}`} variant='subtitle2'>
                    {character.name}
                </TextLink>
            </Box>
        )) : (
            <TextLink component={Link} to={`/characters/${characters.id}`} variant='subtitle2'>
                {characters.name}
            </TextLink>
        )}
    </Stack>
);

export default EpisodeDetails;