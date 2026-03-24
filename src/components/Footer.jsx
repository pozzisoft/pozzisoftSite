import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">© {year} Pozzisoft. All rights reserved.</p>
        <nav className="footer-links">
          <Link to="/flippy/privacy" className="footer-link">Flippy Privacy Policy</Link>
        </nav>
      </div>
    </footer>
  );
}
