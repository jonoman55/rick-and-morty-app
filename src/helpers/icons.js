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
import { FaSkullCrossbones as Dead, FaSmile as Alive } from 'react-icons/fa';
import { RiGenderlessLine as Genderless } from 'react-icons/ri';

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
            return <Genderless {...other} />;
        case 'unknown':
            return <Unknown {...other} />;
        default:
            return <NotFound {...other} />;
    }
};

export const StatusIcon = ({ status, ...other }) => {
    switch (status) {
        case 'Alive':
            return <Alive {...other} />;
        case 'Dead':
            return <Dead  {...other} />;
        case 'unknown':
            return <Unknown {...other} />;
        default:
            return <NotFound {...other} />;
    }
};