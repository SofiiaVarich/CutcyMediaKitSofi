import { mediaKit } from '@/src/data/mediaKit';
import { EditorialHeading } from '@/src/components/EditorialHeading';
import { AssetButton } from '@/src/components/AssetButton';
export function Collaboration() { return <section id="collaboration" className="section collaboration"><EditorialHeading eyebrow="Let’s connect" title="Let’s create something useful." /><ul>{mediaKit.collaboration.map((item) => <li key={item}>{item}</li>)}</ul><AssetButton href="mailto:hello@konnektoren.blog" src="/images/buttons kollection /button_send_message_paper_plane.png" alt="Send a message" label="Start a conversation" /></section>; }
