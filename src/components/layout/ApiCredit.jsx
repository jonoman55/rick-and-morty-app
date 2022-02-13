import { Box, Container, Toolbar, Icon, Link } from '@mui/material';
import { AppHeader } from '../styled/Header.styled';
import { XSFlexText } from '../controls';
import { RnMSvgIcon } from '../../images/RickAndMortyIcon';

const ApiCredit = () => (
    <AppHeader component='div' position='static' elevation={2} sx={{
        borderTop: (theme) => `1px solid ${theme.palette.primary.contrastText}`,
        borderBottomLeftRadius: 8, borderBottomRightRadius: 8, height: 100, mb: 6
    }}>
        <Toolbar>
            <Container maxWidth='xs'>
                <Box
                    component={Link}
                    href='https://rickandmortyapi.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    sx={{
                        pt: 2, display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'center',
                        alignItems: 'center', textDecoration: 'none', color: 'primary.contrastText', width: 'auto',
                        '&:hover': {
                            color: 'custom.thumbBlue'
                        }
                    }}>
                    <Icon
                        component={RnMSvgIcon}
                        sx={{ height: 36, width: 36, color: 'custom.main' }}
                    />
                    <XSFlexText component='h6' variant='h6' sx={{ py: 0.5 }}>
                        Powered By: The Rick And Morty API
                    </XSFlexText>
                </Box>
            </Container>
        </Toolbar>
    </AppHeader>
);

export default ApiCredit;