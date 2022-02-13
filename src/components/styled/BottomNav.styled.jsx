import { styled, Box, BottomNavigation as MuiBottomNavigation, BottomNavigationAction as MuiBottomNavigationAction } from '@mui/material';

export const BottomNavigation = styled(MuiBottomNavigation)`
    height: 85px;
    width: 100%;
`;

export const BottomNavigationAction = styled(MuiBottomNavigationAction)(({ theme }) => ({
    padding: theme.spacing(2, 1, 2, 1),
    maxWidth: '100%',
    minWidth: 0,
    color: theme.palette.primary.contrastText,
    '&.Mui-selected': {
        padding: theme.spacing(2, 1, 2, 1),
        color: theme.palette.custom.main
    },
    '& label': {
        color: theme.palette.primary.contrastText,
    },
}));

export const BottomNavContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 'auto',
    marginTop: theme.spacing(6),
}));