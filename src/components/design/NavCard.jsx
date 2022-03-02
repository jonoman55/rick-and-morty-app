import { NavLink } from 'react-router-dom';
import { Stack, Card, CardContent } from '@mui/material';
import { Button } from '../controls';

// TODO : Remove this component if not used
const NavCard = () => (
    <Card elevation={2} sx={{ bgcolor: 'primary.main', display: 'flex', minHeight: 150 }}>
        <CardContent sx={{
            p: 0, display: 'flex', flexDirection: 'column', flexWrap: 'wrap',
            justifyContent: 'center', flex: '1 0 auto', '&:last-child': { pb: 0 }
        }}>
            <Stack direction='row' width='100%' justifyContent='center' spacing={2} padding={1}>
                <Button variant='contained' LinkComponent={NavLink} to='/' sx={{ width: 125 }}>
                    Home
                </Button>
                <Button variant='contained' LinkComponent={NavLink} to='/search' sx={{ width: 125 }}>
                    Search
                </Button>
            </Stack>
            <Stack direction='row' width='100%' justifyContent='center' spacing={2} padding={1}>
                <Button variant='contained' LinkComponent={NavLink} to='/episodes' sx={{ width: 125 }}>
                    Episodes
                </Button>
                <Button variant='contained' LinkComponent={NavLink} to='/locations' sx={{ width: 125 }}>
                    Locations
                </Button>
            </Stack>
        </CardContent>
    </Card>
);

export default NavCard;