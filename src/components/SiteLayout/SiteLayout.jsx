import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import DiscountBanner from '../DiscountBanner/DiscountBanner';

const SiteLayout = () => {
  const location = useLocation();
  const showBanner = ['/', '/oferta'].includes(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Outlet />
      <Footer />
      <ScrollToTop />
      {showBanner && <DiscountBanner />}
    </>
  );
};

export default SiteLayout;
