import { Box, Typography } from "@mui/material";
import { styled, CardContent as MuiCardContent, CardActions as MuiCardActions, Button as MuiButton } from "@mui/material";

import { Card } from "../styled/Card.styled";

const CardBox = styled(Box)(({
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
}));

const CardContent = styled(MuiCardContent)(({
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}));

const CardActions = styled(MuiCardActions)(({
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
}));

const Button = styled(MuiButton)(({ theme }) => ({
    margin: theme.spacing(0.25),
    fontWeight: 700,
    fontSize: 'medium',
    color: theme.palette.custom.main,
    '&:hover': {
        backgroundColor: 'transparent'
    },
}));

const EpisodeCard = ({ episode }) => (
    <Card elevation={2} sx={{ height: 200 }}>
        <CardBox>
            <CardContent>
                <Typography variant='body1' fontSize='medium' align="center" sx={{ m: 0.25 }}>
                    {episode?.name}
                </Typography>
                <Typography variant='subtitle1' color='text.secondary' paragraph>
                    {episode?.episode}
                </Typography>
            </CardContent>
            <CardActions>
                <Button fullWidth>
                    More Info
                </Button>
            </CardActions>
        </CardBox>
    </Card>
);

export default EpisodeCard;