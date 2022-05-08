import { styled, Box, Card as MuiCard, CardMedia as MuiCardMedia, Container, Typography } from '@mui/material';
import { Construction as ConstructionIcon } from '@mui/icons-material';

import { Button } from '../controls';

const Card = styled(MuiCard)(({ theme }) => ({
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center'
}));

const CardMedia = styled(MuiCardMedia)(({ theme }) => ({
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    objectFit: 'fill' 
}));

const UnderConstruction = ({ title, withPreview, preview, onClick }) => (
    <Box sx={{ my: 4 }}>
        <Container maxWidth='sm'>
            <Card elevation={2}>
                <Typography component='h4' variant='h5' gutterBottom sx={{ color: 'primary.contrastText', textAlign: 'center' }}>
                    {title}
                </Typography>
                <CardMedia
                    component='img'
                    src='https://hbomax-images.warnermediacdn.com/2021-06/ricky-and-morty-1200x675.jpg'
                    alt='under construction'
                />
                <Box
                    component={ConstructionIcon}
                    sx={{ color: 'custom.main', height: 64, width: 64, py: 1 }}
                />
                <Typography component='h4' variant='h5' paragraph gutterBottom sx={{ color: 'primary.contrastText', textAlign: 'center' }}>
                    Under Construction
                </Typography>
                {withPreview && (
                    <Button onClick={onClick} sx={{ my: 1, width: 125 }}>
                        {preview ? 'Hide' : 'Preview'}
                    </Button>
                )}
            </Card>
        </Container>
    </Box>
);

export default UnderConstruction;