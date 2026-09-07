import NextImage from "next/image";

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
  return (
    <NextImage
      src={src}
      alt={alt}
      width={1200}
      height={800}
      className={`w-full object-cover ${className}`}
    />
  );
}