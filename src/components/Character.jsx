import { NavLink } from 'react-router-dom';
import { Box, Paper, Typography } from '@mui/material';

// TODO : Convert into a Paper Card and finish styling
const Character = ({ character }) => (
    <Box>
        <Paper elevation={2}>
            <Typography component={NavLink} to={`/characters/${character?.id}`} sx={{ textDecoration: 'none', color: 'black' }}>
                {character?.name}
            </Typography>
        </Paper>
    </Box>
);

export default Character;