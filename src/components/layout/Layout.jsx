import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import { Body, Container } from './Container';

const Layout = (props) => (
    <Body>
        <Header />
        <Container component='main'>
            {props.children}
            <BackToTop />
        </Container>
        <Footer />
    </Body>
);

export default Layout;