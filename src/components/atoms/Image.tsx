type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function Image({
  src,
  alt,
  className = "",
}: ImageProps) {
  const imageSrc =
    process.env.NODE_ENV === "production" && src.startsWith("/")
      ? `/pangasinan-heritage${src}`
      : src;

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`w-full object-cover ${className}`}
    />
  );
}