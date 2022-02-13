
import { styled, Typography } from '@mui/material';

export const FlexText = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        fontSize: 14,
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: 14,
    },
    [theme.breakpoints.up('md')]: {
        fontSize: 16,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 18,
    },
}));

export const XSFlexText = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down('xs')]: {
        fontSize: 14,
    },
    [theme.breakpoints.up('xs')]: {
        fontSize: 14,
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: 16,
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: 16,
    },
    [theme.breakpoints.up('md')]: {
        fontSize: 16,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 18,
    },
}));