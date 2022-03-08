import { Box, CardContent, Stack, Typography } from "@mui/material";

import { Card } from "../styled/Card.styled";
import { FlexText } from "../controls";
import { ResidentsIcon } from "../../helpers/icons";

const LocationCard = ({ location }) => (
    <Card elevation={2} sx={{ height: 150 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <FlexText component='p' variant='h6'>
                    {location?.name}
                </FlexText>
                <FlexText component='p' variant='subtitle1' color='text.secondary'>
                    {location?.dimension}
                </FlexText>
            </CardContent>
            <Stack direction='row' spacing={1} sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1 }}>
                <ResidentsIcon count={location?.residents?.length} sx={{ color: 'custom.main', height: 16, width: 16 }} />
                <Typography variant='caption' fontSize={14}>
                    {location?.residents?.length ? location?.residents?.length : "No"} Residents
                </Typography>
            </Stack>
        </Box>
    </Card>
);

export default LocationCard;