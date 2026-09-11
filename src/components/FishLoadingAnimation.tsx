import type { CSSProperties } from 'react';
import { assetPath } from '@/src/lib/assetPath';

const frames = ['loading_00_percent.png', 'loading_10_percent.png', 'loading_25_percent.png', 'loading_50_percent.png', 'loading_75_percent.png', 'loading_90_percent.png', 'loading_100_percent.png', 'loading_complete.png', 'loading_ready.png'];

export function FishLoadingAnimation() {
  return <div className="fish-loader" aria-label="Animated Konnektoren fish">
    {frames.map((frame, index) => <img key={frame} src={assetPath(`/images/konnektoren_fish_loading_animation/${frame}`)} style={{ '--frame-index': index } as CSSProperties} alt="" aria-hidden="true" />)}
  </div>;
}
