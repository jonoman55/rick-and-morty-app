export const createToLink = (path, id) => `/${path}/${id}`;

export const getID = (url) => url.split('/')[5];

export const createLink = (path, url) => {
    return `/${path}/${url.split('/')[5]}`;
};

export const isUrl = (url) => {
    if (url?.startsWith('https'))
        return true;
    return false;
};

export const getPathname = (type) => {
    switch (type) {
        case 'characters':
            return 'characters'
        case 'locations':
            return 'locations'
        case 'episodes':
            return 'episodes'
        default:
            return '/';
    }
};

export const getLocationImg = (id) => {
    switch (id) {
        case 1:
            return 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/713aedcd-9408-42c6-b34c-7afe51780b08/dc8fh6l-aa106f18-32bf-4807-bd59-a2da2b3761a1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcxM2FlZGNkLTk0MDgtNDJjNi1iMzRjLTdhZmU1MTc4MGIwOFwvZGM4Zmg2bC1hYTEwNmYxOC0zMmJmLTQ4MDctYmQ1OS1hMmRhMmIzNzYxYTEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xwwNZMbS1qVJmiJeTUEqRjyOxIPRXY0BN4CYU2s061Q';
        default:
            return 'https://hbomax-images.warnermediacdn.com/2021-06/ricky-and-morty-1200x675.jpg';
    }
};