type Props = { images: { src: string; alt: string }[] };
export function MediaGallery({ images }: Props) { return <div className="media-gallery">{images.map((image) => <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />)}</div>; }
