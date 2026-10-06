// Architecture and state diagrams drawn with plain HTML/CSS so they stay sharp,
// responsive, and editable as text. Each diagram is a list of tiers; arrows
// are drawn between tiers.

import Lifecycle from './Lifecycle.jsx';

const diagrams = {
  ktb2: {
    tiers: [
      { label: 'Clients (Flutter)', boxes: [
        { title: 'Parent app', lines: ['Create session: duration, tasks', 'Approve / deny early end', 'Shared dashboard, nudges'] },
        { title: 'Child app', lines: ['Choose allowed apps', 'Request early end', 'Mood check-in, nudges'] },
      ] },
      { label: 'Native enforcement (child device)', boxes: [
        { title: 'iOS · Swift', lines: ['Family Controls', 'Managed Settings', 'DeviceActivity extensions'] },
        { title: 'Android / Fire OS · Kotlin', lines: ['UsageStats', 'App-blocking service'] },
      ], note: 'via Flutter platform channels' },
      { label: 'Data', boxes: [
        { title: 'Firestore family space', lines: ['Accounts and roles', 'Sessions and state', 'Nudges, tasks, moods'] },
      ] },
      { label: 'Backend', boxes: [
        { title: 'Cloud Functions (19)', lines: ['HTTP endpoints', 'Firestore triggers', 'Daily scheduled job'] },
        { title: 'OpenAI GPT-4o-mini', lines: ['Family prompt generation', 'Distress screening → concern alert'], tone: 'muted' },
      ] },
      { label: 'Push', boxes: [
        { title: 'FCM / APNs', lines: ['iPhone, Android'] },
        { title: 'Amazon Device Messaging', lines: ['Fire tablets'] },
      ] },
    ],
  },
  nudgelab: {
    tiers: [
      { label: 'Scheduled backend', boxes: [
        { title: 'generateDailyNudges', lines: ['Pick prompts by role and window', 'Random time inside window', 'Skip if already created'] },
        { title: 'sendScheduledNotifications', lines: ['Find due nudges', 'Look up device token', 'Record notificationSentAt'] },
      ] },
      { label: 'Data', boxes: [
        { title: 'Firestore', lines: ['families/{id}/accounts', 'families/{id}/nudges', 'device_registrations'] },
      ] },
      { label: 'Push', boxes: [
        { title: 'APNs → FCM', lines: ['iPhone, iPad'] },
        { title: 'FCM', lines: ['Android'] },
        { title: 'Amazon Device Messaging', lines: ['Fire tablets'] },
      ] },
      { label: 'Client (Flutter)', boxes: [
        { title: 'Parent / child app', lines: ['Family code + PIN → role', 'Answer, share or keep private', 'Writes openedAt, answeredAt'] },
      ] },
    ],
  },
};

function Tiers({ tiers }) {
  return (
    <div className="diagram">
      {tiers.map((t, i) => (
        <div key={t.label}>
          {i > 0 && <div className="diagram-arrow" aria-hidden="true">↕</div>}
          <div className="tier">
            <div className="tier-label">{t.label}{t.note && <span> · {t.note}</span>}</div>
            <div className="tier-boxes">
              {t.boxes.map((b) => (
                <div key={b.title} className={`dbox ${b.tone || ''}`}>
                  <div className="dbox-title">{b.title}</div>
                  <ul>{b.lines.map((l) => <li key={l}>{l}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Diagram({ name }) {
  if (name === 'lifecycle') return <Lifecycle />;
  const d = diagrams[name];
  return d ? <Tiers tiers={d.tiers} /> : null;
}
