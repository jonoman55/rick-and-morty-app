import Header from './Header';
import BackToTop from './BackToTop';
import { Body, Container } from './Container';

const Layout = (props) => (
    <Body>
        <Header />
        <Container component='main'>
            {props.children}
            <BackToTop />
        </Container>
    </Body>
);

export default Layout;