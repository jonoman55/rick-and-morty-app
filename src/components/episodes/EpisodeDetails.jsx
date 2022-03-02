import { Link, Stack, Typography, Card } from '@mui/material';

import { Button } from '../controls';

const EpisodeDetails = ({ episode, navigate }) => (
    <Card elevation={2} sx={{ p: 2, display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center' }}>
        <Typography component='h4' variant='h5' sx={{ color: 'primary.contrastText', textAlign: 'center' }} gutterBottom>
            {episode.name}
        </Typography>
        <Stack direction='row' spacing={2} justifyContent='center' sx={{ mt: 4, mb: 2 }}>
            <Button variant='contained' LinkComponent={Link} href='/'>Home</Button>
            <Button variant='contained' onClick={() => navigate(-1)}>Back</Button>
        </Stack>
    </Card>
);

export default EpisodeDetails;