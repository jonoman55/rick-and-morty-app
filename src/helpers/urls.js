export const createLink = (path, url) => {
    return `/${path}/${url.split('/')[5]}`;
};

export const isUrl = (url) => {
    if (url?.startsWith('https'))
        return true;
    return false;
};
