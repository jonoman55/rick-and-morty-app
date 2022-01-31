import { Box, CircularProgress } from '@mui/material';

// TODO : Finish styling this component
const Spinner = () => (
    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center', height: '83vh', width: '100%' }}>
        <CircularProgress color='primary' />
    </Box>
);

export default Spinner;