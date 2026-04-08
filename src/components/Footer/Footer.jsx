import css from './Footer.module.css';
import SharedLayout from '../SharedLayout/SharedLayout';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { TbBrandTelegram } from 'react-icons/tb';
import { FaInstagram } from 'react-icons/fa6';
import { CiYoutube } from 'react-icons/ci';
import { PiTiktokLogoLight } from 'react-icons/pi';
import { FaSquareThreads } from 'react-icons/fa6';
import { use } from 'react';

const ctaLink =
  'https://sojaneb.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnM6QWAR_6JBoTd11gwtiXtNStA0MByZoyKRDnylDNw7vOKLppd8tn1zPYVKY_aem_p2AGBf_drGTP-Nad21hEPg';

const nav = [
  { label: 'Програма', href: '#program' },
  { label: 'Для кого', href: '#forwhom' },
  { label: 'Тарифи', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

const courses = [
  { label: 'Slim Form', href: '#' },
  { label: 'PRO ГЕЛЬ', href: ctaLink },
];

const contacts = [
  {
    label: 'Telegram',
    href: 'https://t.me/so_janeb',
    icon: <TbBrandTelegram />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/so.janeb/',
    icon: <FaInstagram />,
  },
  {
    label: 'Threads',
    href: 'https://www.threads.net/@so.janeb',
    icon: <FaSquareThreads />,
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@so_jane_b?si=Ogn3kNkzAxVy17wg',
    icon: <CiYoutube />,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@so_janeb',
    icon: <PiTiktokLogoLight />,
  },
];

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className={css.footer}>
      <SharedLayout>
        <div className={css.content}>
          <div className={css.brand}>
            <p className={css.logo}>Slim Form</p>
            <p className={css.brandText}>
              Онлайн-курс про короткі натуральні нігті. Безпечна техніка,
              стабільний результат, економія часу.
            </p>
          </div>
          {isHomePage && (
            <div className={css.col}>
              <h4 className={css.colTitle}>Навігація</h4>
              <ul className={css.colList}>
                {nav.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className={css.link}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className={css.col}>
            <h4 className={css.colTitle}>Курси</h4>
            <ul className={css.colList}>
              {courses.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={css.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={css.col}>
            <h4 className={css.colTitle}>Контакти</h4>
            <ul className={css.colList}>
              {contacts.map(({ label, href, icon }) => (
                <li key={label} className={css.contactItem}>
                  <span className={css.icon}>{icon}</span>
                  <a
                    href={href}
                    className={css.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={css.bottom}>
          <p className={css.copy}>© 2026 Slim Form. Всі права захищено.</p>
          <Link to="/oferta" className={css.oferta}>
            Договір публічної оферти
          </Link>
        </div>
      </SharedLayout>
    </footer>
  );
};

export default Footer;
