import { mediaKit } from '@/src/data/mediaKit';
import { EditorialHeading } from '@/src/components/EditorialHeading';
import { StatCounter } from '@/src/components/StatCounter';
export function Numbers() { return <section className="section numbers"><EditorialHeading eyebrow="At a glance" title="A growing place to connect." /><div className="stats">{mediaKit.stats.map((stat) => <StatCounter key={stat.label} {...stat} />)}</div></section>; }
