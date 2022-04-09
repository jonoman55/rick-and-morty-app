import { Card, ImagesBox, Image, Title, ButtonsStack, NavButton } from '../styled/Home.styled';
import { rickAvatar, noobNoob, morty, meeseeks } from '../../images';

const HomeCard = () => (
    <Card elevation={2}>
        <ImagesBox>
            <Image src={rickAvatar} alt='rick' />
            <Title component='p' variant='body1' paragraph>
                Explore
            </Title>
            <Image src={noobNoob} alt='noobNoob' />
        </ImagesBox>
        <ButtonsStack spacing={4}>
            <NavButton text='Characters' to='/characters' />
            <NavButton text='Locations' to='/locations' />
            <NavButton text='Episodes' to='/episodes' />
            <NavButton text='Search' to='/search' />
            <NavButton text='Warp Portal' to='/portal' />
        </ButtonsStack>
        <ImagesBox>
            <Image src={meeseeks} alt='meeseeks' />
            <Image src={morty} alt='morty' />
        </ImagesBox>
    </Card>
);

export default HomeCard;