const Step = ({ state, field, muted }) => (
  <div className="lc-step">
    <span className={`lc-state ${muted ? 'muted' : ''}`}>{state}</span>
    <span className="lc-field">{field}</span>
  </div>
);
const Arrow = () => <span className="lc-arrow" aria-hidden="true">→</span>;

export default function Lifecycle() {
  return (
    <div className="lifecycle">
      <Step state="pending" field="scheduledFor" />
      <Arrow />
      <Step state="sent" field="notificationSentAt" />
      <Arrow />
      <Step state="opened" field="openedAt · openLatencySeconds" />
      <div className="lc-branch">
        <Arrow />
        <div className="lc-ends">
          <Step state="answered" field="answeredAt · responseLatencySeconds" />
          <Step state="ignored" field="ignoredAt" muted />
        </div>
      </div>
    </div>
  );
}
