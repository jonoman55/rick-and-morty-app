export const genderColor = (gender) => {
    switch (gender) {
        case 'Male':
            return 'custom.blue';
        case 'Female':
            return 'custom.pink';
        case 'Genderless':
            return 'custom.unknown';
        case 'unknown':
            return 'custom.unknown';
        default:
            return 'custom.gray';
    }
};

export const statusColor = (status) => {
    switch (status) {
        case 'Alive':
            return 'custom.green';
        case 'Dead':
            return 'custom.red';
        case 'unknown':
            return 'custom.unknown';
        default:
            return 'custom.gray';
    }
};

export const speciesColor = (species) => {
    switch (species) {
        case 'Human':
            return 'custom.teal';
        case 'Alien':
            return 'custom.brightGreen';
        case 'Humanoid':
            return 'custom.humanoid';
        case 'Mythological Creature':
            return 'custom.myth';
        case 'Poopybutthole':
            return 'custom.pbh';
        case 'Animal':
            return 'custom.animal';
        case 'Cronenberg':
            return 'custom.cron';
        case 'Disease':
            return 'custom.disease';
        case 'Robot':
            return 'custom.robot';
        case 'unknown':
            return 'custom.unknown';
        default:
            return 'primary.contrastText';
    }
};