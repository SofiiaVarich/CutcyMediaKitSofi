import { assetPath } from '@/src/lib/assetPath';

type Props = { href: string; src: string; alt: string; label: string };

export function AssetButton({ href, src, alt, label }: Props) {
  return <a className="asset-button" href={href} aria-label={label}><img src={assetPath(src)} alt={alt} /></a>;
}
