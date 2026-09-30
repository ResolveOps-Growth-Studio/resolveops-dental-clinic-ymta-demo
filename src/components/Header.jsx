import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { CLINIC } from '../config/clinic';
import { scrollToSection } from '../utils/hooks';
import './Header.css';

const NAV_ITEMS = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const handleNavClick = useCallback(
    (e, href) => {
      e.preventDefault();
      const [path, hash] = href.split('#');
      if (location.pathname !== '/' && path === '/') {
        navigate('/', { state: { scrollTo: hash } });
      } else if (hash) {
        scrollToSection(hash);
      }
      setIsMobileOpen(false);
    },
    [location.pathname, navigate]
  );

  // Handle scroll after navigation from appointment page
  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => scrollToSection(location.state.scrollTo), 100);
      // Clear the state
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <header className={`header ${(isScrolled || location.pathname !== '/') ? 'header--scrolled' : ''}`} role="banner">
        <div className="container header__inner">
          <Link
            to="/"
            className="header__logo"
            aria-label={CLINIC.name}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src="/images/logo-white.png" alt="YMTA Logo Icon" className="header__logo-img" style={{ height: '40px', width: 'auto' }} />
            <div className="header__logo-text-wrapper">
              <span className="header__logo-text">YMTA</span>
              <span className="header__logo-sub">DENTAL CLINIC</span>
            </div>
          </Link>

          <nav className="header__nav" aria-label="Main navigation">
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="header__nav-link"
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            <a
              href={`tel:${CLINIC.phone.primary}`}
              className="btn btn-secondary btn-sm header__phone"
              aria-label="Call Clinic Now"
            >
              <Phone size={16} />
              Call Now
            </a>
            <Link to="/appointment" className="btn btn-primary btn-sm">
              <Calendar size={16} />
              Book Appointment
            </Link>
          </div>

          <button
            className="header__menu-btn btn-icon"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`mobile-menu ${isMobileOpen ? 'mobile-menu--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="mobile-menu__overlay" onClick={() => setIsMobileOpen(false)} />
        <div className="mobile-menu__panel">
          <nav className="mobile-menu__nav" aria-label="Mobile navigation">
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="mobile-menu__link"
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="mobile-menu__actions">
            <a href={`tel:${CLINIC.phone.primary}`} className="btn btn-secondary btn-lg mobile-menu__call">
              <Phone size={18} />
              Call Clinic
            </a>
            <Link to="/appointment" className="btn btn-primary btn-lg" onClick={() => setIsMobileOpen(false)}>
              <Calendar size={18} />
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile sticky action bar */}
      <div className="mobile-action-bar">
        <a href={`tel:${CLINIC.phone.primary}`} className="mobile-action-bar__btn mobile-action-bar__call">
          <Phone size={18} />
          <span>Call</span>
        </a>
        <Link to="/appointment" className="mobile-action-bar__btn mobile-action-bar__book">
          <Calendar size={18} />
          <span>Book</span>
        </Link>
      </div>
    </>
  );
}
