import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import DiscountBanner from '../DiscountBanner/DiscountBanner';
import css from './SiteLayout.module.css';

const SiteLayout = () => {
  const location = useLocation();
  const showBanner = ['/', '/oferta'].includes(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={css.layout}>
      <div className={css.main}>
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop />
      {showBanner && <DiscountBanner />}
    </div>
  );
};

export default SiteLayout;
