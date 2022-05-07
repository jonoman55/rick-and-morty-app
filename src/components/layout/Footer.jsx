import { usePathname } from '../../hooks/usePathname';
import { FooterPaper, FooterIcons, FooterText } from '../styled/Footer.styled';

const Footer = () => {
    const pathname = usePathname();
    return pathname !== '/' && (
        <FooterPaper component='footer' elevation={2}>
            <FooterIcons />
            <FooterText />
        </FooterPaper>
    );
};

export default Footer;