import { styled, Badge, Chip } from "@mui/material";
import {
    EmojiEmotions as CharactersIcon,
    LocationOn as LocationsIcon,
    Tv as EpisodesIcon
} from "@mui/icons-material";

const ResultsChip = styled(Chip)(({ theme }) => ({
    padding: theme.spacing(1),
    '& .MuiBadge-badge': {
        backgroundColor: theme.palette.custom.main,
        color: theme.palette.custom.black
    },
}));

const anchorBadge = {
    vertical: 'top',
    horizontal: 'left',
};

export const SearchResultsCount = ({ count, type }) => (
    <ResultsChip
        label="Results"
        icon={
            <Badge badgeContent={count} anchorOrigin={anchorBadge}>
                {type === 'characters' && <CharactersIcon fontSize="small" />}
                {type === 'locations' && <LocationsIcon fontSize="small" />}
                {type === 'episodes' && <EpisodesIcon fontSize="small" />}
            </Badge>
        }
    />
);