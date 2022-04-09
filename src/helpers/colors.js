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

// TODO : Finish implementing this color helper
export const typeColor = (type) => {
    switch (type) {
        case 'Planet' || type.includes('Planet'):
            return 'custom.green';
        case 'Space station':
            return 'custom.thumbBlue';
        case 'Game':
            return 'custom.robot2';
        case 'Microverse':
            return 'custom.robot';
        case 'Menagerie':
            return 'custom.pbh';
        case 'Fantasy town':
            return 'custom.myth';
        case 'Dream':
            return 'custom.white';
        case 'Asteroid':
            return 'custom.disease';
        case 'TV':
            return 'custom.orange';
        case 'Resort':
            return 'custom.cron';
        case 'Non-Diegetic Alternative Reality':
            return 'custom.notFound';
        case 'Diegesis':
            return 'custom.seen';
        case 'Cluster':
            return 'custom.yellow';
        case 'Space':
            return 'custom.orange';
        case 'unknown':
            return 'custom.unknown';
        default:
            return 'primary.contrastText';
    }
};

// TODO : Finish implementing this color helper
export const dimensionColor = ({ dimension, ...other }) => {
    switch (dimension) {
        case 'Dimension' || dimension.includes('Dimension'):
            return 'custom.unknown';
        case 'unknown':
            return 'custom.unknown';
        default:
            return 'custom.unknown';
    }
};