import { CharacterCard } from "../characters";
import { LocationCard } from "../locations";
import { EpisodeCard } from "../episodes";

export const CardRenderer = ({ type, item }) => {
    if (type === 'characters') {
        return <CharacterCard character={item} />;
    }
    if (type === 'locations') {
        return <LocationCard location={item} />;
    }
    if (type === 'episodes') {
        return <EpisodeCard episode={item} />;
    }
};