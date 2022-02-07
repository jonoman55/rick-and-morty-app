import { NavLink } from 'react-router-dom';
import { Pagination as MuiPagination, PaginationItem } from '@mui/material';

// TODO : Make this reusable for Locations and Episodes
const Pagination = ({ count, currentPage }) => (
    <MuiPagination
        variant='outlined'
        shape='rounded'
        count={count}
        page={currentPage}
        renderItem={(item) => (
            <PaginationItem
                component={NavLink}
                to={`/characters${item.page === 1 ? '' : `?page=${item.page}`}`}
                {...item} />
        )}
    />
);

export default Pagination;