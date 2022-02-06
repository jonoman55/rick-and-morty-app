import { styled, TextField } from '@mui/material';

export const TextInput = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-input': {
        color: theme.palette.primary.contrastText,
    },
    '& .MuiFormLabel-root': {
        color: theme.palette.primary.contrastText,
    },
    '& label.Mui-focused': {
        color: theme.palette.primary.contrastText,
    },
    '& .MuiSelect-icon': {
        color: theme.palette.primary.contrastText,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: theme.palette.custom.main,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: theme.palette.primary.contrastText,
        },
        '&:hover fieldset': {
            borderColor: theme.palette.custom.main,
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.custom.main,
        },
        '&.Mui-disabled:hover fieldset': {
            borderColor: theme.palette.mode === 'light' 
                ? theme.palette.custom.disabled 
                : theme.palette.custom.darkDisabled,
        },
    },
}));