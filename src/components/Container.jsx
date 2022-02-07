import { styled, useTheme, useMediaQuery, Box } from '@mui/material';
import backgroundImage from '../images/site-background.png';

export const Container = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    minHeight: useMediaQuery(theme.breakpoints.up('sm')) ? '82vh' : '100%',
}));

export const Body = (props) => {
    const theme = useTheme();
    const body = document.querySelector('body');
    body.style.backgroundColor = theme.palette.primary.dark;
    body.style.backgroundImage = `url(${backgroundImage})`;
    body.style.backgroundSize = 'auto';
    body.style.backgroundRepeat = 'repeat';
    // body.style.fontFamily = 'Inconsolata, monospace';
    // body.style.margin = 0;
    // body.style.padding = 0;
    return <>{props.children}</>;
};