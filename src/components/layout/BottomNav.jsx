import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import {
    Home as HomeIcon,
    Search as SearchIcon,
    LocationOn as LocationsIcon,
    Tv as EpisodesIcon,
    Accessibility as CharactersIcon
} from '@mui/icons-material';
import { usePathname } from '../../hooks/usePathname';
import { useBreakpoints } from '../../hooks/useBreakpoints';

export default function BottomNav() {
    const matches = useBreakpoints('lg', 'up');
    const navigate = useNavigate();
    const pathname = usePathname();
    const [value, setValue] = useState(0);

    useEffect(() => { 
        if (pathname === '/') {
            setValue(0);
        }
        if (pathname.includes('characters')) {
            setValue(1);
        }
        if (pathname.includes('locations')) {
            setValue(2);
        }
        if (pathname.includes('episodes')) {
            setValue(3);
        }
        if (pathname.includes('search')) {
            setValue(4);
        }
    }, [value, pathname]);

    return pathname !== '/' && (
        <Box sx={{ width: '100%', height: 'auto', mt: 6 }}>
            <BottomNavigation
                showLabels={matches}
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{
                    height: 75, width: '100%',
                    '& .MuiBottomNavigationAction-root': {
                        color: 'primary.contrastText',
                    },
                    '& .MuiBottomNavigationAction-root.Mui-selected': {
                        color: 'custom.main'
                    },
                    '& label': {    
                        color: 'primary.contrastText',
                    }
                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={() => navigate('/')} />
                <BottomNavigationAction label="Characters" icon={<CharactersIcon />} onClick={() => navigate('/characters')} />
                <BottomNavigationAction label="Locations" icon={<LocationsIcon />} onClick={() => navigate('/locations')} />
                <BottomNavigationAction label="Episodes" icon={<EpisodesIcon />} onClick={() => navigate('/episodes')} />
                <BottomNavigationAction label="Search" icon={<SearchIcon />} onClick={() => navigate('/search')} />
            </BottomNavigation>
        </Box>
    );
};