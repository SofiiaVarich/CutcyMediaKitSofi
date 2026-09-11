type Props = { eyebrow?: string; title: string; intro?: string };
export function EditorialHeading({ eyebrow, title, intro }: Props) { return <header className="editorial-heading">{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{intro && <p>{intro}</p>}</header>; }
