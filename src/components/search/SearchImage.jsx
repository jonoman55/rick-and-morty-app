import { styled, Box } from '@mui/material';

const ImageBox = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center' 
}));

export const SearchImage = ({ src, alt }) => (
    <ImageBox>
        <Box
            component='img'
            src={src}
            alt={alt}
            sx={{ height: 124, width: 124 }}
        />
    </ImageBox>
);