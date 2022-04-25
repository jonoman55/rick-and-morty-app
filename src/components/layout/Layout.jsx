import Header from './Header';
import ApiCredit from './ApiCredit';
import Footer from './Footer';
import BackToTop from './BackToTop';
import BottomNav from './BottomNav';
import { Body, Container } from './Container';

// TODO : Add the footer to homepage (styling changes needed)
// NOTE : Add borderBottom to BottomNav and remove borderTop from Footer
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