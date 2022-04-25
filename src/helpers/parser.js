// Format: E01S01
// TODO : Finish implement parsers for episode number and season
// NOTE : Example: E01S01 -> Season 1 Episode 1
// This will be used for search and displaying the info in the details card
export const getEpisodeInfo = (episode) => {
    if (!episode) return null;
    const episodeNumber = episode.slice(3, 6);
    const seasonNumber = episode.slice(0, 3);
    return {
        episode: episodeNumber,
        season: seasonNumber
    };
}

export const formatEpisodeInfo = (episode) => {
    if (!episode) return null;
}

export const formatSeasonInfo = (episode) => {
    if (!episode) return null;
}