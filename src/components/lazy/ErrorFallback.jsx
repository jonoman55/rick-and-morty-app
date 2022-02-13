import { styled, Box, Typography, Button } from '@mui/material';

const ErrorContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2), 
    display: 'flex', 
    flexDirection: 'column', 
    flexWrap: 'nowrap', 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: theme.palette.primary.dark
}));

const ErrorFallback = ({ error, resetErrorBoundary }) => (
    <ErrorContainer component='div' role='alert'>
        <Typography component='p' variant='body1' fontSize='large' gutterBottom>Something went wrong:</Typography>
        <Typography component='pre' color='error' sx={{ p: 2, whiteSpace: 'pre-line' }}>{error.message}</Typography>
        <Button variant='contained' color='primary' onClick={resetErrorBoundary}>Try Again</Button>
    </ErrorContainer>
);

export default ErrorFallback;