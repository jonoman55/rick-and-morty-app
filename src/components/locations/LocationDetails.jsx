import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { styled, Box, Stack, Typography, Card, CardMedia, CardContent, CardActions, Collapse, IconButton } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

import { Button } from '../controls';
import { Spinner } from '../design/Spinner';
import { useGetAllCharactersQuery } from '../../services/rickAndMortyApi';
import { ResidentsIcon } from '../../helpers/icons';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


// TODO : Convert to styled components
// TODO : Finish styling the Type and Dimension info
const LocationDetails = ({ location, image, navigate }) => {
    const [expanded, setExpanded] = useState(false);
    const [residents, setResidents] = useState([]);

    const handleExpandClick = () => setExpanded(!expanded);

    const ids = location?.residents?.map(url => url.split('/')[5]);

    const { data, isLoading, isFetching } = useGetAllCharactersQuery(ids !== [] ? ids : undefined); 

    const fetchResidents = useCallback(() => { 
        if (!isLoading && !isFetching) {
            if (!data?.info) setResidents(data);
        }
    }, [isLoading, isFetching, data]);

    useEffect(() => { 
        fetchResidents();
    }, [fetchResidents]);

    return isLoading ? <Spinner /> : (
        <Card elevation={2} sx={{ p: 2, display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center' }}>
            <Typography component='h4' variant='h5' paragraph gutterBottom sx={{ color: 'custom.main', textAlign: 'center', mt: 2 }}>
                {location?.name}
            </Typography>
            <Box sx={{ p: 1 }}>
                <CardMedia
                    component='img'
                    height='100%'
                    width='100%'
                    src={`${image}`}
                    alt=''
                    sx={{
                        p: 0, border: `1px solid black`,
                        borderRadius: (theme) => theme.shape.borderRadius,
                    }}
                />
            </Box>
            <CardContent>
                <Typography component='h5' variant='body1' sx={{ color: 'primary.contrastText', textAlign: 'center' }} gutterBottom>
                    Type: {location?.type}
                </Typography>
                {location?.dimension && (
                    <Typography component='p' variant='body1' sx={{ color: 'primary.contrastText', textAlign: 'center' }} gutterBottom>
                        Dimension: {location?.dimension}
                    </Typography>
                )}
            </CardContent>
            <CardActions sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <ResidentsIcon count={location?.residents?.length} sx={{ color: 'custom.main', height: 16, width: 16 }} />
                    <Typography variant='caption' fontSize={14}>
                        &nbsp;{location?.residents?.length ? location?.residents?.length : "No"} Residents
                    </Typography>
                </Box>
                {!data?.info && (
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                )}
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Stack direction='column' spacing={1} sx={{ textAlign: 'center', display: 'flex', alignItems: 'center' }}>
                        {residents?.length > 1 ? residents?.map((resident, idx) => (
                            <Box key={idx}>
                                <Typography component={Link} to={`/characters/${resident.id}`} variant='subtitle2' sx={{
                                    color: 'primary.contrastText', textDecoration: 'none', '&:hover': { color: 'custom.main' }
                                }}>
                                    {resident.name}
                                </Typography>
                            </Box>
                        )) : (
                            <Typography component={Link} to={`/characters/${residents.id}`} variant='subtitle2' sx={{
                                color: 'primary.contrastText', textDecoration: 'none', '&:hover': { color: 'custom.main' }
                            }}>
                                {residents.name}
                            </Typography>
                        )}
                    </Stack>
                </CardContent>
            </Collapse>
            <CardActions>
                <Stack direction='row' spacing={2} justifyContent='center' sx={{ mt: 4, mb: 2 }}>
                    <Button variant='contained' onClick={() => navigate('/')}>Home</Button>
                    <Button variant='contained' onClick={() => navigate(-1)}>Back</Button>
                </Stack>
            </CardActions>
        </Card>
    );
};

export default LocationDetails;