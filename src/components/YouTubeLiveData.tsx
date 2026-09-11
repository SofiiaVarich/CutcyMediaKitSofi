'use client';

import { useEffect, useState } from 'react';

type Video = { id: { videoId: string }; snippet: { title: string; publishedAt: string; thumbnails: { medium: { url: string } } } };
type ChannelResponse = { items?: { id: string; statistics: { subscriberCount?: string } }[] };
type SearchResponse = { items?: Video[] };

export function YouTubeLiveData() {
  const [subscriberCount, setSubscriberCount] = useState<string | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);
  const [error, setError] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  useEffect(() => {
    if (!apiKey) { setError(true); return; }
    const load = async () => {
      try {
        const channelResponse = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&forHandle=%40KonnektorenHelp&key=${apiKey}`);
        if (!channelResponse.ok) throw new Error('Channel request failed');
        const channel = await channelResponse.json() as ChannelResponse;
        const channelItem = channel.items?.[0];
        if (!channelItem) throw new Error('Channel not found');
        setSubscriberCount(channelItem.statistics.subscriberCount || null);
        const videoResponse = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelItem.id}&order=date&type=video&maxResults=6&key=${apiKey}`);
        if (!videoResponse.ok) throw new Error('Video request failed');
        const latest = await videoResponse.json() as SearchResponse;
        setVideos(latest.items || []);
      } catch { setError(true); }
    };
    void load();
  }, [apiKey]);

  return <div className="youtube-live-data"><div className="live-stat"><strong>{subscriberCount ? Number(subscriberCount).toLocaleString() : '—'}</strong><span>YouTube subscribers</span></div>{videos.length > 0 && <div className="video-grid">{videos.map((video) => <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} key={video.id.videoId}><img src={video.snippet.thumbnails.medium.url} alt="" /><span>{video.snippet.title}</span></a>)}</div>}{error && <p className="small-note">Add `NEXT_PUBLIC_YOUTUBE_API_KEY` to `.env.local` to load live YouTube data locally.</p>}</div>;
}
