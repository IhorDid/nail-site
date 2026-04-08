import './App.module.css';
import AnimatedSection from '../AnimatedSection';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import About from './About/About';
import Program from './Program/Program';
import Benefits from './Benefits/Benefits';
import ForWhom from './ForWhom/ForWhom';
import NotFor from './NotFor/NotFor';
import HowItWorks from './HowItWorks/HowItWorks';
import Pricing from './Pricing/Pricing';
import FAQ from './FAQ/FAQ';
import FinalCTA from './FinalCTA/FinalCTA';
import Footer from './Footer/Footer';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import DiscountBanner from './DiscountBanner/DiscountBanner';
import Oferta from '../pages/Oferta/Oferta';
import FailedPayment from '../pages/FailedPayment/FailedPayment';
import NotFound from '../pages/NotFound/NotFound';

import { Outlet, Route, Routes, useLocation } from 'react-router-dom';

const sections = [
  Hero,
  About,
  Program,
  Benefits,
  ForWhom,
  HowItWorks,
  Pricing,
  FAQ,
  NotFor,
  FinalCTA,
];

const Home = () => (
  <>
    <Header />
    {sections.map((Section, i) => (
      <AnimatedSection key={i} as="div">
        <Section />
      </AnimatedSection>
    ))}
  </>
);

const SiteLayout = () => {
  const location = useLocation();
  const showBanner = ['/', '/oferta'].includes(location.pathname);

  return (
    <>
      <Outlet />
      <Footer />
      <ScrollToTop />
      {showBanner && <DiscountBanner />}
    </>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/oferta" element={<Oferta />} />
          <Route path="/neuspishna-oplata" element={<FailedPayment />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
