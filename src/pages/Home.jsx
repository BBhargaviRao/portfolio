import { Link } from 'react-router-dom';
import { profile, tracks } from '../data/site.js';
import ContactLinks from '../components/ContactLinks.jsx';

export default function Home() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="container home">
      <section className="home-hero">
        <h1>{profile.name}</h1>
        <p className="lede">{profile.homeHeadline}</p>
        <p className="muted-text">{profile.homeSummary}</p>
      </section>

      <section className="paths" aria-label="Choose a portfolio">
        {['ux', 'swe'].map((k) => {
          const t = tracks[k];
          return (
            <Link key={k} to={t.path} className={`path path-${k}`}>
              <span className="path-label">{t.label}</span>
              <span className="path-blurb">{t.homeBlurb}</span>
              <span className="path-cta">{t.homeCta} →</span>
            </Link>
          );
        })}
      </section>

      <section className="home-links">
        <ContactLinks />
        <p className="small">
          Resumes:{' '}
          <a href={base + tracks.ux.resume} target="_blank" rel="noreferrer">UX / Research</a>
          {' · '}
          <a href={base + tracks.swe.resume} target="_blank" rel="noreferrer">Software Engineering</a>
        </p>
      </section>
    </div>
  );
}
