import { Link } from 'react-router-dom';

const asset = (p) => (p ? import.meta.env.BASE_URL + p : null);

export default function ProjectCard({ slug, project, track, trackPath, cta }) {
  const view = project[track];
  const c = view.card;
  const href = `${trackPath}/${slug}`;

  return (
    <article className="card">
      <div className="card-body">
        <h3 className="card-title">
          <Link to={href}>{project.title}</Link>
        </h3>
        <p className="card-oneliner">{view.oneLiner}</p>

        {track === 'ux' ? (
          <dl className="card-facts">
            <dt>Problem</dt><dd>{c.problem}</dd>
            <dt>Users</dt><dd>{c.users}</dd>
            <dt>My role</dt><dd>{c.role}</dd>
            <dt>Methods</dt><dd>{c.methods}</dd>
            <dt>Outcome</dt><dd className="strong">{c.outcome}</dd>
          </dl>
        ) : (
          <>
            <dl className="card-facts">
              <dt>My role</dt><dd>{c.role}</dd>
            </dl>
            <ul className="chips" aria-label="Tech stack">
              {c.stack.map((s) => <li key={s}>{s}</li>)}
            </ul>
            <ul className="card-highlights">
              {c.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </>
        )}

        <Link to={href} className="card-cta">{cta} →</Link>
      </div>
      {track === 'ux' && project.cover && (
        <Link to={href} className="card-media" tabIndex={-1} aria-hidden="true">
          <img src={asset(project.cover)} alt="" loading="lazy" />
        </Link>
      )}
    </article>
  );
}
