import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const destinations = {
  "hundred-islands": {
    title: "Hundred Islands",
    location: "Alaminos City, Pangasinan",
    category: "Natural Heritage",
    image: "/pangasinan-heritage/images/hundred-islands.jpg",
    description:
      "Hundred Islands is one of Pangasinan's most recognizable natural attractions. It features numerous islands and islets surrounded by clear coastal waters and distinctive limestone formations.",
    highlights: [
      "Beautiful island landscapes",
      "Limestone formations",
      "Coastal scenery",
      "Popular destination in Pangasinan",
    ],
  },

  "bolinao-lighthouse": {
    title: "Bolinao Lighthouse",
    location: "Bolinao, Pangasinan",
    category: "Historical Landmark",
    image: "/pangasinan-heritage/images/bolinao-lighthouse.jpg",
    description:
      "Bolinao Lighthouse is one of the notable landmarks of Bolinao. Its elevated location provides visitors with scenic views of the surrounding coastline and the West Philippine Sea.",
    highlights: [
      "Historic landmark",
      "Scenic coastal views",
      "Iconic Bolinao destination",
      "Photography spot",
    ],
  },

  "balungao-hot-spring": {
    title: "Balungao Hot Spring",
    location: "Balungao, Pangasinan",
    category: "Natural Attraction",
    image: "/pangasinan-heritage/images/balungao-hot-spring.jpg",
    description:
      "Balungao Hot Spring is a popular natural attraction where visitors can relax and enjoy its refreshing waters while experiencing the peaceful surroundings of Balungao.",
    highlights: [
      "Natural hot spring",
      "Relaxing environment",
      "Nature experience",
      "Popular local attraction",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(destinations).map(
    (slug) => ({
      slug,
    })
  );
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const destination =
    destinations[
      slug as keyof typeof destinations
    ];

  if (!destination) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

          <Link
            href="/"
            className="text-xl font-bold text-green-800"
          >
            Pangasinan Heritage
          </Link>

          <Link
            href="/#heritage"
            className="font-medium text-gray-600 transition hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            ← Back to Explore
          </Link>

        </div>
      </header>

      {/* Hero Image */}
      <section className="relative">

        <Image
          src={destination.image}
          alt={destination.title}
          width={1600}
          height={900}
          className="h-[45vh] w-full object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-end">

          <div className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">

            <span className="rounded-full bg-amber-400 px-4 py-2 text-sm font-bold text-gray-900">
              {destination.category}
            </span>

            <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              {destination.title}
            </h1>

            <p className="mt-3 flex items-center gap-2 text-lg text-white">
              📍 {destination.location}
            </p>

          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">

          {/* Description */}
          <div className="lg:col-span-2">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              About the Destination
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Discover {destination.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              {destination.description}
            </p>

          </div>

          {/* Highlights */}
          <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

            <h2 className="text-xl font-bold text-gray-900">
              Highlights
            </h2>

            <ul className="mt-5 space-y-4">

              {destination.highlights.map(
                (highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-gray-600"
                  >
                    <span
                      className="text-green-700"
                      aria-hidden="true"
                    >
                      ✓
                    </span>

                    <span>
                      {highlight}
                    </span>
                  </li>
                )
              )}

            </ul>

          </aside>

        </div>
      </section>

      {/* Explore More */}
      <section className="px-4 pb-16 text-center">

        <Link
          href="/#heritage"
          className="inline-flex rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
        >
          ← Explore More Destinations
        </Link>

      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-4 py-8 text-center text-gray-300">

        <p className="font-semibold text-white">
          Pangasinan Heritage Digital Showcase
        </p>

        <p className="mt-2 text-sm">
          Promoting cultural awareness and
          tourism in Pangasinan.
        </p>

      </footer>

    </main>
  );
}