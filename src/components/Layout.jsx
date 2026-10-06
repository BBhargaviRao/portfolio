import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { profile, tracks } from '../data/site.js';

function currentTrack(pathname) {
  if (pathname.startsWith('/ux')) return 'ux';
  if (pathname.startsWith('/software-engineering')) return 'swe';
  return null;
}

export default function Layout() {
  const { pathname } = useLocation();
  const track = currentTrack(pathname);
  const base = import.meta.env.BASE_URL;

  return (
    <div className="site" data-track={track || 'home'}>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand">{profile.name}</Link>
          <nav className="nav" aria-label="Main">
            <NavLink to="/ux">UX / Research</NavLink>
            <NavLink to="/software-engineering">Engineering</NavLink>
            {track && (
              <a href={base + tracks[track].resume} target="_blank" rel="noreferrer" className="nav-resume">
                Resume
              </a>
            )}
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>{profile.name} · {profile.location}</span>
          <span className="footer-links">
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
