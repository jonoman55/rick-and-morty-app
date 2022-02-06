import { Box, Paper, Typography } from '@mui/material';

// TODO : Finish styling this page
const EpisodesPage = () => (
    <Box sx={{ m: 4 }}>
        <Paper elevation={2}>
            <Typography component='h4' variant='h5' sx={{ color: 'primary.contrastText', textAlign: 'center' }}>
                EpisodesPage
            </Typography>
        </Paper>
    </Box>
);

export default EpisodesPage;