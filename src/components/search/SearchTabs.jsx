import { useState, useEffect } from 'react';
import { AppBar, Box, Tabs, Tab } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';

import { CharactersCard, LocationsCard, EpisodesCard } from './cards';
import { appActions } from '../../reducers/appSlice';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <Box
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 2 }}>
                    {children}
                </Box>
            )}
        </Box>
    );
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
};

export default function SearchTabs() {
    const dispatch = useDispatch();
    const theme = useTheme();
    const [value, setValue] = useState(0);

    useEffect(() => {
        dispatch(appActions.setFilter(''));
        dispatch(appActions.setSearchResults([]));
    }, [dispatch, value]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
            <AppBar position="static" elevation={2}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs"
                >
                    <Tab label="Characters" {...a11yProps(0)} />
                    <Tab label="Locations" {...a11yProps(1)} />
                    <Tab label="Episodes" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <CharactersCard />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <LocationsCard />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <EpisodesCard />
                </TabPanel>
            </SwipeableViews>
        </Box>
    );
};