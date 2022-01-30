export const createIdsList = (count) => {
    let array = Array(count).fill().map((x, i) => i);
    array = array.map(i => i.toString());
    array = array.join(',');
    return array.toString();
};

export const createIdArray = (count) => {
    return Array(count).fill().map((x, i) => i);
};