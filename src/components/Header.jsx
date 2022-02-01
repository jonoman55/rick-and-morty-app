import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Box, AppBar, Toolbar, Switch } from '@mui/material';
import { RnMSvgIcon } from '../images/RickAndMortyIcon';
import { toggleTheme } from '../features/themeSlice';
import { useBreakpoints } from '../hooks/useBreakpoints';
import rnmLogo from '../images/rick-and-morty-logo.png';

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

// TODO : Finish implementing the header styles
// TODO : Make a custom theme switch
const Header = () => {
    const matches = useBreakpoints('sm', 'down');
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();
    return (
        <AppBar position='static' sx={{ mb: 2 }}>
            <Toolbar component='div' id='back-to-top-anchor' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <RnMSvgIcon sx={{ color: 'custom.main', height: 48, width: 48 }} />
                </Box>
                <Box component={NavLink} to='/'>
                    <Box component='img' src={rnmLogo} alt='' sx={{ m: 1, mt: 2, ...imageStyles(matches) }} />
                </Box>
                <Box>
                    <Switch checked={theme.darkTheme} onChange={() => dispatch(toggleTheme())} sx={thumb} />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;