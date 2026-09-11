type Props = { value: string; label: string };
export function StatCounter({ value, label }: Props) { return <div className="stat"><strong>{value}</strong><span>{label}</span></div>; }
