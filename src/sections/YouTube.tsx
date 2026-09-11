import { mediaKit } from '@/src/data/mediaKit';
import { EditorialHeading } from '@/src/components/EditorialHeading';
import { SectionImage } from '@/src/components/SectionImage';
import { AssetButton } from '@/src/components/AssetButton';
import { YouTubeLiveData } from '@/src/components/YouTubeLiveData';

const visuals = [
  ['/images/buttons kollection /button_subscribe_pink_fur.png', 'Subscribe to KonnektorenHelp'],
  ['/images/buttons kollection /button_watch_video_holographic.png', 'Watch Konnektoren videos'],
  ['/images/konnektoren_overrealistic_assets/coffee_you_can_do_this.png', 'Keep learning'],
];

export function YouTube() {
  return <section className="section youtube-section"><EditorialHeading eyebrow="YouTube · @KonnektorenHelp" title="Learn German with us on video." intro="Educational videos, practical explanations, and friendly learning moments for the Konnektoren community." /><div className="youtube-layout"><SectionImage src={visuals[0][0]} alt={visuals[0][1]} caption="Subscribe to follow new lessons and ideas." /><div className="youtube-actions"><YouTubeLiveData /><AssetButton href={mediaKit.youtubeSubscribeUrl} src="/images/buttons kollection /button_subscribe_pink_fur.png" alt="Subscribe" label="Subscribe on YouTube" /><AssetButton href={mediaKit.youtubeVideosUrl} src="/images/buttons kollection /button_watch_video_holographic.png" alt="Watch video" label="See latest videos" /><p className="small-note">Live subscriber and video data loads when `NEXT_PUBLIC_YOUTUBE_API_KEY` is configured.</p></div></div></section>;
}
