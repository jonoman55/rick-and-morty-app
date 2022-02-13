import { styled, tooltipClasses, Tooltip, Box, Zoom } from '@mui/material';

const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
        border: 'solid',
        borderWidth: 'thin',
        boxShadow: theme.shadows[2],
        fontWeight: 'bold',
        fontSize: 12,
        borderColor: theme.palette.primary.contrastText,
    },
}));

export const ToolTip = ({ title, placement, component, ...other }) => (
    <StyledTooltip title={title} placement={placement} TransitionComponent={Zoom} {...other}>
        <Box component='div'>
            {component}
        </Box>
    </StyledTooltip>
);