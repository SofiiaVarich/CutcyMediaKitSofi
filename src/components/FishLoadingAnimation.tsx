import type { CSSProperties } from 'react';

const frames = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '98', '99', '100'];

export function FishLoadingAnimation() {
  return <div className="fish-loader" aria-label="Animated Konnektoren fish">
    {frames.map((frame, index) => <img key={frame} src={`/images/fish_loading_frames/${frame}_percent.png`} style={{ '--frame-index': index } as CSSProperties} alt="" aria-hidden="true" />)}
        <img src="/images/fish_loading_frames/final_jump.png" style={{ '--frame-index': 23 } as CSSProperties} alt="" aria-hidden="true" />
        <img src="/images/fish_loading_frames/ready_love_you_sofi.png" style={{ '--frame-index': 24 } as CSSProperties} alt="" aria-hidden="true" />
  </div>;
}
