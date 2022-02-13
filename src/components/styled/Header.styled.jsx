import { styled, Box, AppBar, Toolbar } from '@mui/material';

export const PortalDiv = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
`;

export const LogoDiv = styled(Box)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 8px;
    margin: 8px;
`;

export const ThumbDiv = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
`;

export const AppHeader = styled(AppBar)(({ theme }) => ({
    marginBottom: theme.spacing(0),
    backgroundColor: theme.palette.mode === 'light' && '#fff',
}));

export const AnchorDiv = styled(Toolbar)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 0px;
    padding-bottom: 0px;
`;

export const imageStyles = (matches) => {
    if (!matches) {
        return {
            height: 100, width: 330 // dimensions for desktop
        };
    }
    return {
        height: 60, width: 200 // dimensions for mobile
    };
};