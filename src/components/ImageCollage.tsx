const images = [
  ['/images/konnektoren_overrealistic_assets/banana_sunglasses.png', 'Banana with sunglasses'],
  ['/images/konnektoren_media_kit_objects/heart_gem.png', 'Gem heart'],
  ['/images/konnektoren_overrealistic_cute_assets/pink_star.png', 'Pink star'],
  ['/images/konnektoren_media_kit_objects/butterfly_neon.png', 'Neon butterfly'],
  ['/images/konnektoren_overrealistic_cute_assets/pink_heart_balloon.png', 'Pink heart balloon'],
] as const;

export function ImageCollage() { return <div className="image-collage">{images.map(([src, alt], index) => <img className={`collage-item collage-item-${index + 1}`} key={src} src={src} alt={alt} loading="lazy" />)}</div>; }
