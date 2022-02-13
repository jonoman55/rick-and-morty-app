import { Box, Paper, Link, Stack, Typography, Icon } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { ToolTip } from '../controls';
import { RnMSvgIcon } from '../../images/RickAndMortyIcon';
import { usePathname } from '../../hooks/usePathname';

const Footer = () => {
    const pathname = usePathname();
    return pathname !== '/' && (
        <Paper elevation={2} component='footer' sx={{
            width: '100%', py: 4, borderRadius: 0,
            borderTop: (theme) => `1px solid ${theme.palette.primary.contrastText}`
        }}>
            <Stack direction='row' justifyContent='center' spacing={4} sx={{ my: 2 }}>
                <ToolTip title='Visit My GitHub' placement='top' component={
                    <Box component={Link}
                        sx={{ textDecoration: 'none', color: 'primary.contrastText' }}
                        href='https://github.com/jonoman55'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <GitHub fontSize='large' />
                    </Box>}
                />
                <ToolTip title='Rick And Morty API' placement='top' component={
                    <Box component={Link}
                        sx={{ textDecoration: 'none', color: 'primary.contrastText' }}
                        href='https://rickandmortyapi.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Icon component={RnMSvgIcon} fontSize='large' />
                    </Box>}
                />
            </Stack>
            <Typography component='p' variant='body1' align='center' sx={{ color: 'primary.contrastText' }}>
                &copy; John Chiappetta {new Date().getFullYear()}
            </Typography>
        </Paper>
    );
};

export default Footer;