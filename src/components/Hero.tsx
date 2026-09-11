import { mediaKit } from '@/src/data/mediaKit';
import { ImageCollage } from './ImageCollage';
import { FishLoadingAnimation } from './FishLoadingAnimation';
export function Hero() { return <section className="hero"><div><span className="eyebrow">Media kit · 2026</span><h1>{mediaKit.name}</h1><p>{mediaKit.tagline}</p><a className="button" href="#collaboration">Work with us</a><FishLoadingAnimation /></div><ImageCollage /></section>; }
