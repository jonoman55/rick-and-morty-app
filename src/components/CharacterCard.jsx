import { Box, Card, CardContent, CardMedia, Stack } from '@mui/material';
import { Circle as StatusIcon } from '@mui/icons-material';
import { GenderIcon, SpeciesIcon } from '../helpers/icons';
import { statusColor, genderColor, speciesColor } from '../helpers/colors';
import { FlexText } from './controls';

// TODO : Finish styling and convert to styled components
const CharacterCard = ({ character }) => (
    <Card elevation={2} sx={{
        display: 'flex', bgcolor: 'primary.main', '&:hover': {
            bgcolor: (theme) => theme.palette.mode === 'dark'
                ? 'custom.disabled' : 'custom.darkDisabled', opacity: 0.8
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
                <FlexText component='div' variant='h6'>
                    {character?.name}
                </FlexText>
                <FlexText component='div' variant='subtitle1' color='text.secondary'>
                    {character?.status} - {character?.species}
                </FlexText>
            </CardContent>
            <Stack direction='row' spacing={1} sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1 }}>
                <StatusIcon sx={{ color: statusColor(character.status), height: 32, width: 32 }} />
                <GenderIcon gender={character?.gender} sx={{ color: genderColor(character?.gender), height: 32, width: 32 }} />
                <SpeciesIcon species={character?.species} sx={{ color: speciesColor(character?.species), height: 32, width: 32 }} />
            </Stack>
        </Box>
    </Card>
);

export default CharacterCard;