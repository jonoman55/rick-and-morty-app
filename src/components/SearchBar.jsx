import { styled, alpha } from '@mui/material/styles';
import { Box, InputBase, IconButton } from '@mui/material';
import { Search as SearchIcon, Clear as ClearIcon } from '@mui/icons-material';

const Search = styled(Box)(({ theme }) => ({
    display: 'flex',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: 'auto',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const SearchBar = ({ value, onChange, onClick }) => (
    <Search>
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
            placeholder="Search…"
            inputProps={{
                'aria-label': 'search',
                spellCheck: 'false'
            }}
            value={value}
            onChange={onChange}
        />
        {value && (
            <ClearButton onClick={onClick} />
        )}
    </Search>
);

const ClearButton = ({ onClick }) => (
    <IconButton size='small' onClick={onClick} sx={{ p: 0.5, m: 0.5, color: 'primary.contrastText' }}>
        <ClearIcon fontSize='small' />
    </IconButton>
);

export default SearchBar;