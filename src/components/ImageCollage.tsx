const images = [
  ['/images/cute_media_kit_assets_no bg/banana_cat.png', 'Banana cat'],
  ['/images/cute_media_kit_assets_no bg/chick_heart_sunglasses.png', 'Chick with heart sunglasses'],
  ['/images/cute_media_kit_assets_no bg/pink_axolotl.png', 'Pink axolotl'],
  ['/images/cute_media_kit_assets_no bg/disco_ball_pink_bow.png', 'Disco ball with pink bow'],
  ['/images/cute_media_kit_assets_no bg/panda_pink_hood.png', 'Panda with pink hood'],
] as const;

export function ImageCollage() { return <div className="image-collage">{images.map(([src, alt], index) => <img className={`collage-item collage-item-${index + 1}`} key={src} src={src} alt={alt} loading="lazy" />)}</div>; }
