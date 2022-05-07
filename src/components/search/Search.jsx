
import { styled, Avatar, Paper, Typography } from "@mui/material";
import { Search as SearchIcon} from "@mui/icons-material";

import SearchTabs from "./SearchTabs";

const SearchHeader = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottom: `1px solid ${theme.palette.custom.main}`,
    backgroundColor: theme.palette.mode === 'dark'
        ? theme.palette.background.paper
        : theme.palette.grey.A200,
}));
 
const Search = () => (
    <Paper elevation={2}>
        <SearchHeader elevation={0}>
            <Typography variant='h5' sx={{ mb: 2 }}>Search</Typography>
            <Avatar sx={{ mb: 2, color: 'custom.main' }}>
                <SearchIcon />
            </Avatar>
        </SearchHeader>
        <SearchTabs />
    </Paper>
);

export default Search;