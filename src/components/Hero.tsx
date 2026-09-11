import { mediaKit } from '@/src/data/mediaKit';
import { ImageCollage } from './ImageCollage';
import { AssetButton } from './AssetButton';
import { MagicLoader } from './MagicLoader';
export function Hero() { return <section className="hero"><div className="hero-copy"><span className="eyebrow">Media kit · 2026</span><h1>{mediaKit.name}</h1><p>{mediaKit.tagline}</p><AssetButton href="#collaboration" src="/images/konnektoren_button_assets_30/10_get_in_touch.png" alt="Get in touch" label="Work with us" /></div><ImageCollage /><div className="fish-stage"><MagicLoader /></div></section>; }
