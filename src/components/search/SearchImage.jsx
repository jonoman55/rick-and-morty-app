import { Box } from '@mui/material';

export const SearchImage = ({ src, alt }) => (
    <Box sx={{  mb: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Box
            component='img'
            src={src}
            alt={alt}
            sx={{ height: 124, width: 124 }}
        />
    </Box>
);