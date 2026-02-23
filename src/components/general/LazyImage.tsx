export const IMAGE_QUERY = "?w=320;480;768;1024;1600;2200&format=webp";

const IMAGE_SIZES = [320, 480, 768, 1024, 1600, 2200];

const buildSrcSet = (urls: string[]) =>
  urls.map((url, i) => `${url} ${IMAGE_SIZES[i]}w`).join(", ");

const largest = (urls: string[]) => urls[urls.length - 1];

interface LazyImageProps {
  image: string[];
  alt?: string;
  className?: string;
  sizes?: string;
  loading?: "lazy" | "eager";
  onLoad?: () => void;
}

export const LazyImage = ({
  image,
  alt,
  className,
  sizes = "(max-width: 768px) 90vw, 1200px",
  loading = "lazy", //hero should use loading="eager"
  onLoad,
}: LazyImageProps) => {
  return (
    <img
      src={largest(image)}
      srcSet={buildSrcSet(image)}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      onLoad={onLoad}
    />
  );
};
