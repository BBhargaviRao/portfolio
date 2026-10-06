import { Link, Navigate, useParams } from 'react-router-dom';
import { tracks } from '../data/site.js';
import { projects } from '../data/projects.js';
import ProofStrip from '../components/ProofStrip.jsx';
import Blocks from '../components/Blocks.jsx';

export default function CaseStudy({ track }) {
  const { slug } = useParams();
  const t = tracks[track];
  const project = projects[slug];
  const view = project?.[track];
  if (!view) return <Navigate to={t.path} replace />;

  const otherKey = track === 'ux' ? 'swe' : 'ux';
  const otherView = project[otherKey];
  const order = t.order.filter((s) => projects[s]?.[track] && !projects[s].draft);
  const next = order[(order.indexOf(slug) + 1) % order.length];
  const h = view.hero;

  return (
    <article className="container case">
      <Link to={t.path} className="back">← All {track === 'ux' ? 'case studies' : 'engineering work'}</Link>

      <header className="case-hero">
        <p className="eyebrow">{project.title}</p>
        <h1>{h.question}</h1>
        <p className="lede-sm">{h.intro}</p>
        <ProofStrip items={h.proof} />
        <dl className="meta">
          {h.meta.map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
          {project.links?.length > 0 && (
            <div>
              <dt>Links</dt>
              <dd>{project.links.map((l) => <a key={l.url} href={l.url} target="_blank" rel="noreferrer">{l.label}</a>)}</dd>
            </div>
          )}
        </dl>
      </header>

      <div className="case-body">
        <Blocks sections={view.sections} />
      </div>

      <footer className="case-footer">
        {otherView && (
          <p>
            Same project, other lens:{' '}
            <Link to={`${tracks[otherKey].path}/${slug}`}>
              read the {otherKey === 'swe' ? 'engineering' : 'UX and research'} case study →
            </Link>
          </p>
        )}
        {next && next !== slug && (
          <p>Next: <Link to={`${t.path}/${next}`}>{projects[next].title} →</Link></p>
        )}
      </footer>
    </article>
  );
}
