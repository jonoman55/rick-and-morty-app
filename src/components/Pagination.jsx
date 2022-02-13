import { NavLink } from 'react-router-dom';
import { styled, Stack, Pagination as MuiPagination, PaginationItem as MuiPaginationItem } from '@mui/material';
import { ArrowBack as ArrowBackIcon, ArrowForward as ArrowForwardIcon } from '@mui/icons-material';

const PageItem = styled(MuiPaginationItem)(({ theme }) => ({
    marginTop: theme.spacing(0.5),
    color: theme.palette.mode === 'light'
        ? theme.palette.custom.black
        : theme.palette.custom.main,
    '&:hover': {
        color: theme.palette.mode === 'dark'
            ? theme.palette.custom.white
            : theme.palette.custom.main,
    },
}));

// TODO : Make this reusable for Locations and Episodes
const Pagination = ({ count, currentPage }) => (
    <Stack spacing={2} sx={{ p: 1, mt: 4, mb: 1 }}>
        <MuiPagination
            variant='outlined'
            shape='circular'
            size='medium'
            count={count}
            page={currentPage}
            renderItem={(item) => (
                <PageItem
                    components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    component={NavLink}
                    to={`/characters${item.page === 1 ? '' : `?page=${item.page}`}`}
                    {...item} />
            )}
        />
    </Stack>
);

export default Pagination;