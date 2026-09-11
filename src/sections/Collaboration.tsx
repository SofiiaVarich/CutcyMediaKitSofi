import { mediaKit } from '@/src/data/mediaKit';
import { EditorialHeading } from '@/src/components/EditorialHeading';
import { AssetButton } from '@/src/components/AssetButton';
export function Collaboration() { return <section id="collaboration" className="section collaboration"><EditorialHeading eyebrow="Let’s connect" title="Let’s create something useful." /><ul>{mediaKit.collaboration.map((item) => <li key={item}>{item}</li>)}</ul><AssetButton href="mailto:hello@konnektoren.blog" src="/images/konnektoren_button_assets_30/23_send_message.png" alt="Send a message" label="Start a conversation" /></section>; }
