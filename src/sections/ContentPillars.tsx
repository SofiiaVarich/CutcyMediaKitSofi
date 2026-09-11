import { mediaKit } from '@/src/data/mediaKit';
import { EditorialHeading } from '@/src/components/EditorialHeading';
export function ContentPillars() { return <section className="section"><EditorialHeading eyebrow="Content pillars" title="Useful content with personality." /><div className="pillars">{mediaKit.pillars.map((pillar, index) => <div key={pillar}><small>0{index + 1}</small><h3>{pillar}</h3></div>)}</div></section>; }
