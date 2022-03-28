import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';

import { ToolTip } from '../controls';
import { AppHeader, AnchorDiv, PortalDiv, LogoDiv, ThumbDiv, imageStyles } from '../styled/Header.styled';
import { ThemeSwitch } from '../design/ThemeSwitch';
import { toggleTheme } from '../../reducers/themeSlice';
import { useBreakpoints } from '../../hooks/useBreakpoints';
import { usePathname } from '../../hooks/usePathname';

import logo from '../../images/logo.png';
import portal from '../../images/portal.gif';

const Header = () => {
    const pathname = usePathname();
    const matches = useBreakpoints('sm', 'down');
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();
    return (
        <AppHeader elevation={2} position='static' sx={{ borderBottomStyle: 'none' }}>
            <AnchorDiv component='div' id='back-to-top-anchor' disableGutters={matches}>
                <PortalDiv component={NavLink} to='/portal' sx={{ justifyContent: !matches ? 'flex-start' : 'center' }}>
                    {pathname !== '/portal' && (
                        <ToolTip title='Warp Portal' placement='bottom' component={
                            <Box
                                component='img'
                                src={portal}
                                alt='portal'
                                sx={{ height: 48, width: 48 }}
                            />}
                        />
                    )}
                </PortalDiv>
                <LogoDiv component={NavLink} to='/'>
                    <ToolTip title='Home' placement='bottom' component={
                        <Box
                            component='img'
                            src={logo}
                            alt='logo'
                            sx={{ ...imageStyles(matches) }}
                        />}
                    />
                </LogoDiv>
                <ThumbDiv sx={{ justifyContent: !matches ? 'flex-end' : 'center' }}>
                    <ToolTip title={theme.darkTheme ? 'Light Mode' : 'Dark Mode'} placement='bottom' component={
                        <ThemeSwitch
                            checked={theme.darkTheme}
                            onChange={() => dispatch(toggleTheme())}
                        />}
                    />
                </ThumbDiv>
            </AnchorDiv>
        </AppHeader>
    );
};

export default Header;