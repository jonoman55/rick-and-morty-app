import { styled, Box } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
    height: '90vh',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
}));