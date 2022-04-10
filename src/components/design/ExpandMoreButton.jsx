import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

import { ExpandMore } from '../styled/LocationDetails.styled';

const ExpandMoreButton = ({ expanded, onClick }) => (
    <ExpandMore
        expand={expanded}
        onClick={onClick}
        aria-expanded={expanded}
        aria-label="show more"
    >
        <ExpandMoreIcon />
    </ExpandMore>
);

export default ExpandMoreButton;