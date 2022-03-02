import { styled, Grid, Paper as MuiPaper } from '@mui/material';

export const Paper = styled(MuiPaper)(({ theme }) => ({
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
}));

export const GridItem = styled(Grid)(({ theme }) => ({
    width: '100%',
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
}));
