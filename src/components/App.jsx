import './App.module.css';
import Home from './Home/Home';
import SiteLayout from './SiteLayout/SiteLayout';
import Oferta from '../pages/Oferta/Oferta';
import FailedPayment from '../pages/FailedPayment/FailedPayment';
import NotFound from '../pages/NotFound/NotFound';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/oferta" element={<Oferta />} />
        <Route path="/neuspishna-oplata" element={<FailedPayment />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
