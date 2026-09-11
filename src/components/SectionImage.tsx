import { assetPath } from '@/src/lib/assetPath';

type Props = { src: string; alt: string; caption?: string };
export function SectionImage({ src, alt, caption }: Props) { return <figure className="section-image"><img src={assetPath(src)} alt={alt} loading="lazy" />{caption && <figcaption>{caption}</figcaption>}</figure>; }
