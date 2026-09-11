import { mediaKit } from '@/src/data/mediaKit';
import { EditorialHeading } from '@/src/components/EditorialHeading';
import { AssetGallery } from '@/src/components/AssetGallery';
export function Creator() { return <section className="section tinted"><EditorialHeading eyebrow="Formats" title="Made for watching, reading, and doing." /><div className="tag-list">{mediaKit.formats.map((format) => <span key={format}>{format}</span>)}</div><AssetGallery /></section>; }
