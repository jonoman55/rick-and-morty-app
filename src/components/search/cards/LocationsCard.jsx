import { useMemo, useCallback, useEffect } from 'react';
import { Box, Card, CardContent, CardHeader, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { SearchCardAvatar } from "../SearchCardAvatar";
import { SearchImage } from "../SearchImage";
import { SearchResultsCount } from "../SearchResultsCount";
import { SearchBar, Spinner } from "../../design";
import { ReusableGrid } from "../../tools/ReusableGrid";
import { appActions } from "../../../reducers/appSlice";
import { useGetLocationsQuery, useLocationsSearchQuery } from "../../../services/rickAndMortyApi";
import { portalThumbsUp } from "../../../images/";

const LocationsCard = () => {
    const dispatch = useDispatch();

    const { filter, searchResults } = useSelector((state) => state.app);

    const { data: getCount, isFetching } = useGetLocationsQuery(1);

    const { data: queryResults, isLoading } = useLocationsSearchQuery(
        encodeURIComponent(filter)
    );

    const count = useMemo(() => {
        if (!isFetching) return getCount?.info.count;
    }, [getCount, isFetching]);

    const handleSearch = useCallback(({ target: { value } }) => {
        dispatch(appActions.setFilter(value));
        dispatch(appActions.setSearchResults(queryResults.results?.filter(({ name }) =>
            name?.toLowerCase().includes(filter.toLowerCase())
        )));
    }, [dispatch, filter, queryResults]);

    const clearSearch = useCallback(() => {
        dispatch(appActions.setFilter(''));
        dispatch(appActions.setSearchResults([]));
    }, [dispatch]);

    useEffect(() => {
        if (filter === '' && searchResults !== 0) {
            clearSearch();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter]);

    return isLoading ? <Spinner /> : (
        <Card elevation={0}>
            <CardHeader
                title="Locations"
                subheader={`Total: ${count}`}
                avatar={<SearchCardAvatar type='locations' />}
                action={<SearchResultsCount count={searchResults?.length} type='locations' />}
            />
            <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ p: 2, mb: 4 }}>
                    <SearchBar
                        value={filter}
                        onChange={handleSearch}
                        onClick={clearSearch}
                    />
                </Box>
            </CardContent>
            <CardContent>
                {searchResults?.length !== 0 ? (
                    <Grid container spacing={2}>
                        <ReusableGrid
                            xs={12} sm={6} md={6} lg={3} xl={3}
                            type='locations'
                            items={searchResults}
                        />
                    </Grid>
                ) : (
                    <SearchImage
                        src={portalThumbsUp}
                        alt='portalThumbsUp'
                    />
                )}
            </CardContent>
        </Card>
    );
};

export default LocationsCard;