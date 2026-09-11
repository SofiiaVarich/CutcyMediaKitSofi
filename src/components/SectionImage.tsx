type Props = { src: string; alt: string; caption?: string };
export function SectionImage({ src, alt, caption }: Props) { return <figure className="section-image"><img src={src} alt={alt} loading="lazy" />{caption && <figcaption>{caption}</figcaption>}</figure>; }
