import { forwardRef, useCallback, useState } from 'react';
import { IconButton, Typography, Collapse, Box } from '@mui/material';
import { styled, Card as MuiCard, CardActions as MuiCardActions, Paper as MuiPaper } from '@mui/material'
import { Close as CloseIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { SnackbarContent, useSnackbar } from 'notistack';

import { pixelRick } from '../images';

const ImgBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.custom.white,
    borderRadius: theme.shape.borderRadius
}));

const Paper = styled(MuiPaper)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: 0
}));

const Card = styled(MuiCard)(({ theme }) => ({
    backgroundColor: theme.palette.custom.main,
    color: theme.palette.common.black,
    minWidth: 288
}));

const CardActions = styled(MuiCardActions)(({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap'
}));

const CollapseText = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(2),
    color: theme.palette.primary.contrastText,
    fontWeight: 500
}));

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
            <Card>
                <CardActions>
                    <Typography variant="subtitle1" fontWeight='bold' sx={{ pl: 1 }}>
                        {props.message}
                    </Typography>
                    <Box component='div'>
                        <ExpandMoreButton
                            aria-label="Show more"
                            expanded={expanded}
                            onClick={handleExpandClick}
                        />
                        <IconButton fontSize='small' onClick={handleDismiss}>
                            <CloseIcon sx={{ color: 'common.black' }} />
                        </IconButton>
                    </Box>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Paper>
                        <CollapseText>
                            To The Rick And Morty Portal
                        </CollapseText>
                        <ImgBox
                            component='img'
                            src={pixelRick}
                            alt='pixel-rick'
                            height={64}
                            width={64}
                        />
                    </Paper>
                </Collapse>
            </Card>
        </SnackbarContent>
    );
});
