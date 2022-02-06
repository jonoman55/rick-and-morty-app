import { Icon, Paper, Stack } from '@mui/material';
import {
    Male, Female,
    Accessibility as Human,
    QuestionMark as Unknown,
    NoAccounts as NotFound,
    SmartToy as Humanoid,
    BugReport as Bug,
    FlutterDash as PoopyButtHole,
    Pets as Animal
} from '@mui/icons-material';
import {
    FaRobot as Robot,
    FaSkullCrossbones as Dead,
    FaSmile as Alive
} from 'react-icons/fa';
import {
    SiIconify as Face
} from 'react-icons/si';
import {
    RiAliensFill as Alien
} from 'react-icons/ri';
import {
    GiCyborgFace as Cyborg,
    GiVintageRobot as Robot2,
    GiBrute as Mythological,
    GiBrainTentacle as Cronenberg
} from 'react-icons/gi';
import { RnMSvgIcon } from '../images/RickAndMortyIcon';

// TODO : Figure out how to use this to sort characters
// Icon Links
// MUI List Component: https://mui.com/components/lists/
// MUI Icon component: https://mui.com/components/icons/
// Material UI Icons: https://mui.com/components/material-icons/
// FontAwesome: https://fontawesome.com/v5.15/icons?d=gallery&p=1
// React Icons: https://react-icons.github.io/react-icons
const IconArray = () => (
    <Paper elevation={2} component={Stack} spacing={2} sx={{
        p: 2, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center',
        borderRadius: (theme) => theme.shape.borderRadius, mb: 2, '& :not(style)+:not(style)': { mt: 0 }
    }}>
        {/* Default */}
        <Icon
            component={RnMSvgIcon}
            sx={{ color: 'custom.main', height: 24, width: 24 }}
        />
        {/* Alien */}
        <Icon
            component={Alien}
            sx={{ color: 'custom.brightGreen', width: 'auto' }}
        />
        {/* Robot */}
        <Icon
            component={Robot}
            sx={{ color: 'custom.robot', width: 'auto' }}
        />
        {/* Human */}
        <Icon
            component={Human}
            sx={{ color: 'custom.teal', width: 'auto' }}
        />
        {/* Cyborg */}
        <Icon
            component={Cyborg}
            sx={{ color: 'custom.cyborg', width: 'auto' }}
        />
        {/* Robot2 */}
        <Icon
            component={Robot2}
            sx={{ color: 'custom.robot2', width: 'auto' }}
        />
        {/* Humanoid */}
        <Icon
            component={Humanoid}
            sx={{ color: 'custom.humanoid', width: 'auto' }}
        />
        {/* Mythological */}
        <Icon
            component={Mythological}
            sx={{ color: 'custom.myth', width: 'auto' }}
        />
        {/* Bug */}
        <Icon
            component={Bug}
            sx={{ color: 'custom.brightGreen', width: 'auto' }}
        />
        {/* Face */}
        <Icon
            component={Face}
            sx={{ color: 'custom.notFound', width: 'auto' }}
        />
        {/* PoopyButtHole */}
        <Icon
            component={PoopyButtHole}
            sx={{ color: 'custom.pbh', width: 'auto' }}
        />
        {/* Animal */}
        <Icon
            component={Animal}
            sx={{ color: 'custom.animal', width: 'auto' }}
        />
        {/* NotFound */}
        <Icon
            component={NotFound}
            sx={{ color: 'custom.chrome', width: 'auto' }}
        />
        {/* Unknown */}
        <Icon
            component={Unknown}
            sx={{ color: 'custom.unknown', width: 'auto' }}
        />
        {/* Female */}
        <Icon
            component={Female}
            sx={{ color: 'custom.pink', width: 'auto' }}
        />
        {/* Male */}
        <Icon
            component={Male}
            sx={{ color: 'custom.blue', width: 'auto' }}
        />
        {/* Cronenberg */}
        <Icon
            component={Cronenberg}
            sx={{ color: 'custom.cron', width: 'auto' }}
        />
        {/* Dead */}
        <Icon
            component={Dead}
            sx={{ color: 'custom.error', width: 'auto' }}
        />
        {/* Alive */}
        <Icon
            component={Alive}
            sx={{ color: 'custom.yellow', width: 'auto' }}
        />
    </Paper>
);

export default IconArray;