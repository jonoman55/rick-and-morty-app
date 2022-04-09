import { styled, Typography, Card, CardMedia } from '@mui/material';

export const NotFoundCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(2),
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center'
}));

export const NotFoundImg = styled(CardMedia)(({ theme }) => ({
    border: '1px solid',
    borderRadius: theme.shape.borderRadius,
    borderColor: theme.palette.common.black,
    backgroundColor: theme.palette.mode === 'light'
        ? theme.palette.custom.disabled
        : theme.palette.common.custom.white,
    opacity: 0.9,
}));

export const NotFoundTitle = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.contrastText,
    fontWeight: 'bold',
}));
