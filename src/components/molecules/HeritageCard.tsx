import Link from "next/link";
import Image from "../atoms/Image";
import Typography from "../atoms/Typography";

type HeritageCardProps = {
  title: string;
  location: string;
  description: string;
  image: string;
  slug: string;
};

export default function HeritageCard({
  title,
  location,
  description,
  image,
  slug,
}: HeritageCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={`${title} in ${location}`}
          className="h-60 transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span aria-hidden="true">📍</span>
          <span>{location}</span>
        </div>

        {/* Title */}
        <h3 className="mt-3 text-2xl font-bold text-gray-900">
          {title}
        </h3>

        {/* Description */}
        <Typography className="mt-3 line-clamp-3">
          {description}
        </Typography>

        {/* Explore Button */}
        <Link
          href={`/explore/${slug}`}
          className="mt-5 inline-flex items-center gap-2 rounded-lg font-semibold text-green-700 transition hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
        >
          Explore destination

          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}