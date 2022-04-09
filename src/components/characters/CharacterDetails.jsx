import { NavLink } from 'react-router-dom';
import { Box, Typography, CardContent, CardActions, Icon } from '@mui/material';
import { Visibility } from '@mui/icons-material';

import { FlexText } from '../controls';
import { NavButtons } from '../design';
import { Card, Name, Paper, OriginLink, StyledText, LocationLink, Image, Section, IconBox, TextBox } from '../styled/CharacterDetails.styled';
import { StatusIcon, GenderIcon, SpeciesIcon } from '../../helpers/icons';
import { genderColor, speciesColor, statusColor } from '../../helpers/colors';
import { createLink } from '../../helpers/urls';

const CharacterDetails = ({ character, navigate }) => (
    <Card elevation={2}>
        <Name component='h5' variant='h5'>
            {character?.name}
        </Name>
        {character?.origin?.name && (
            <Origin character={character} />
        )}
        <ImageBox
            image={character?.image}
        />
        <CardContent component={Paper} elevation={1}>
            <DetailsTitle
                title={'Character Details'}
            />
            <Detail
                color={genderColor(character?.gender)}
                type={character?.gender}
                text={"Gender:"}
                iconType={"gender"}
            />
            <Detail
                color={statusColor(character?.status)}
                type={character?.status}
                text={"Status:"}
                iconType={"status"}
            />
            <Detail
                color={speciesColor(character?.species)}
                type={character?.species}
                text={"Species:"}
                iconType={"species"}
            />
            {character?.location?.name && (
                <LastSeen character={character} />
            )}
        </CardContent>
        <CardActions>
            <NavButtons
                navigate={navigate}
                sx={{ mt: 4 }}
            />
        </CardActions>
    </Card>
);

const Origin = ({ character }) => (
    character?.origin?.url !== '' ? (
        <OriginLink component={NavLink} to={`${createLink('locations', character?.origin?.url)}`} variant='subtitle1' gutterBottom>
            {character?.origin?.name}
        </OriginLink>
    ) : (
        <StyledText component='p' variant='subtitle1' gutterBottom>
            {character?.origin?.name}
        </StyledText>
    )
);

const Location = ({ character }) => (
    character?.location?.url !== '' ? (
        <LocationLink component={NavLink} to={`${createLink('locations', character?.location?.url)}`} variant='body1' gutterBottom>
            {character?.location?.name}
        </LocationLink>
    ) : (
        <StyledText component='p' variant='body1' gutterBottom>
            {character?.location?.name}
        </StyledText>
    )
);

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

const TypeIcon = ({ type, iconType }) => {
    if (iconType === 'species') {
        return <SpeciesIcon species={type} />;
    }
    if (iconType === 'gender') {
        return <GenderIcon gender={type} />;
    }
    if (iconType === 'status') {
        return <StatusIcon status={type} />;
    }
};

const Detail = ({ color, type, text, iconType }) => (
    <Section>
        <IconBox>
            <Icon sx={{ color: color }}>
                <TypeIcon type={type} iconType={iconType} />
            </Icon>
        </IconBox>
        <TextBox>
            <Typography component='p' variant='body1' sx={{ mt: 1, color: 'primary.contrastText' }} gutterBottom>
                {text}
            </Typography>
            <Typography component='p' variant='body1' sx={{ ml: 1, mt: 1, color: color, fontWeight: 'bold' }} gutterBottom>
                {type}
            </Typography>
        </TextBox>
    </Section>
);

const DetailsTitle = ({ title }) => (
    <FlexText sx={{
        p: 1.5, m: 1, color: 'primary.contrastText', bgcolor: 'custom.main',
        alignSelf: 'center', cursor: 'default', fontWeight: 'bold', borderRadius: '1.5rem'
    }}>
        {title}
    </FlexText>
);

const LastSeen = ({ character }) => (
    <Section>
        <IconBox>
            <Visibility sx={{ color: 'custom.seen' }} />
        </IconBox>
        <TextBox>
            <Typography component='p' variant='body1' sx={{ mt: 1, color: 'primary.contrastText' }} gutterBottom>
                Last Seen:
            </Typography>
            <Location character={character} />
        </TextBox>
    </Section>
);

export default CharacterDetails;