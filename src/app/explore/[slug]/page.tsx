import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const basePath =
  process.env.NODE_ENV === "production"
    ? "/pangasinan-heritage"
    : "";

const destinations = {
  "hundred-islands": {
    title: "Hundred Islands",
    location: "Alaminos City, Pangasinan",
    category: "Natural Heritage",
    bestFor: "Sightseeing & Island Exploration",
    image: `${basePath}/images/hundred-islands.jpg`,
    description:
      "Hundred Islands is one of Pangasinan's most recognizable natural attractions. It features numerous islands and islets surrounded by clear coastal waters and distinctive limestone formations.",
    about:
      "Located in Alaminos City, Hundred Islands is known for its beautiful coastal scenery and unique island formations. The destination offers visitors an opportunity to experience the natural beauty of Pangasinan while learning more about one of the province's most famous attractions.",
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
    bestFor: "Sightseeing & Photography",
    image: `${basePath}/images/bolinao-lighthouse.jpg`,
    description:
      "Bolinao Lighthouse is one of the notable landmarks of Bolinao. Its elevated location provides visitors with scenic views of the surrounding coastline and the West Philippine Sea.",
    about:
      "The Bolinao Lighthouse is an important historical landmark in Pangasinan. Built as a navigational aid, the lighthouse has become a recognizable symbol of Bolinao and an interesting destination for visitors exploring the province's history and coastline.",
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
    bestFor: "Relaxation & Nature Experience",
    image: `${basePath}/images/balungao-hot-spring.jpg`,
    description:
      "Balungao Hot Spring is a popular natural attraction where visitors can relax and enjoy its refreshing waters while experiencing the peaceful surroundings of Balungao.",
    about:
      "Balungao Hot Spring is a well-known natural attraction located near the foot of Mount Balungao. Its warm waters and natural surroundings make it a relaxing destination for visitors looking for a peaceful outdoor experience in Pangasinan.",
    highlights: [
      "Natural hot spring",
      "Relaxing environment",
      "Nature experience",
      "Popular local attraction",
    ],
  },

  "manaoag-church": {
    title: "Manaoag Church",
    location: "Manaoag, Pangasinan",
    category: "Religious Heritage",
    bestFor: "Pilgrimage & Cultural Experience",
    image: `${basePath}/images/manaoag-church.jpg`,
    description:
      "The Basilica of Our Lady of the Rosary of Manaoag is one of the most recognized religious landmarks in Pangasinan. It is an important destination for visitors interested in the province's religious and cultural heritage.",
    about:
      "Located in the municipality of Manaoag, the Basilica is an important religious and cultural landmark in Pangasinan. It attracts pilgrims and visitors who want to experience the province's religious traditions, history, and architectural heritage.",
    highlights: [
      "Historic religious landmark",
      "Important cultural heritage site",
      "Known pilgrimage destination",
      "Beautiful church architecture",
    ],
  },

  "pangasinan-provincial-capitol": {
    title: "Pangasinan Provincial Capitol",
    location: "Lingayen, Pangasinan",
    category: "Historical Landmark",
    bestFor: "History & Architecture",
    image: `${basePath}/images/pangasinan-capitol.jpg`,
    description:
      "The Pangasinan Provincial Capitol is a significant landmark in Lingayen and serves as an important symbol of the province's history, government, and heritage.",
    about:
      "Located in Lingayen, the Pangasinan Provincial Capitol is an important landmark representing the province's political and historical development. Its architecture and location make it a notable part of Pangasinan's heritage landscape.",
    highlights: [
      "Historic government landmark",
      "Located in Lingayen",
      "Important provincial heritage site",
      "Notable architectural landmark",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(destinations).map((slug) => ({
    slug,
  }));
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const destination =
    destinations[slug as keyof typeof destinations];

  if (!destination) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center px-4 py-4 sm:px-6 lg:px-8">

          <Link
            href="/"
            aria-label="Go to Pangasinan Heritage home page"
            className="text-xl font-bold text-green-800"
          >
            Pangasinan Heritage
          </Link>

        </div>
      </header>

      {/* Hero */}
      <section className="relative">

        <Image
          src={destination.image}
          alt={`${destination.title} in ${destination.location}`}
          width={1600}
          height={900}
          className="h-[45vh] w-full object-cover"
          priority
        />

        <div
          className="absolute inset-0 bg-black/40"
          aria-hidden="true"
        />

        <div className="absolute inset-0 flex items-end">

          <div className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">

            <span className="rounded-full bg-amber-400 px-4 py-2 text-sm font-bold text-gray-900">
              {destination.category}
            </span>

            <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              {destination.title}
            </h1>

            <p className="mt-3 flex items-center gap-2 text-lg text-white">
              <span aria-hidden="true">📍</span>
              {destination.location}
            </p>

          </div>
        </div>
      </section>

      {/* Quick Information */}
      <section
        aria-labelledby="quick-information"
        className="px-4 pt-10 sm:px-6 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

            <h2
              id="quick-information"
              className="text-xl font-bold text-gray-900"
            >
              Quick Information
            </h2>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              <div>
                <p className="text-sm font-semibold text-gray-500">
                  Location
                </p>
                <p className="mt-1 font-medium text-gray-900">
                  {destination.location}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-500">
                  Category
                </p>
                <p className="mt-1 font-medium text-gray-900">
                  {destination.category}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-500">
                  Best For
                </p>
                <p className="mt-1 font-medium text-gray-900">
                  {destination.bestFor}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-500">
                  Province
                </p>
                <p className="mt-1 font-medium text-gray-900">
                  Pangasinan
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* About + Highlights */}
      <section
        aria-labelledby="about-destination"
        className="px-4 py-16 sm:px-6 lg:px-8"
      >

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">

          {/* About */}
          <div className="lg:col-span-2">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              About the Destination
            </p>

            <h2
              id="about-destination"
              className="mt-3 text-3xl font-bold text-gray-900"
            >
              Discover {destination.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              {destination.description}
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              {destination.about}
            </p>

          </div>

          {/* Highlights */}
          <aside
            aria-labelledby="highlights"
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >

            <h2
              id="highlights"
              className="text-xl font-bold text-gray-900"
            >
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

      {/* Why Visit */}
      <section
        aria-labelledby="why-visit"
        className="bg-white px-4 py-16 sm:px-6 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Experience Pangasinan
            </p>

            <h2
              id="why-visit"
              className="mt-3 text-3xl font-bold text-gray-900"
            >
              Why Visit {destination.title}?
            </h2>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-gray-200 bg-slate-50 p-6 text-center">
              <div
                className="text-3xl"
                aria-hidden="true"
              >
                🌿
              </div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Natural Beauty
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Experience the beauty of Pangasinan and its
                unique natural surroundings.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-slate-50 p-6 text-center">
              <div
                className="text-3xl"
                aria-hidden="true"
              >
                📚
              </div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Cultural Value
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Learn about the history, culture, and heritage
                that make Pangasinan unique.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-slate-50 p-6 text-center">
              <div
                className="text-3xl"
                aria-hidden="true"
              >
                📸
              </div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Memorable Experience
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Discover destinations that provide meaningful
                experiences for visitors.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Related Destinations */}
      <section
        aria-labelledby="related-destinations"
        className="px-4 py-16 sm:px-6 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Continue Exploring
            </p>

            <h2
              id="related-destinations"
              className="mt-3 text-3xl font-bold text-gray-900"
            >
              Explore More in Pangasinan
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Discover more natural attractions, historical
              landmarks, and cultural destinations across the province.
            </p>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {Object.entries(destinations)
              .filter(([relatedSlug]) => relatedSlug !== slug)
              .slice(0, 3)
              .map(([relatedSlug, related]) => (

                <Link
                  key={relatedSlug}
                  href={`/explore/${relatedSlug}`}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
                >

                  <Image
                    src={related.image}
                    alt={`${related.title} in ${related.location}`}
                    width={800}
                    height={500}
                    className="h-48 w-full object-cover transition group-hover:scale-105"
                  />

                  <div className="p-5">

                    <p className="text-sm font-semibold text-green-700">
                      {related.category}
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-gray-900">
                      {related.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      📍 {related.location}
                    </p>

                    <span className="mt-4 inline-block font-semibold text-green-700">
                      View Destination →
                    </span>

                  </div>

                </Link>

              ))}

          </div>

        </div>
      </section>

      {/* Navigation */}
      <section className="px-4 pb-16 text-center sm:px-6 lg:px-8">

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            href="/#heritage"
            className="inline-flex rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
          >
            ← Explore More Destinations
          </Link>


        </div>

      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-4 py-8 text-center text-gray-300">

        <p className="font-semibold text-white">
          Pangasinan Heritage Digital Showcase
        </p>

        <p className="mt-2 text-sm">
          Promoting cultural awareness and tourism in Pangasinan.
        </p>

      </footer>

    </main>
  );
}