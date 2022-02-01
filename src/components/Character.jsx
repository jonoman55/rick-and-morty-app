import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { Accessibility, Circle, Male, Female, QuestionMark, Adb, NoAccounts, SmartToy, BugReport, FlutterDash } from '@mui/icons-material';

// TODO : Finish styling this component
const Character = ({ character }) => {
    console.log(character);
    return (
        <Card elevation={2} sx={{ display: 'flex', maxWidth: 475 }}>
            <CardMedia
                component="img"
                sx={{ width: 150 }}
                image={character.image}
                alt=""
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {character?.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {character?.status} - {character?.species}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="status">
                        <StatusIcon status={character?.status} sx={{ height: 32, width: 32 }} />
                    </IconButton>
                    <IconButton aria-label="gender">
                        <GenderIcon gender={character?.gender} sx={{ height: 32, width: 32 }} />
                    </IconButton>
                    <IconButton aria-label="species">
                        <SpeciesIcon species={character?.species} sx={{ height: 32, width: 32 }} />
                    </IconButton>
                </Box>
            </Box>
        </Card>
    );
};

// TODO : react-icons needed
const SpeciesIcon = ({ species, ...other }) => {
    switch (species) {
        case 'Human':
            return <Accessibility {...other} />;
        case 'Alien':
            return <Adb {...other} />;
        case 'Humanoid':
            return <SmartToy {...other} />;
        case 'Mythological Creature':
            return <BugReport {...other} />;
        case 'Poopybutthole':
            return <FlutterDash {...other} />;
        case 'unknown':
            return <QuestionMark {...other} />;
        default:
            return <NoAccounts {...other} />;
    }
};

const GenderIcon = ({ gender, ...other }) => {
    switch (gender) {
        case 'Male':
            return <Male {...other} />;
        case 'Female':
            return <Female {...other} />;
        case 'unknown':
            return <QuestionMark {...other} />;
        default:
            return <NoAccounts {...other} />;
    }
};

// TODO : Always make this a circle and color it based on status
const StatusIcon = ({ status, ...other }) => {
    switch (status) {
        case 'Alive':
            return <Circle {...other} />;
        case 'Dead':
            return <Circle {...other} />;
        case 'unknown':
            return <QuestionMark {...other} />;
        default:
            return <NoAccounts {...other} />;
    }
};


export default Character;