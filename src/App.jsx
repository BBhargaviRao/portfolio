import { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import TrackLanding from './pages/TrackLanding.jsx';
import CaseStudy from './pages/CaseStudy.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ux" element={<TrackLanding track="ux" />} />
          <Route path="/ux/:slug" element={<CaseStudy track="ux" />} />
          <Route path="/software-engineering" element={<TrackLanding track="swe" />} />
          <Route path="/software-engineering/:slug" element={<CaseStudy track="swe" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}
