import { styled, useTheme, Box } from '@mui/material';

import { backgroundImage } from '../../images';

export const Container = styled(Box)(({
    width: '100%',
    height: '100%',
}));

export const Body = (props) => {
    const theme = useTheme();
    const body = document.querySelector('body');
    body.style.backgroundColor = theme.palette.primary.dark;
    body.style.backgroundImage = `url(${backgroundImage})`;
    body.style.backgroundSize = 'auto';
    body.style.backgroundRepeat = 'repeat';
    return <>{props.children}</>;
};