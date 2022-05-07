import { createRef, useCallback } from 'react';
import { useTheme, Slide, IconButton } from '@mui/material';
import { SnackbarProvider as NotistackProvider } from 'notistack';
import { Close as CloseIcon } from '@mui/icons-material';

// import { SnackMessage } from './SnackMessage';

const styles = (theme) => {
    return {
        height: 'auto',
        width: '100%',
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        '& .SnackbarContent-root': {
            display: 'flex',
            justifyContent: 'center',
        },
        '& .SnackbarItem-variantSuccess': {
            // minWidth: '150px',
            color: theme.palette.common.black,
            backgroundColor:  theme.palette.custom.main,
        },
        '& .SnackbarItem-variantError': {
            backgroundColor: '#eb0510',
        },
        '& .SnackbarItem-variantWarning': {
            backgroundColor: '#e6c60e',
        },
        '& .SnackbarItem-variantInfo': {
            backgroundColor: '#03a9f4',
        },
        '& .SnackbarItem-action': {
            paddingLeft: 0,
            marginLeft: '6px',
            marginRight: 0
        }
    };
};

const DismissIcon = ({ onClick }) => (
    <IconButton size='small' onClick={onClick}>
        <CloseIcon
            fontSize='small'
            sx={{ color: 'common.black' }}
        />
    </IconButton>
);

export const SnackbarProvider = ({ children }) => {
    const theme = useTheme();
    const notistackRef = createRef();

    const onClickDismiss = useCallback((key) => () => {
        notistackRef.current.closeSnackbar(key);
    }, [notistackRef]);

    return (
        <NotistackProvider
            ref={notistackRef}
            maxSnack={3}
            preventDuplicate
            autoHideDuration={3000}
            TransitionComponent={Slide}
            hideIconVariant={true}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            action={(key) => (
                <DismissIcon onClick={onClickDismiss(key)} />
            )}
            // content={(key, message) => (
            //     <SnackMessage id={key} message={message} />
            // )}
            sx={{ ...styles(theme) }}
        >
            {children}
        </NotistackProvider>
    );
};