import { styled, Box, Typography, Card as MuiCard, CardMedia, Paper as MuiPaper } from '@mui/material';

export const OriginLink = styled(Typography)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.custom.main,
    fontWeight: 'bold',
    textAlign: 'center',
    '&:hover': {
        color: theme.palette.custom.darkDisabled,
    },
}));

export const StyledText = styled(Typography)(({ theme }) => ({
    margin: theme.spacing(1, 0, 0, 1),
    textDecoration: 'none',
    fontWeight: 'bold',
    color: theme.palette.custom.main,
    textAlign: 'center',
}));

export const LocationLink = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    textDecoration: 'none',
    fontWeight: 'bold',
    color: theme.palette.custom.seen,
    '&:hover': {
        color: theme.palette.custom.darkDisabled,
    },
}));

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

export const Paper = styled(MuiPaper)(({ theme }) => ({
    padding: theme.spacing(1),
    margin: theme.spacing(4, 4, 0, 4),
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: theme.palette.primary.main,
}));

export const Card = styled(MuiCard)(({ theme }) => ({
    padding: theme.spacing(4),
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
}));

export const Image = styled(CardMedia)(({ theme }) => ({
    marginTop: theme.spacing(2),
    padding: theme.spacing(0),
    border: `1px solid ${theme.palette.custom.black}`,
    borderRadius: theme.shape.borderRadius,
}));

export const Name = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: theme.spacing(0.5)
}));