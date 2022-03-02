import { Icon, Paper, Stack } from '@mui/material';
import {
    Male, Female,
    Coronavirus as Disease,
    Accessibility as Human,
    QuestionMark as Unknown,
    NoAccounts as NotFound,
    SmartToy as Humanoid,
    BugReport as Bug,
    FlutterDash as PoopyButtHole,
    Pets as Animal,
    Adb as Alien2,
} from '@mui/icons-material';
import {
    FaRobot as Robot,
    FaSkullCrossbones as Dead,
    FaSmile as Alive
} from 'react-icons/fa';
import {
    GiCyborgFace as Cyborg,
    GiVintageRobot as Robot2,
    GiBrute as Mythological,
    GiBrainTentacle as Cronenberg
} from 'react-icons/gi';
import { RiAliensFill as Alien } from 'react-icons/ri';

// TODO : Figure out how to use this to sort characters
// TODO : Remove any unused icons
// Icon Links
// MUI List Component: https://mui.com/components/lists/
// MUI Icon component: https://mui.com/components/icons/
// Material UI Icons: https://mui.com/components/material-icons/
// FontAwesome: https://fontawesome.com/v5.15/icons?d=gallery&p=1
// React Icons: https://react-icons.github.io/react-icons
const IconArray = () => (
    <Paper elevation={2} sx={{ borderRadius: (theme) => theme.shape.borderRadius }}>
        <Stack direction='row' spacing={2} sx={{
            p: 2, mb: 2, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 1.5,
            justifyContent: 'space-evenly', alignItems: 'center', '& :not(style)+:not(style)': { mt: 0 }
        }}>
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
            {/* Disease */}
            <Icon
                component={Disease}
                sx={{ color: 'custom.disease', width: 'auto' }}
            />
            {/* Cronenberg */}
            <Icon
                component={Cronenberg}
                sx={{ color: 'custom.cron', width: 'auto' }}
            />
            {/* Alien2 */}
            <Icon
                component={Alien2}
                sx={{ color: 'custom.main', width: 'auto' }}
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
            {/* Unknown */}
            <Icon
                component={Unknown}
                sx={{ color: 'custom.unknown', width: 'auto' }}
            />
            {/* NotFound */}
            <Icon
                component={NotFound}
                sx={{ color: 'custom.chrome', width: 'auto' }}
            />
        </Stack>
    </Paper>
);

export default IconArray;