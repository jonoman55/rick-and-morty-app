import {
    Male,
    Female,
    QuestionMark as Unknown,
    Accessibility as Human,
    Adb as Alien,
    NoAccounts as NotFound,
    SmartToy as Humanoid,
    BugReport as Mythological,
    FlutterDash as Poopybutthole,
    Pets as Animal,
    Coronavirus as Disease
} from '@mui/icons-material';

// TODO : Update the Icons to match the IconsArray
export const SpeciesIcon = ({ species, ...other }) => {
    switch (species) {
        case 'Human':
            return <Human {...other} />;
        case 'Alien':
            return <Alien {...other} />;
        case 'Humanoid':
            return <Humanoid {...other} />;
        case 'Mythological Creature':
            return <Mythological {...other} />;
        case 'Poopybutthole':
            return <Poopybutthole {...other} />;
        case 'Animal':
            return <Animal {...other} />;
        case 'Cronenberg':
            return <Unknown {...other} />;
        case 'Disease':
            return <Disease {...other} />;
        case 'Robot':
            return <Humanoid {...other} />;
        case 'unknown':
            return <Unknown {...other} />;
        default:
            return <NotFound {...other} />;
    }
};

export const GenderIcon = ({ gender, ...other }) => {
    switch (gender) {
        case 'Male':
            return <Male {...other} />;
        case 'Female':
            return <Female {...other} />;
        case 'Genderless':
            return <Unknown {...other} />;
        case 'unknown':
            return <Unknown {...other} />;
        default:
            return <NotFound {...other} />;
    }
};

// TODO : Finish implementing this Icon component
export const StatusIcon = ({ status, ...other }) => {
    switch (status) {
        case 'Alive':
            return;
        case 'Dead':
            return;
        case 'unknown':
            return <Unknown {...other} />;
        default:
            return <NotFound {...other} />;
    }
}