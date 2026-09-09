"use client";

import { useState } from "react";
import HeritageCard from "../molecules/HeritageCard";
import SearchForm from "../molecules/SearchForm";

const heritageSites = [
  {
    title: "Hundred Islands",
    slug: "hundred-islands",
    location: "Alaminos City, Pangasinan",
    category: "Natural Heritage",
    description:
      "Discover a breathtaking collection of islands surrounded by clear waters and stunning limestone formations.",
    image: "/images/hundred-islands.jpg",
  },

  {
    title: "Bolinao Lighthouse",
    slug: "bolinao-lighthouse",
    location: "Bolinao, Pangasinan",
    category: "Historical Landmark",
    description:
      "Visit one of Bolinao's iconic landmarks and enjoy panoramic views of the coastline and West Philippine Sea.",
    image: "/images/bolinao-lighthouse.jpg",
  },

  {
    title: "Balungao Hot Spring",
    slug: "balungao-hot-spring",
    location: "Balungao, Pangasinan",
    category: "Natural Attraction",
    description:
      "Relax and experience the refreshing waters of Balungao while enjoying the peaceful surrounding landscape.",
    image: "/images/balungao-hot-spring.jpg",
  },

  {
    title: "Manaoag Church",
    slug: "manaoag-church",
    location: "Manaoag, Pangasinan",
    category: "Religious Heritage",
    description:
      "Visit the historic Basilica of Our Lady of the Rosary of Manaoag, one of Pangasinan's most well-known religious landmarks.",
    image: "/images/manaoag-church.jpg",
  },

  {
    title: "Pangasinan Provincial Capitol",
    slug: "pangasinan-provincial-capitol",
    location: "Lingayen, Pangasinan",
    category: "Historical Landmark",
    description:
      "Explore the historic Pangasinan Provincial Capitol in Lingayen, an important landmark representing the province's history and government heritage.",
    image: "/images/pangasinan-capitol.jpg",
  },
];

export default function HeritageGrid() {
  const [searchQuery, setSearchQuery] =
    useState("");

  const filteredSites =
    heritageSites.filter((site) => {
      const query =
        searchQuery.toLowerCase().trim();

      return (
        site.title
          .toLowerCase()
          .includes(query) ||
        site.location
          .toLowerCase()
          .includes(query) ||
        site.category
          .toLowerCase()
          .includes(query) ||
        site.description
          .toLowerCase()
          .includes(query)
      );
    });

  return (
    <section
      id="heritage"
      aria-labelledby="heritage-heading"
      className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
            Explore Pangasinan
          </p>

          <h2
            id="heritage-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Discover Places Worth Remembering
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Explore the natural wonders,
            historical landmarks, and unique
            destinations that make Pangasinan
            a place worth discovering.
          </p>
        </div>

        {/* Search */}
        <div className="mt-10 flex justify-center">
          <SearchForm
            onSearch={setSearchQuery}
          />
        </div>

        {/* Results */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-600">
            {filteredSites.length}{" "}
            {filteredSites.length === 1
              ? "destination"
              : "destinations"}{" "}
            found
          </p>

          {searchQuery && (
            <button
              type="button"
              onClick={() =>
                setSearchQuery("")
              }
              className="text-sm font-semibold text-green-700 hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Destination Grid */}
        {filteredSites.length > 0 ? (
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {filteredSites.map((site) => (
              <div
                key={site.title}
                className="group relative"
              >

                {/* Category Badge */}
                <div className="pointer-events-none absolute left-4 top-4 z-10">
                  <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-green-800 shadow-sm backdrop-blur">
                    {site.category}
                  </span>
                </div>

                <HeritageCard
                  title={site.title}
                  location={site.location}
                  description={site.description}
                  image={site.image}
                  slug={site.slug}
                />
              </div>
            ))}

          </div>
        ) : (

          /* Empty State */
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">

            <div
              className="text-5xl"
              aria-hidden="true"
            >
              🔎
            </div>

            <h3 className="mt-4 text-xl font-bold text-gray-900">
              No destinations found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-gray-600">
              We couldn&apos;t find a destination matching{" "}
              <span className="font-semibold">
                &quot;{searchQuery}&quot;
              </span>
               . Try another keyword such as Hundred Islands, Bolinao, or Balungao.
            </p>

            <button
              type="button"
              onClick={() =>
                setSearchQuery("")
              }
              className="mt-6 rounded-lg bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            >
              View All Destinations
            </button>

          </div>
        )}

      </div>
    </section>
  );
}