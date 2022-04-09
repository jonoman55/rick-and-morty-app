// eslint-disable-next-line
import { styled, useTheme, useMediaQuery, Box } from '@mui/material';

import { backgroundImage } from '../../images';

// TODO : Implement a better container once all pages are complete
// export const Container = styled(Box)(({ theme }) => ({
//     width: '100%',
//     height: '100%',
//     minHeight: useMediaQuery(theme.breakpoints.up('sm'))
//         ? '68.5vh' : '100%',
// }));

export const Container = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    // minHeight: '68.5vh',
    // marginBottom: theme.spacing(
    //     useMediaQuery(theme.breakpoints.up('sm')) ? 0.5 : 4.75
    // ),
}));

// export const Container = styled(Box)`
//     width: 100%;
//     height: 100%;
//     min-height: 61.3vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     flex-wrap: nowrap;
// `;

export const Body = (props) => {
    const theme = useTheme();
    const body = document.querySelector('body');
    body.style.backgroundColor = theme.palette.primary.dark;
    body.style.backgroundImage = `url(${backgroundImage})`;
    body.style.backgroundSize = 'auto';
    body.style.backgroundRepeat = 'repeat';
    return <>{props.children}</>;
};