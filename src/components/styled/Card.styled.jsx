import { styled, Card as MuiCard } from "@mui/material";

export const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
        backgroundColor: theme.palette.mode === 'dark'
            ? theme.palette.custom.disabled
            : theme.palette.custom.darkDisabled,
        opacity: 0.8
    },
}));
