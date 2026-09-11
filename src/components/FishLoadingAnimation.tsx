import type { CSSProperties } from 'react';

const frames = ['banana_cat', 'broccoli_cat', 'capybara_orange_hat', 'cherries_pink_bow', 'chick_heart_sunglasses', 'croissant_puppy', 'dachshund_sunglasses', 'disco_ball_pink_bow', 'doodle_heart_outline', 'duck_pink_bonnet', 'frog_crown_bow', 'goldfish_green_sneakers', 'goldfish_headphones', 'goose_pink_bow', 'hedgehog_orange_bow', 'kitten_pink_teacup', 'orange_puppy_fruit', 'panda_pink_hood', 'penguin_pink_scarf', 'pink_axolotl'];

export function FishLoadingAnimation() {
  return <div className="fish-loader" aria-label="Animated Konnektoren fish">
    {frames.map((frame, index) => <img key={frame} src={`/images/cute_media_kit_assets_no bg/${frame}.png`} style={{ '--frame-index': index } as CSSProperties} alt="" aria-hidden="true" />)}
  </div>;
}
