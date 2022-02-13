import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import { AppHeader, AnchorDiv, PortalDiv, LogoDiv, ThumbDiv, imageStyles } from '../styled/Header.styled';
import { ThemeSwitch } from '../ThemeSwitch';
import { toggleTheme } from '../../features/themeSlice';
import { useBreakpoints } from '../../hooks/useBreakpoints';
import logo from '../../images/logo.png';
import portal from '../../images/portal.gif';

// TODO : Implement functionality for the portal icon
const Header = () => {
    const matches = useBreakpoints('sm', 'down');
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();
    return (
        <AppHeader elevation={2} position='static' sx={{ borderBottomStyle: 'none' }}>
            <AnchorDiv component='div' id='back-to-top-anchor' disableGutters={matches}>
                <PortalDiv sx={{ justifyContent: !matches ? 'flex-start' : 'center' }}>
                    <Box
                        component='img'
                        src={portal}
                        alt='portal'
                        sx={{ height: 48, width: 48 }}
                    />
                </PortalDiv>
                <LogoDiv component={NavLink} to='/'>
                    <Box
                        component='img'
                        src={logo}
                        alt='logo'
                        sx={{ ...imageStyles(matches) }}
                    />
                </LogoDiv>
                <ThumbDiv sx={{ justifyContent: !matches ? 'flex-end' : 'center' }}>
                    <ThemeSwitch
                        checked={theme.darkTheme}
                        onChange={() => dispatch(toggleTheme())}
                    />
                </ThumbDiv>
            </AnchorDiv>
        </AppHeader>
    );
};

export default Header;