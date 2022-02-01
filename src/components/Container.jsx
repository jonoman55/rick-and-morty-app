import { styled, useTheme, useMediaQuery, Box } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    minHeight: useMediaQuery(theme.breakpoints.up('sm')) ? '82vh' : '100%', //83.72vh,85.5vh
    //backgroundColor: theme.palette.primary.dark,
}));

export const Body = (props) => {
    const theme = useTheme();
    const body = document.querySelector('body');
    body.style.backgroundColor = theme.palette.primary.dark;
    return <>{props.children}</>;
};