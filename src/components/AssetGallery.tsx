import type { CSSProperties } from 'react';

const assets = [
  ['/images/cute_media_kit_assets_no bg/banana_cat.png', 'Banana cat'],
  ['/images/cute_media_kit_assets_no bg/broccoli_cat.png', 'Broccoli cat'],
  ['/images/cute_media_kit_assets_no bg/capybara_orange_hat.png', 'Capybara with orange hat'],
  ['/images/cute_media_kit_assets_no bg/cherries_pink_bow.png', 'Cherries with pink bow'],
  ['/images/cute_media_kit_assets_no bg/chick_heart_sunglasses.png', 'Chick with heart sunglasses'],
  ['/images/cute_media_kit_assets_no bg/croissant_puppy.png', 'Croissant puppy'],
  ['/images/cute_media_kit_assets_no bg/dachshund_sunglasses.png', 'Dachshund with sunglasses'],
  ['/images/cute_media_kit_assets_no bg/duck_pink_bonnet.png', 'Duck with pink bonnet'],
  ['/images/cute_media_kit_assets_no bg/frog_crown_bow.png', 'Frog with crown and bow'],
  ['/images/cute_media_kit_assets_no bg/goldfish_headphones.png', 'Goldfish with headphones'],
  ['/images/cute_media_kit_assets_no bg/kitten_pink_teacup.png', 'Kitten with pink teacup'],
  ['/images/cute_media_kit_assets_no bg/penguin_pink_scarf.png', 'Penguin with pink scarf'],
] as const;

export function AssetGallery() {
  return <div className="asset-gallery" aria-label="Konnektoren visual asset gallery">
    {assets.map(([src, alt], index) => <div className="asset-card" style={{ '--delay': `${index * 90}ms` } as CSSProperties} key={src}>
      <img src={src} alt={alt} loading="lazy" />
    </div>)}
  </div>;
}
