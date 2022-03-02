import { IconButton } from '@mui/material';
import { Search as SearchIcon, Clear as ClearIcon } from '@mui/icons-material';

import { Search, SearchIconWrapper, StyledInputBase } from '../styled/Search.styled';

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