import { Stack } from "@mui/material";

import { Button } from "../controls";

const NavButtons = ({ navigate, ...other }) => (
    <Stack direction='row' spacing={2} justifyContent='center' {...other}>
        <Button variant='contained' onClick={() => navigate('/')}>Home</Button>
        <Button variant='contained' onClick={() => navigate(-1)}>Back</Button>
    </Stack>
);

export default NavButtons;