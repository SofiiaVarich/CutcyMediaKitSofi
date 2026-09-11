import type { CSSProperties } from 'react';
import { assetPath } from '@/src/lib/assetPath';

const frames = ['000', '004', '008', '012', '016', '020', '024', '028', '032', '036', '040', '044', '048', '052', '056', '060', '064', '068', '072', '076', '080', '084', '088', '092', '096', '100'];

export function FishZoomAnimation() {
  return <div className="fish-zoom" aria-label="Animated front-facing zooming Konnektoren fish">
    {frames.map((frame, index) => <img key={frame} src={assetPath(`/images/fish_front_zoom_0_to_100/fish_front_zoom_${frame}.png`)} style={{ '--frame-index': index } as CSSProperties} alt="" aria-hidden="true" />)}
  </div>;
}
