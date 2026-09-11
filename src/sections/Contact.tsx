import { mediaKit } from '@/src/data/mediaKit';
import { EditorialHeading } from '@/src/components/EditorialHeading';
export function Contact() { return <section className="section contact"><EditorialHeading eyebrow="Find us online" title="Keep in touch with Konnektoren." /><div className="links"><a href={mediaKit.youtubeUrl}>YouTube ↗</a><a href={mediaKit.blogUrl}>Blog ↗</a><a href="mailto:hello@konnektoren.blog">Email ↗</a></div></section>; }
