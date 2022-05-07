import Header from './Header';
import ApiCredit from './ApiCredit';
import Footer from './Footer';
import BackToTop from './BackToTop';
import BottomNav from './BottomNav';
import { Body, Container } from './Container';

const Layout = (props) => (
    <Body>
        <Header />
        <ApiCredit />
        <Container component='main'>
            {props.children}
            <BackToTop />
        </Container>
        <BottomNav />
        <Footer />
    </Body>
);

export default Layout;