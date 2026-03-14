import { useState } from 'react';
import css from './Header.module.css';
import SharedLayout from '../SharedLayout/SharedLayout';
import Button from '../../UI/Button/Button';

const navLinks = [
  { label: 'Програма', href: '#program' },
  { label: 'Тарифи', href: '#pricing' },
  { label: 'Як проходить', href: '#howitworks' },
  { label: 'FAQ', href: '#faq' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClose = () => setMenuOpen(false);

  const handleCTA = () => {
    handleClose();
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={css.header}>
      <SharedLayout header>
        <a href="#" className={css.logo}>
          Slim Form
        </a>

        <nav className={css.nav}>
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className={css.navLink}>
              {label}
            </a>
          ))}
        </nav>

        <Button
          text="Записатися на курс"
          className={css.button}
          onClick={handleCTA}
        />

        <button
          className={css.mobileMenuBtn}
          aria-label="Меню"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span className={`${css.bar} ${menuOpen ? css.bar1Open : ''}`} />
          <span className={`${css.bar} ${menuOpen ? css.bar2Open : ''}`} />
          <span className={`${css.bar} ${menuOpen ? css.bar3Open : ''}`} />
        </button>
      </SharedLayout>

      {/* MOBILE DRAWER */}
      <div className={`${css.drawer} ${menuOpen ? css.drawerOpen : ''}`}>
        <nav className={css.drawerNav}>
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={css.drawerLink}
              onClick={handleClose}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {menuOpen && <div className={css.overlay} onClick={handleClose} />}
    </header>
  );
};

export default Header;
