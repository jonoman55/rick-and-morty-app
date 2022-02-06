import { Box, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { Accessibility, Circle, Male, Female, QuestionMark, Adb, NoAccounts, SmartToy, BugReport, FlutterDash, Pets, Coronavirus } from '@mui/icons-material';

// TODO : Finish styling this component
const Character = ({ character }) => {
    console.log(character);
    return (
        <Card elevation={2} sx={{
            display: 'flex', maxWidth: 475, minHeight: 150, bgcolor: 'primary.main', '&:hover': {
                bgcolor: (theme) => theme.palette.mode === 'dark' ? 'custom.disabled' : 'custom.darkDisabled', opacity: 0.8
            }
        }}>
            <CardMedia
                component='img'
                sx={{ height: 'auto', width: 150 }}
                image={character.image}
                alt=''
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component='div' variant='h6'>
                        {character?.name}
                    </Typography>
                    <Typography variant='subtitle1' color='text.secondary' component='div'>
                        {character?.status} - {character?.species}
                    </Typography>
                </CardContent>
                <Box component={Stack} direction='row' spacing={1} sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1 }}>
                    <Circle sx={{ color: statusColor(character.status), height: 32, width: 32 }} />
                    <GenderIcon gender={character?.gender} sx={{ color: genderColor(character?.gender), height: 32, width: 32 }} />
                    <SpeciesIcon species={character?.species} sx={{ height: 32, width: 32 }} />
                </Box>
            </Box>
        </Card>
    );
};

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
        case 'Animal':
            return <Pets {...other} />;
        case 'Cronenberg':
            return <QuestionMark {...other} />;
        case 'Disease':
            return <Coronavirus {...other} />;
        case 'Robot':
            return <SmartToy {...other} />;
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
        case 'Genderless':
            return <QuestionMark {...other} />;
        case 'unknown':
            return <QuestionMark {...other} />;
        default:
            return <NoAccounts {...other} />;
    }
};

const genderColor = (gender) => {
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


const statusColor = (status) => {
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

export default Character;