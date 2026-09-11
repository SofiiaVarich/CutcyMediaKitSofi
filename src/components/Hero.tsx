import { mediaKit } from '@/src/data/mediaKit';
import { ImageCollage } from './ImageCollage';
import { FishLoadingAnimation } from './FishLoadingAnimation';
import { AssetButton } from './AssetButton';
export function Hero() { return <section className="hero"><div><span className="eyebrow">Media kit · 2026</span><h1>{mediaKit.name}</h1><p>{mediaKit.tagline}</p><AssetButton href="#collaboration" src="/images/buttons kollection /button_get_in_touch_ticket.png" alt="Get in touch" label="Work with us" /><FishLoadingAnimation /></div><ImageCollage /></section>; }
