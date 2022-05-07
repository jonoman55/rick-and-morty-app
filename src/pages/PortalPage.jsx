import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, CardMedia, Container } from "@mui/material";
import { styled, Card as MuiCard, CardContent as MuiCardContent } from "@mui/material";

import { Spinner } from "../components/design";
import { Button, ToolTip } from "../components/controls";
import { useBreakpoints } from "../hooks/useBreakpoints";
import { useGetAllLocationsQuery } from "../services/rickAndMortyApi";
import { getRandomNumberBetween } from "../utils";
import { portal } from "../images";

const height = (matches) => {
    if (matches) {
        return {
            height: 400, width: 500
        }
    } else {
        return {
            height: '100%', width: '100%'
        }
    }
};

const Card = styled(MuiCard)(({ theme }) => ({
    padding: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
}));

const CardContent = styled(MuiCardContent)(({ theme }) => ({
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%'
}));

const PortalPage = () => {
    const navigate = useNavigate();
    const matches = useBreakpoints('sm', 'up');

    const [count, setCount] = useState(0);

    const { data, isLoading } = useGetAllLocationsQuery();

    useEffect(() => {
        if (!isLoading) setCount(data?.info?.count);
    }, [data, isLoading]);

    const handleWarpClick = () => {
        const randomLocation = getRandomNumberBetween(1, count);
        navigate(`/locations/${randomLocation}`);
    };

    return isLoading ? <Spinner /> : (
        <Box sx={{ my: 4 }}>
            <Container maxWidth="md">
                <Card>
                    <Box sx={{ p: 2 }}>
                        <CardMedia
                            component='img'
                            src={portal}
                            alt='portal'
                            sx={height(matches)}
                        />
                    </Box>
                    <CardContent>
                        <ToolTip title='Warp To A Random Location!' placement='bottom' component={
                            <Button sx={{ width: 125 }} onClick={handleWarpClick}>
                                Warp!
                            </Button>}
                        />
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
};

export default PortalPage;