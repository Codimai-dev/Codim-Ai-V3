import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import PricingPage from './pages/PricingPage';
import GeoServices from './pages/GeoServices';
import NotFound from './pages/NotFound';
import ScrollToTop from '../components/ScrollToTop';

const router = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Home />
      </>
    ),
  },
  {
    path: "/article",
    element: (
      <>
        <ScrollToTop />
        <Article />
      </>
    ),
  },
  {
    path: "/education",
    element: (
      <>
        <ScrollToTop />
        <Article />
      </>
    ),
  },
  {
    path: "/pricing",
    element: (
      <>
        <ScrollToTop />
        <PricingPage />
      </>
    ),
  },
  {
    path: "/geo-services",
    element: (
      <>
        <ScrollToTop />
        <GeoServices />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <ScrollToTop />
        <Home />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <ScrollToTop />
        <NotFound />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
