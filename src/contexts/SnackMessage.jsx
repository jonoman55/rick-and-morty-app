import { forwardRef, useCallback, useState } from 'react';
import { IconButton, Card, CardActions, Typography, Paper, Collapse, Box, styled } from '@mui/material';
import { Close as CloseIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { SnackbarContent, useSnackbar } from 'notistack';

import { pixelRick } from '../images';

export const SnackMessage = forwardRef((props, ref) => {
    const { closeSnackbar } = useSnackbar();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = useCallback(() => {
        setExpanded((oldExpanded) => !oldExpanded);
    }, []);

    const handleDismiss = useCallback(() => {
        closeSnackbar(props.id);
    }, [props.id, closeSnackbar]);

    return (
        <SnackbarContent ref={ref}>
            <Card sx={{ bgcolor: 'custom.main', color: 'common.black', minWidth: 288 }}>
                <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'nowrap' }}>
                    <Typography variant="subtitle1" fontWeight='bold' sx={{ pl: 1 }}>{props.message}</Typography>
                    <Box component='div'>
                        <ExpandMoreButton
                            aria-label="Show more"
                            expanded={expanded}
                            onClick={handleExpandClick} />
                        <IconButton fontSize='small' onClick={handleDismiss}>
                            <CloseIcon sx={{ color: 'common.black' }} />
                        </IconButton>
                    </Box>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Paper sx={{ bgcolor: (theme) => theme.palette.background.paper, borderRadius: 0 }}>
                        <Typography sx={{ p: 2, color: 'primary.contrastText', fontWeight: 500 }}>To The Rick And Morty Portal</Typography>
                        <Box
                            component='img'
                            src={pixelRick}
                            alt='pixel-rick'
                            height={64}
                            width={64}
                            sx={{ bgcolor: 'custom.white', borderRadius: (theme) => theme.shape.borderRadius }}
                        />
                    </Paper>
                </Collapse>
            </Card>
        </SnackbarContent>
    );
});

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const ExpandMoreButton = ({ expanded, onClick }) => (
    <ExpandMore
        expand={expanded}
        onClick={onClick}
        aria-expanded={expanded}
        aria-label="show more"
    >
        <ExpandMoreIcon sx={{ color: 'common.black' }} />
    </ExpandMore>
);
