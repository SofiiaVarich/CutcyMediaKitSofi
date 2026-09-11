import type { CSSProperties } from 'react';

const assets = [
  ['/images/konnektoren_overrealistic_assets/banana_sunglasses.png', 'Banana with sunglasses'],
  ['/images/konnektoren_overrealistic_cute_assets/banana_cat.png', 'Banana cat'],
  ['/images/konnektoren_media_kit_objects/butterfly_glitter.png', 'Glitter butterfly'],
  ['/images/konnektoren_media_kit_objects/heart_crystal.png', 'Crystal heart'],
  ['/images/konnektoren_overrealistic_assets/coffee_you_can_do_this.png', 'Coffee encouragement'],
  ['/images/konnektoren_overrealistic_cute_assets/pink_mochi_seal.png', 'Pink mochi seal'],
  ['/images/konnektoren_media_kit_objects/ribbon_heart.png', 'Ribbon heart'],
  ['/images/konnektoren_overrealistic_cute_assets/penguin_pink_scarf.png', 'Penguin with pink scarf'],
  ['/images/konnektoren_overrealistic_assets/disco_ball_pink_bow.png', 'Disco ball'],
  ['/images/konnektoren_media_kit_objects/sparkles_large.png', 'Large sparkles'],
  ['/images/konnektoren_overrealistic_cute_assets/strawberry_kitten.png', 'Strawberry kitten'],
  ['/images/konnektoren_media_kit_objects/cloud_heart.png', 'Cloud heart'],
] as const;

export function AssetGallery() {
  return <div className="asset-gallery" aria-label="Konnektoren visual asset gallery">
    {assets.map(([src, alt], index) => <div className="asset-card" style={{ '--delay': `${index * 90}ms` } as CSSProperties} key={src}>
      <img src={src} alt={alt} loading="lazy" />
    </div>)}
  </div>;
}
