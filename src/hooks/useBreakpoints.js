import { useMediaQuery } from '@mui/material';

export const useBreakpoints = (size, on) => {
    const matches = useMediaQuery((theme) =>
        on === 'down'
            ? theme.breakpoints.down(size)
            : theme.breakpoints.up(size), {
        noSsr: true
    });
    return matches;
};