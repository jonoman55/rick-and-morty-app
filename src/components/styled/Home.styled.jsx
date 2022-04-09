import { Link } from 'react-router-dom';
import { styled, Card as MuiCard, Box, Stack, Typography } from '@mui/material';

import { Button } from '../controls';

export const Card = styled(MuiCard)(({ theme }) => ({
    padding: theme.spacing(2),
    margin: theme.spacing(1), 
}))

export const ImagesBox = styled(Box)`
    display: flex;
    flex-direction: row; 
    flex-wrap: nowrap;
    justify-content: space-between; 
    align-items: center;
`;

export const ButtonsStack = styled(Stack)(({ theme }) => ({
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    alignItems: 'center'
}));

export const Title = styled(Typography)`
    font-weight: 700;
    font-size: 16;
    text-align: center; 
    width: 100%; 
`;

export const NavButton = ({ text, to }) => (
    <Button variant='contained' component={Link} to={to} sx={{ width: 125 }}>
        {text}
    </Button>
);

export const Image = ({ src, alt }) => (
    <Box
        component='img'
        src={src}
        alt={alt}
        sx={{ height: 64, width: 64 }}
    />
);