import AnimatedSection from '../../AnimatedSection';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Program from '../Program/Program';
import Benefits from '../Benefits/Benefits';
import ForWhom from '../ForWhom/ForWhom';
import NotFor from '../NotFor/NotFor';
import HowItWorks from '../HowItWorks/HowItWorks';
import Pricing from '../Pricing/Pricing';
import FAQ from '../FAQ/FAQ';
import FinalCTA from '../FinalCTA/FinalCTA';

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

export default Home;
