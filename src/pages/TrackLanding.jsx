import { Link } from 'react-router-dom';
import { tracks, publications, thesis, profile } from '../data/site.js';
import { projects } from '../data/projects.js';
import ProjectCard from '../components/ProjectCard.jsx';
import ProofStrip from '../components/ProofStrip.jsx';
import ContactLinks from '../components/ContactLinks.jsx';

export default function TrackLanding({ track }) {
  const t = tracks[track];
  const other = tracks[track === 'ux' ? 'swe' : 'ux'];
  const list = t.order.filter((s) => projects[s]?.[track] && !projects[s].draft);

  return (
    <div className="container">
      <section className="track-hero">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{t.headline}</h1>
        {t.summary.map((p, i) => <p key={i} className={i === 0 ? 'lede-sm' : 'muted-text'}>{p}</p>)}
        <ProofStrip items={t.proof} />
        <p className="small availability">{profile.education} · {profile.location}</p>
        <ContactLinks resume={t.resume} />
      </section>

      <section className="section">
        <h2 className="section-title">{track === 'ux' ? 'Selected case studies' : 'Selected engineering work'}</h2>
        <div className="cards">
          {list.map((slug) => (
            <ProjectCard key={slug} slug={slug} project={projects[slug]} track={track} trackPath={t.path} cta={t.caseCta} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">{t.skillsTitle}</h2>
        <div className="skills">
          {t.skills.map((g) => (
            <div key={g.group}>
              <h3>{g.group}</h3>
              <ul>{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      {t.showPublications && (
        <section className="section">
          <h2 className="section-title">Thesis and publications</h2>
          <ul className="pubs">
            <li><strong>{thesis.title}</strong><span>{thesis.detail}</span></li>
            {publications.map((p) => (
              <li key={p.title}>
                <a href={p.url} target="_blank" rel="noreferrer"><strong>{p.title}</strong></a>
                <span>{p.authors} · {p.venue}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="section crosslink">
        <p>
          I also work as a {track === 'ux' ? 'software engineer' : 'UX designer and researcher'}.{' '}
          <Link to={other.path}>See the {other.label.toLowerCase()} portfolio →</Link>
        </p>
      </section>
    </div>
  );
}
