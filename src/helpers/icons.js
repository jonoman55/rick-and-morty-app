import {
    Male,
    Female,
    Groups as MultipleResidents,
    Group as Residents,
    Person as OneResident,
    PersonOff as NoResidents,
    QuestionMark as Unknown,
    Accessibility as Human,
    Adb as Alien,
    NoAccounts as NotFound,
    SmartToy as Humanoid,
    BugReport as Mythological,
    FlutterDash as Poopybutthole,
    Pets as Animal,
    Coronavirus as Disease,
    Tv as TV,
    SportsEsports as VideoGame,
    Microwave as Microverse,
    MapsHomeWork as Town,
    NightsStay as Dream,
    CollectionsBookmark as Menagerie,
    BeachAccess as Resort,
    AutoStories as Diegesis,
    Public as NonDiegetic,
    Info as Dimension,
    Workspaces as Cluster,
    RocketLaunch as Space,
    HotTub as Spa
} from '@mui/icons-material';
import { FaSkullCrossbones as Dead, FaSmile as Alive } from 'react-icons/fa';
import { RiGenderlessLine as Genderless } from 'react-icons/ri';
import { BiPlanet as Planet } from 'react-icons/bi';
import { GiDefenseSatellite as SpaceStation, GiAsteroid as Asteroid } from 'react-icons/gi';

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

export const ResidentsIcon = ({ count, ...other }) => {
    if (count === 0) {
        return <NoResidents {...other} />;
    }
    if (count === 1) {
        return <OneResident {...other} />;
    }
    if (count > 1 && count <= 10) {
        return <Residents {...other} />;
    }
    if (count >= 11) {
        return <MultipleResidents {...other} />;
    }
    return <NoResidents {...other} />;
};

export const TypeIcon = ({ type, ...other }) => {
    switch (type) {
        case 'Planet' || type?.includes('Planet'):
            return <Planet {...other} />;
        case 'Space station':
            return <SpaceStation {...other} />;
        case 'Game':
            return <VideoGame {...other} />;
        case 'Microverse':
            return <Microverse {...other} />;
        case 'Menagerie':
            return <Menagerie {...other} />;
        case 'Fantasy town':
            return <Town {...other} />;
        case 'Dream':
            return <Dream {...other} />;
        case 'Asteroid':
            return <Asteroid {...other} />;
        case 'TV':
            return <TV {...other} />;
        case 'Spa':
            return <Spa {...other} />
        case 'Resort':
            return <Resort {...other} />;
        case 'Non-Diegetic Alternative Reality':
            return <NonDiegetic {...other} />;
        case 'Diegesis':
            return <Diegesis {...other} />;
        case 'Space':
            return <Space {...other} />;
        case 'Cluster':
            return <Cluster {...other} />;
        case 'unknown':
            return <Unknown {...other} />;
        default:
            return <Planet {...other} />;
    }
};

export const DimensionIcon = ({ dimension, ...other }) => {
    switch (dimension) {
        case 'Dimension':
            return <Dimension {...other} />;
        case 'unknown':
            return <Unknown {...other} />;
        default:
            return <Dimension {...other} />;
    }
};