import { Avatar } from "@mui/material";
import {
    PersonSearch as CharacterSearchIcon,
    TravelExplore as LocationSearchIcon,
    ManageSearch as EpisodeSearchIcon
} from "@mui/icons-material";

export const SearchCardAvatar = ({ type }) => (
    <Avatar sx={{ color: 'primary.contrastText' }}>
        {type === 'characters' && <CharacterSearchIcon />}
        {type === 'locations' && <LocationSearchIcon />}
        {type === 'episodes' && <EpisodeSearchIcon />}
    </Avatar>
);