import fallbackImage from '../assets/images/fallback/solar-project-fallback.webp';

export default function LocalImage({
  src,
  alt,
  priority = false,
  width = 1600,
  height = 1200,
  className = '',
  ...props
}) {
  const handleError = (event) => {
    const image = event.currentTarget;

    if (image.dataset.fallbackApplied === 'true') return;

    if (import.meta.env.DEV) {
      console.error(`Unable to load local image: ${src}`);
    }

    image.dataset.fallbackApplied = 'true';
    image.src = fallbackImage;
  };

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      onError={handleError}
      className={className}
      {...props}
    />
  );
}
