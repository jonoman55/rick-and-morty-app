import { styled, Button as MuiButton } from '@mui/material';

export const Button = styled(MuiButton)(({ theme }) => ({
    color: theme.palette.custom.black,
    backgroundColor: theme.palette.custom.main,
    '&:hover':{
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.mode === 'light'
            ? theme.palette.custom.white
            : theme.palette.custom.black
    }
}));