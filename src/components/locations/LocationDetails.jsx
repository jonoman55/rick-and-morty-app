import { Link } from 'react-router-dom';
import { Fragment, useCallback, useEffect, useState, useMemo } from 'react';
import { Box, Stack, Typography, CardContent, Collapse, Icon } from '@mui/material';

import { FlexText } from '../controls';
import { Spinner, NavButtons, ExpandMoreButton } from '../design';
import { Card, Paper, CardActions, Image, TextLink, Section, TextBox, IconBox } from '../styled/LocationDetails.styled';
import { DimensionIcon, ResidentsIcon, TypeIcon } from '../../helpers/icons';
import { useGetAllCharactersQuery } from '../../services/rickAndMortyApi';
import { dimensionColor, typeColor } from '../../helpers/colors';

const LocationDetails = ({ location, image, navigate }) => {
    const [expanded, setExpanded] = useState(false);
    const [residents, setResidents] = useState([]);

    const ids = useMemo(() => {
        return location?.residents?.map((url) => url.split('/')[5]);
    }, [location]);

    const { data, isLoading, isFetching } = useGetAllCharactersQuery(
        ids !== [] ? ids : undefined
    );

    const fetchResidents = useCallback(() => {
        if (!isLoading && !isFetching) {
            if (!data?.info) setResidents(data);
        }
    }, [isLoading, isFetching, data]);

    useEffect(() => {
        fetchResidents();
    }, [fetchResidents]);

    return isLoading ? <Spinner /> : (
        <Card elevation={2}>
            <Title
                name={location?.name}
            />
            <ImageBox
                image={image}
            />
            <CardContent component={Paper} elevation={1}>
                <DetailsTitle
                    title={'Location Details'}
                />
                <Details
                    location={location}
                />
            </CardContent>
            <CardActions>
                <ResidentsBox
                    location={location}
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
                    <ResidentsList
                        residents={residents}
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

const Detail = ({ color, type, text, isDimension }) => (
    <Section>
        <IconBox>
            <Icon sx={{ color: color }}>
                {isDimension ? <DimensionIcon dimension={type} /> : <TypeIcon type={type} />}
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

const Title = ({ name }) => (
    <Typography component='h4' variant='h5' paragraph sx={{ color: 'custom.main', textAlign: 'center', mt: 2 }} gutterBottom>
        {name}
    </Typography>
);

const ImageBox = ({ image }) => (
    <Box sx={{ p: 1 }}>
        <Image
            component='img'
            src={image}
            height='100%'
            width='100%'
            alt='locationImg'
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

const Details = ({ location }) => (
    <Fragment>
        <Detail
            text={'Type:'}
            type={location?.type}
            color={typeColor(location?.type)}
            isDimension={false}
        />
        {location?.dimension && (
            <Fragment>
                <Detail
                    color={dimensionColor(location?.dimension)}
                    text={'Dimension:'}
                    type={location?.dimension}
                    isDimension={true}
                />
            </Fragment>
        )}
    </Fragment>
);

const ResidentsBox = ({ location }) => (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <ResidentsIcon count={location?.residents?.length} sx={{ color: 'custom.main', height: 16, width: 16 }} />
        <Typography variant='caption' fontSize={14}>
            &nbsp;{location?.residents?.length ? location?.residents?.length : "No"}&nbsp;Residents
        </Typography>
    </Box>
);

const ResidentsList = ({ residents }) => (
    <Stack direction='column' spacing={1} sx={{ textAlign: 'center', display: 'flex', alignItems: 'center' }}>
        {residents?.length > 1 ? residents?.map((resident, idx) => (
            <Box key={idx}>
                <TextLink component={Link} to={`/characters/${resident.id}`} variant='subtitle2'>
                    {resident.name}
                </TextLink>
            </Box>
        )) : (
            <TextLink component={Link} to={`/characters/${residents.id}`} variant='subtitle2'>
                {residents.name}
            </TextLink>
        )}
    </Stack>
);

export default LocationDetails;