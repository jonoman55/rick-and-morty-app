// eslint-disable-next-line
import { Box, Card, CardContent, CardMedia, Stack } from "@mui/material";
// import { NavLink } from "react-router-dom";

import { FlexText } from "../controls";
// import { createLink } from "../../helpers/urls";

// TODO : Finish implementing and styling this component
const LocationCard = ({ location }) => {
    const residents = location?.residents?.map((resident, index) => (
        <Box key={index}>
            {console.log(resident)}
            {/* {console.log(createLink(resident))} */}
            {/* <NavLink to={createLink(resident)} /> */}
        </Box>
    ));
    console.log(location);
    return (
        <Card elevation={2} sx={{
            display: 'flex', bgcolor: 'primary.main', '&:hover': {
                bgcolor: (theme) => theme.palette.mode === 'dark'
                    ? 'custom.disabled' : 'custom.darkDisabled', opacity: 0.8
            }
        }}>
            {/* <CardMedia
                component='img'
                sx={{ height: 'auto', width: 150 }}
                image={location?.image}
                alt='location'
            /> */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <FlexText component='div' variant='h6'>
                        {location?.name}
                    </FlexText>
                    <FlexText component='div' variant='subtitle1' color='text.secondary'>
                        {location?.type} - {location?.dimension}
                    </FlexText>
                </CardContent>
                <Stack direction='row' spacing={1} sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1 }}>
                    {/* Residents */}
                    {location?.residents && (
                        <>{residents}</>
                    )}
                </Stack>
            </Box>
        </Card>
    );
};

export default LocationCard;