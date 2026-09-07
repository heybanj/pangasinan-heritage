"use client";

import { FormEvent, useState } from "react";
import Icon from "../atoms/Icon";

type SearchFormProps = {
  onSearch: (query: string) => void;
};

export default function SearchForm({
  onSearch,
}: SearchFormProps) {
  const [search, setSearch] = useState("");

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    onSearch(search);
  };

  const handleChange = (value: string) => {
    setSearch(value);
    onSearch(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-xl gap-2"
      role="search"
    >
      <label
        htmlFor="heritage-search"
        className="sr-only"
      >
        Search heritage sites
      </label>

      <div className="flex flex-1 items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 shadow-sm focus-within:ring-2 focus-within:ring-green-600">
        <Icon name="search" size={20} />

        <input
          id="heritage-search"
          type="search"
          value={search}
          onChange={(event) =>
            handleChange(event.target.value)
          }
          placeholder="Search heritage sites..."
          className="w-full py-3 text-gray-900 outline-none"
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
      >
        Search
      </button>
    </form>
  );
}