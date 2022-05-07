import { Box, CardContent, CardMedia, Stack } from '@mui/material';
import { Circle as StatusIcon } from '@mui/icons-material';

import { Card } from "../styled/Card.styled";
import { FlexText } from '../controls';
import { GenderIcon, SpeciesIcon } from '../../helpers/icons';
import { statusColor, genderColor, speciesColor } from '../../helpers/colors';

const CharacterCard = ({ character }) => (
    <Card elevation={2}>
        <CardMedia
            component='img'
            sx={{ height: 'auto', width: 150 }}
            image={character.image}
            alt='character'
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <FlexText component='p' variant='h6'>
                    {character?.name}
                </FlexText>
                <FlexText component='p' variant='subtitle1' color='text.secondary'>
                    {character?.status} - {character?.species}
                </FlexText>
            </CardContent>
            <Stack direction='row' spacing={1} sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1 }}>
                <StatusIcon
                    sx={{ color: statusColor(character.status), height: 32, width: 32 }}
                />
                <GenderIcon
                    gender={character?.gender}
                    sx={{ color: genderColor(character?.gender), height: 32, width: 32 }}
                />
                <SpeciesIcon
                    species={character?.species}
                    sx={{ color: speciesColor(character?.species), height: 32, width: 32 }}
                />
            </Stack>
        </Box>
    </Card>
);

export default CharacterCard;