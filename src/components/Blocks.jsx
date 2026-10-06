import Diagram from './Diagrams.jsx';
import ProofStrip from './ProofStrip.jsx';

const asset = (p) => import.meta.env.BASE_URL + p;
const H = ({ children }) => (children ? <h2 className="block-heading">{children}</h2> : null);

function Block({ b }) {
  switch (b.type) {
    case 'text':
      return (
        <section className="block prose">
          <H>{b.heading}</H>
          {b.body.map((p, i) => <p key={i}>{p}</p>)}
        </section>
      );
    case 'bullets':
      return (
        <section className="block prose">
          <H>{b.heading}</H>
          <ul>{b.items.map((t, i) => <li key={i}>{t}</li>)}</ul>
        </section>
      );
    case 'steps':
      return (
        <section className="block">
          <H>{b.heading}</H>
          <ol className="steps">
            {b.items.map((s, i) => (
              <li key={i}><strong>{s.title}.</strong> {s.body}</li>
            ))}
          </ol>
        </section>
      );
    case 'insights':
      return (
        <section className="block">
          <H>{b.heading}</H>
          <div className="stack">
            {b.items.map((it, i) => (
              <div key={i} className="triad">
                <p className="triad-lead">{it.insight}</p>
                <dl>
                  <dt>Evidence</dt><dd>{it.evidence}</dd>
                  <dt>Design implication</dt><dd>{it.implication}</dd>
                </dl>
              </div>
            ))}
          </div>
        </section>
      );
    case 'response':
      return (
        <section className="block">
          <H>{b.heading}</H>
          <div className="stack">
            {b.items.map((it, i) => (
              <div key={i} className="flow-row">
                <div><span className="flow-label">Finding</span>{it.finding}</div>
                <div className="flow-arrow" aria-hidden="true">→</div>
                <div><span className="flow-label">Decision</span>{it.decision}</div>
                <div className="flow-arrow" aria-hidden="true">→</div>
                <div><span className="flow-label">Why it mattered</span>{it.why}</div>
              </div>
            ))}
          </div>
        </section>
      );
    case 'challenges':
      return (
        <section className="block">
          <H>{b.heading}</H>
          <div className="stack">
            {b.items.map((c, i) => (
              <div key={i} className="challenge">
                <h3>{c.title}</h3>
                <dl>
                  <dt>Problem</dt><dd>{c.problem}</dd>
                  <dt>Constraint</dt><dd>{c.constraint}</dd>
                  <dt>Decision</dt><dd>{c.decision}</dd>
                  <dt>Implementation</dt><dd>{c.implementation}</dd>
                  <dt>Result</dt><dd className="strong">{c.result}</dd>
                </dl>
              </div>
            ))}
          </div>
        </section>
      );
    case 'decisions':
      return (
        <section className="block">
          <H>{b.heading}</H>
          <div className="decisions">
            {b.items.map((d, i) => (
              <div key={i}><h3>{d.title}</h3><p>{d.body}</p></div>
            ))}
          </div>
        </section>
      );
    case 'compare':
      return (
        <section className="block">
          <H>{b.heading}</H>
          <div className="table-wrap">
            <table className="compare">
              <thead><tr>{b.columns.map((c) => <th key={c}>{c}</th>)}</tr></thead>
              <tbody>
                {b.rows.map((r, i) => (
                  <tr key={i}>{r.map((cell, j) => <td key={j} data-label={b.columns[j]}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      );
    case 'metrics':
      return (
        <section className="block">
          <H>{b.heading}</H>
          <ProofStrip items={b.items} />
          {b.note && <p className="note">{b.note}</p>}
        </section>
      );
    case 'figure':
      return (
        <figure className={`block figure ${b.wide ? 'wide' : ''}`}>
          <img src={asset(b.src)} alt={b.alt} loading="lazy" />
          <figcaption>{b.caption}</figcaption>
        </figure>
      );
    case 'diagram':
      return (
        <figure className="block figure">
          <Diagram name={b.name} />
          {b.caption && <figcaption>{b.caption}</figcaption>}
        </figure>
      );
    case 'quote':
      return (
        <blockquote className="block quote">
          <p>"{b.text}"</p>
          <cite>{b.source}</cite>
        </blockquote>
      );
    case 'placeholder':
      // Only visible while running locally, so gaps never ship to the live site.
      return import.meta.env.DEV ? <div className="block placeholder">{b.text}</div> : null;
    default:
      return null;
  }
}

export default function Blocks({ sections }) {
  return sections.map((b, i) => <Block key={i} b={b} />);
}
