import { usePathname } from '../../hooks/usePathname';
import { FooterPaper, FooterIcons, FooterText } from '../styled/Footer.styled';

const Footer = () => {
    const pathname = usePathname();
    return pathname !== '/' && (
        <FooterPaper elevation={2} component='footer'>
            <FooterIcons />
            <FooterText />
        </FooterPaper>
    );
};

export default Footer;