import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OurTech from './pages/OurTech';
import Article from './pages/Article';
import PricingPage from './pages/PricingPage';
import NotFound from './pages/NotFound';
import ScrollToTop from '../components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech" element={<OurTech />} />
        <Route path="/article" element={<Article />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App;
