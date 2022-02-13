const createIdArray = count =>
    Array(count).fill().map((x, i) => i);
    
export const createIdsList = count => {
    let array = createIdArray(count);
    array = array.map(i => i.toString());
    array = array.join(',');
    return array.toString();
};