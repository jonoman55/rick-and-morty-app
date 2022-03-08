import { styled, Autocomplete as MuiAutocomplete } from '@mui/material';
import { TextInput } from '.';

export const StyledAutocomplete = styled(MuiAutocomplete)(({ theme }) => ({
    '& .MuiAutocomplete-popupIndicator': {
        color: theme.palette.primary.contrastText
    },
    '& .MuiAutocomplete-clearIndicator': {
        color: theme.palette.primary.contrastText
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: theme.palette.primary.contrastText,
        },
        '&:hover fieldset': {
            borderColor: theme.palette.custom.lightGreen,
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.custom.lightGreen,
        },
        '&.Mui-disabled:hover fieldset': {
            borderColor: theme.palette.mode === 'light' 
                ? theme.palette.custom.disabled 
                : theme.palette.custom.darkDisabled,
        },
    },
}));

export const Autocomplete = ({ options, label, value, onChange, inputValue, onInputChange, ...other }) => (
    <StyledAutocomplete
        value={value}
        onChange={onChange}
        options={options
            // .sort((a, b) => a?.name?.localeCompare(b?.name))
            // .sort((a, b) => a?.status?.localeCompare(b?.status))
        }
        getOptionLabel={(option) => option?.name}
        // inputValue={inputValue}
        // onInputChange={onInputChange}
        // groupBy={(option) => option?.species}
        renderInput={(params) => <TextInput {...params} label={label} />}
        {...other}
    />
);