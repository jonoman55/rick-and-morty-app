import { Box, Card, CardMedia, Typography } from '@mui/material';
import { Construction as ConstructionIcon } from '@mui/icons-material';

const EpisodesGrid = () => {
    return (
        <Card elevation={2} sx={{ p: 2, display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center' }}>
        <Typography component='h4' variant='h5' gutterBottom sx={{ color: 'primary.contrastText', textAlign: 'center' }}>
            Episodes
        </Typography>
        <CardMedia
            component='img'
            src='https://hbomax-images.warnermediacdn.com/2021-06/ricky-and-morty-1200x675.jpg'
            alt=''
            sx={{ p: 1, borderRadius: (theme) => theme.shape.borderRadius, objectFit: 'fill' }} />
        <Box component={ConstructionIcon} sx={{ color: 'custom.main', height: 64, width: 64, py: 1 }} />
        <Typography component='h4' variant='h5' gutterBottom sx={{ color: 'primary.contrastText', textAlign: 'center' }}>
            Under Construction
        </Typography>
        </Card>
    );
};

export default EpisodesGrid;