import { mediaKit } from '@/src/data/mediaKit';
import { EditorialHeading } from '@/src/components/EditorialHeading';
export function Collaboration() { return <section id="collaboration" className="section collaboration"><EditorialHeading eyebrow="Let’s connect" title="Let’s create something useful." /><ul>{mediaKit.collaboration.map((item) => <li key={item}>{item}</li>)}</ul><a className="button" href="mailto:hello@konnektoren.blog">Start a conversation</a></section>; }
