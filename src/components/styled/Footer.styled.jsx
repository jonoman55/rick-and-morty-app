import { Box, Paper, Link, Stack, Typography, Icon, styled } from '@mui/material';
import { GitHub as GitHubIcon } from '@mui/icons-material';

import { ToolTip } from '../controls';
import { RnMSvgIcon } from '../../images';

export const FooterPaper = styled(Paper)(({ theme }) => ({
    width: '100%',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    borderRadius: 0,
    borderTop: `1px solid ${theme.palette.primary.contrastText}`
}));

export const FooterText = () => (
    <Typography component='p' variant='body1' align='center' sx={{ color: 'primary.contrastText' }}>
        &copy;&nbsp;John Chiappetta&nbsp;{new Date().getFullYear()}
    </Typography>
);

export const FooterIcons = () => (
    <Stack direction='row' spacing={4} sx={{ my: 2, justifyContent: 'center' }}>
        <ImageLink
            title='Visit My GitHub Page'
            placement='top'
            href='https://github.com/jonoman55'
            icon={<GitHubIcon fontSize='large' />}
        />
        <ImageLink
            title='The Rick And Morty API'
            placement='top'
            href='https://rickandmortyapi.com/'
            icon={<Icon component={RnMSvgIcon} fontSize='large' />}
        />
    </Stack>
);

export const ImageLink = ({ title, placement, href, icon }) => (
    <ToolTip title={title} placement={placement} component={
        <Box
            component={Link}
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            sx={{ textDecoration: 'none', color: 'primary.contrastText' }}
        >
            {icon}
        </Box>}
    />
);