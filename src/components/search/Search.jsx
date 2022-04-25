import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Box, Card, CardContent, Container, Grid, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { SearchBar, Spinner } from "../design";
import { appActions } from "../../reducers/appSlice";
import { useGetAllCharactersQuery, useGetCharactersQuery } from "../../services/rickAndMortyApi";
import { createIdsList } from "../../utils";
import { usePathname } from "../../hooks/usePathname";

// TODO : Finish styling this page
// TODO : Add a select for searching by Characters, Episodes and Locations
// NOTE : Be careful with this page - it is possible to hit API limit if pics are included (HTTP Status - 429)
// TODO : Try re-implementing the Autocomplete
// NOTE : Add origin to the name for better filtering for characters Autocomplete
// TODO : Convert to styled components 
const Search = () => {
    const dispatch = useDispatch();
    const pathname = usePathname();
    const [characterIds, setCharacterIds] = useState('');

    const { data: results, isFetching } = useGetCharactersQuery(1);

    useEffect(() => {
        if (!isFetching) {
            setCharacterIds(results?.info?.count + 1);
        }
        // eslint-disable-next-line
    }, [isFetching]);

    const { characters, filter, searchResults } = useSelector((state) => state.app);

    const ids = createIdsList(characterIds).slice(2);
    const { data, isLoading } = useGetAllCharactersQuery(ids, {
        // pollingInterval: 3000,
        // refetchOnMountOrArgChange: true,
        // skip: false,
    });

    useEffect(() => {
        if (!isLoading && characters) {
            dispatch(appActions.setCharacters(data));
        }
        // eslint-disable-next-line
    }, [isLoading, characters]);

    useEffect(() => {
        if (characters) {
            dispatch(appActions.setCharacters([]));
        }
        // eslint-disable-next-line
    }, [pathname]);

    const handleSearch = ({ target: { value } }) => {
        dispatch(appActions.setFilter(value));
        dispatch(appActions.setSearchResults(characters?.filter(({ name }) =>
            name?.toLowerCase().includes(filter.toLowerCase())
        )));
    };

    const clearSearch = () => {
        dispatch(appActions.setFilter(''));
        dispatch(appActions.setSearchResults([]));
        dispatch(appActions.setCharacters([]));
    };
    return isLoading ? <Spinner /> : (
        <Container maxWidth='md'>
            <Paper elevation={2} sx={{ p: 2, m: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography component='h5' variant='h6' sx={{ m: 1 }}>
                    Character Count: {characters?.length}
                </Typography>
                <Box sx={{ p: 2, mb: 4 }}>
                    <SearchBar
                        value={filter}
                        onChange={handleSearch}
                        onClick={clearSearch}
                    />
                </Box>
                <Box sx={{ width: '100%' }}>
                    {searchResults && (
                        <Grid container spacing={2} direction='column' sx={{ pb: 0, ml: 0, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            {searchResults?.map((character, index) => (
                                <Grid key={index} item xs={12} sm={12} component={NavLink} to={`/characters/${character?.id}`} sx={{
                                    pl: 1, pr: 2, pt: 1, pb: 2, bgcolor: 'primary.light', textDecoration: 'none', width: '100%'
                                }}>
                                    <Card elevation={2} sx={{
                                        p: 2, bgcolor: 'primary.dark', '&:hover': {
                                            bgcolor: (theme) => theme.palette.mode === 'dark'
                                                ? 'custom.disabled' : 'custom.darkDisabled'
                                        }
                                    }}>
                                        <CardContent sx={{ '&:last-child': { pb: 2 } }}>
                                            <Typography sx={{ color: 'primary.contrastText', textAlign: 'center' }}>
                                                {character?.name}
                                            </Typography>
                                            <Typography sx={{ color: 'primary.contrastText', textAlign: 'center' }}>
                                                {character?.origin?.name}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </Box>
            </Paper>
        </Container>
    );
};

export default Search;