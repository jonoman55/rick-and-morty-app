import { NavLink } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Switch } from '@mui/material';
import { RnMSvgIcon } from '../images/RickAndMortyIcon';

// TODO : Finish implementing the header
const Header = () => (
    <AppBar position='static'>
        <Toolbar component='div' id='back-to-top' sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
                <RnMSvgIcon sx={{ fill: '#fff', height: 32, width: 32 }} />
            </Box>
            <Typography component={NavLink} variant='h5' to='/' sx={{ textDecoration: 'none', color: 'primary.contrastText' }}>
                The Rick And Morty Portal
            </Typography>
            <Box>
                <Switch defaultChecked />
            </Box>
        </Toolbar>
    </AppBar>
);

export default Header;