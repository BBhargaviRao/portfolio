export default function ProofStrip({ items }) {
  if (!items?.length) return null;
  return (
    <ul className="proof">
      {items.map((p) => (
        <li key={p.label}>
          <span className="proof-value">{p.value}</span>
          <span className="proof-label">{p.label}</span>
        </li>
      ))}
    </ul>
  );
}
