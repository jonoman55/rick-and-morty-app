import { styled, IconButton, Typography, Card as MuiCard, CardActions as MuiCardActions, Paper as MuiPaper, CardContent, Box } from "@mui/material";

export const Card = styled(MuiCard)(({ theme }) => ({
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center'
})); 

export const Paper = styled(MuiPaper)(({ theme }) => ({
    padding: theme.spacing(1),
    margin: theme.spacing(4, 4, 2, 4),
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
}));

export const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export const TextLink = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    '&:hover': {
        color: theme.palette.custom.main,
    },
}));

export const Image = styled(CardContent)(({ theme }) => ({
    padding: theme.spacing(0),
    border: `1px solid ${theme.palette.custom.black}`,
    borderRadius: theme.shape.borderRadius,
    '&:last-child': {
        paddingBottom: theme.spacing(0),
    }
}));

export const CardActions = styled(MuiCardActions)`
    width: 100%; 
    display: flex; 
    flex-direction: row; 
    justify-content: space-between; 
    align-items: center;
`;

export const Section = styled(Box)`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const TextBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
    margin: theme.spacing(0, 1),
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-around',
}));

export const IconBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
    margin: theme.spacing(0, 1),
    display: 'flex',
    justifyContent: 'center',
}));
