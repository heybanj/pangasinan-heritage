import HeaderNavigation from "@/components/organisms/HeaderNavigation";
import HeritageGrid from "@/components/organisms/HeritageGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">

      <HeaderNavigation />

      <main>

        {/* Hero Section */}
        <section className="bg-green-800 px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">

            <div className="max-w-3xl">

              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-200">
                Discover Pangasinan
              </p>

              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Pangasinan Heritage

                <span className="block text-amber-300">
                  Digital Showcase
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-green-50">
                Explore the cultural heritage,
                natural attractions, and iconic
                destinations of Pangasinan.
              </p>

              <div className="mt-8">
                <a
                  href="#heritage"
                  className="inline-block rounded-lg bg-amber-400 px-5 py-3 font-semibold text-gray-900 transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-green-800"
                >
                  Explore Heritage Sites
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Explore Heritage Sites */}
        <HeritageGrid />

        {/* Why Explore Pangasinan */}
<section
  aria-labelledby="why-explore-heading"
  className="bg-green-50 px-4 py-16 sm:px-6 lg:px-8"
>
  <div className="mx-auto max-w-7xl">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
        Why Explore Pangasinan?
      </p>

      <h2
        id="why-explore-heading"
        className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
      >
        Experience History, Nature, and Culture
      </h2>

      <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
        Pangasinan offers diverse destinations where visitors can discover
        natural wonders, historical landmarks, and the rich character of the
        province.
      </p>
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {/* Nature */}
      <div className="rounded-2xl bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl"
          aria-hidden="true"
        >
          🌿
        </div>

        <h3 className="mt-5 text-xl font-bold text-gray-900">
          Natural Wonders
        </h3>

        <p className="mt-3 leading-7 text-gray-600">
          Discover beautiful landscapes, islands, coastlines, and natural
          attractions throughout Pangasinan.
        </p>
      </div>

      {/* History */}
      <div className="rounded-2xl bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-3xl"
          aria-hidden="true"
        >
          🏛️
        </div>

        <h3 className="mt-5 text-xl font-bold text-gray-900">
          Rich Heritage
        </h3>

        <p className="mt-3 leading-7 text-gray-600">
          Learn about historical places and landmarks that help preserve the
          story and identity of Pangasinan.
        </p>
      </div>

      {/* Culture */}
      <div className="rounded-2xl bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl"
          aria-hidden="true"
        >
          🤝
        </div>

        <h3 className="mt-5 text-xl font-bold text-gray-900">
          Local Culture
        </h3>

        <p className="mt-3 leading-7 text-gray-600">
          Appreciate the traditions, communities, and local identity that make
          Pangasinan unique.
        </p>
      </div>
    </div>
  </div>
</section>

        {/* About Section */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="bg-white px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">

            <div className="grid items-center gap-12 lg:grid-cols-2">

              {/* About Content */}
              <div>

                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-700">
                  About the Showcase
                </p>

                <h2
                  id="about-heading"
                  className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
                >
                  Discover the Heritage and
                  Beauty of Pangasinan
                </h2>

                <p className="mt-6 leading-7 text-gray-600">
                  The Pangasinan Heritage Digital
                  Showcase is a digital platform
                  created to promote cultural
                  awareness and tourism throughout
                  the province of Pangasinan.
                </p>

                <p className="mt-4 leading-7 text-gray-600">
                  The platform brings together
                  information about selected heritage
                  and tourism destinations, making it
                  easier for visitors to discover
                  places that represent the natural
                  beauty and cultural character of
                  Pangasinan.
                </p>

                <p className="mt-4 leading-7 text-gray-600">
                  Designed with a mobile-first
                  approach, the showcase provides a
                  simple and accessible experience
                  for users while keeping the
                  information organized and easy to
                  explore.
                </p>

              </div>

              {/* Highlights */}
              <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">

                <div className="rounded-2xl border border-green-100 bg-green-50 p-6">
                  <div
                    className="mb-3 text-3xl"
                    aria-hidden="true"
                  >
                    🏛️
                  </div>

                  <h3 className="text-lg font-bold text-gray-900">
                    Cultural Awareness
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Learn about destinations that
                    showcase the heritage and identity
                    of Pangasinan.
                  </p>
                </div>

                <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">
                  <div
                    className="mb-3 text-3xl"
                    aria-hidden="true"
                  >
                    🌴
                  </div>

                  <h3 className="text-lg font-bold text-gray-900">
                    Tourism Discovery
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Explore notable destinations and
                    discover places worth visiting
                    across the province.
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                  <div
                    className="mb-3 text-3xl"
                    aria-hidden="true"
                  >
                    📱
                  </div>

                  <h3 className="text-lg font-bold text-gray-900">
                    Easy to Explore
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Access organized heritage
                    information through a responsive,
                    mobile-friendly digital experience.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 px-4 py-8 text-center text-gray-300">

        <p className="font-semibold text-white">
          Pangasinan Heritage Digital Showcase
        </p>

        <p className="mt-2 text-sm">
          Promoting cultural awareness and
          tourism in Pangasinan.
        </p>

        <p className="mt-4 text-xs text-gray-400">
          © 2026 Pangasinan Heritage Digital Showcase
        </p>

      </footer>

    </div>
  );
}