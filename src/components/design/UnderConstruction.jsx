import { Box, Card, CardMedia, Container, Typography } from '@mui/material';
import { Construction as ConstructionIcon } from '@mui/icons-material';

import { Button } from '../controls';

export const UnderConstruction = ({ preview, onClick }) => (
    <Box sx={{ my: 4 }}>
        <Container maxWidth='sm'>
            <Card elevation={2} sx={{ p: 2, display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center' }}>
                <Typography component='h4' variant='h5' gutterBottom sx={{ color: 'primary.contrastText', textAlign: 'center' }}>
                    Search
                </Typography>
                <CardMedia
                    component='img'
                    src='https://hbomax-images.warnermediacdn.com/2021-06/ricky-and-morty-1200x675.jpg'
                    alt=''
                    sx={{ p: 1, borderRadius: (theme) => theme.shape.borderRadius, objectFit: 'fill' }} />
                <Box component={ConstructionIcon} sx={{ color: 'custom.main', height: 64, width: 64, py: 1 }} />
                <Typography component='h4' variant='h5' paragraph gutterBottom sx={{ color: 'primary.contrastText', textAlign: 'center' }}>
                    Under Construction
                </Typography>
                <Button onClick={onClick} sx={{ my: 1, width: 125 }}>{preview ? 'Hide' : 'Preview'}</Button>
            </Card>
        </Container>
    </Box>
);
