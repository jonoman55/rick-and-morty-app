import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Box, AppBar, Toolbar } from '@mui/material';
import { ThemeSwitch } from './ThemeSwitch';
import { toggleTheme } from '../features/themeSlice';
import { useBreakpoints } from '../hooks/useBreakpoints';
import logo from '../images/logo.png';
import portal from '../images/portal.gif';

const thumb = {
    '& .MuiSwitch-thumb': {
        color: 'primary.contrastText',
    },
};

const imageStyles = (matches) => {
    if (!matches) {
        return {
            height: 100, width: 336
        }
    }
    return {
        height: 75, width: 225
    }
};

// TODO : Implement functionality for the portal icon
const Header = () => {
    const matches = useBreakpoints('sm', 'down');
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();
    return (
        <AppBar position='static' sx={{ mb: 2 }}>
            <Toolbar component='div' id='back-to-top-anchor' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <Box component='img' src={portal} alt='' sx={{ height: 48, width: 48 }} />
                </Box>
                <Box component={NavLink} to='/'>
                    <Box component='img' src={logo} alt='' sx={{ m: 1, mt: 2, ...imageStyles(matches) }} />
                </Box>
                <Box>
                    <ThemeSwitch checked={theme.darkTheme} onChange={() => dispatch(toggleTheme())} sx={thumb} />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;