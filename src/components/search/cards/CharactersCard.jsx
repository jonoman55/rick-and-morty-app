import { useMemo, useCallback, useEffect } from 'react';
import { Box, Card, CardContent, CardHeader, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { SearchCardAvatar } from "../SearchCardAvatar";
import { SearchImage } from '../SearchImage';
import { SearchResultsCount } from "../SearchResultsCount";
import { SearchBar, Spinner } from "../../design";
import { ReusableGrid } from "../../tools/ReusableGrid";
import { appActions } from "../../../reducers/appSlice";
import { useGetCharactersQuery, useCharactersSearchQuery } from "../../../services/rickAndMortyApi";
import { kirklandMeeseeks } from "../../../images/";

const CharactersCard = () => {
    const dispatch = useDispatch();

    const { filter, searchResults } = useSelector((state) => state.app);

    const { data: getCount, isFetching } = useGetCharactersQuery(1);

    const { data: queryResults, isLoading } = useCharactersSearchQuery(encodeURIComponent(filter));

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
                title="Characters"
                subheader={`Total: ${count}`}
                avatar={<SearchCardAvatar type='characters' />}
                action={<SearchResultsCount count={searchResults?.length} type='characters' />}
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
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <ReusableGrid
                            xs={12} sm={12} md={6} lg={6} xl={6}
                            type='characters'
                            items={searchResults}
                        />
                    </Grid>
                ) : (
                    <SearchImage
                        src={kirklandMeeseeks}
                        alt='kirklandMeeseeks'
                    />
                )}
            </CardContent>
        </Card>
    );
};

export default CharactersCard;