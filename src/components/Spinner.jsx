import { Box, CircularProgress } from '@mui/material';

// TODO : Covert to styled components
const Spinner = () => (
    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center', height: '82vh', width: '100%' }}>
        <CircularProgress sx={{ color: 'custom.main' }} />
    </Box>
);

export default Spinner;