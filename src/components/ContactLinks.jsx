import { profile } from '../data/site.js';

export default function ContactLinks({ resume, resumeLabel = 'Resume (PDF)' }) {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="contact-links">
      {resume && (
        <a className="btn" href={base + resume} target="_blank" rel="noreferrer">{resumeLabel}</a>
      )}
      <a className="btn btn-ghost" href={`mailto:${profile.email}`}>Email</a>
      <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
    </div>
  );
}
