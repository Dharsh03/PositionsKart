import Link from 'components/Link';
import './index.css';

const Footer = () => (
  <footer className="footer">
    <span className="footer__date">{`© 1947-${new Date().getFullYear()} `}</span>
    <Link secondary className="footer__link">
      PositionsKart
    </Link>
  </footer>
);

export default Footer;
