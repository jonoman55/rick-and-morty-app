import { styled, Box, CircularProgress } from '@mui/material';

export const SpinnerBox = styled(Box)`
    display: flex;
    flex-direction: nowrap;
    justify-content: center;
    align-items: center;
    height: 82vh;
    width: 100%;
`;

export const SpinnerProgress = styled(CircularProgress)(({ theme }) => ({
    color: theme.palette.custom.main,
}));
