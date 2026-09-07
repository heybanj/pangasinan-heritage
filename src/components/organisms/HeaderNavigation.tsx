"use client";

import { useState } from "react";
import NavigationItem from "../molecules/NavigationItem";
import Icon from "../atoms/Icon";

export default function HeaderNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold text-green-800"
        >
          Pangasinan Heritage
        </a>

        {/* Mobile Menu */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={menuOpen}
          className="rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 md:hidden"
        >
          <Icon name="menu" size={24} />
        </button>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          <NavigationItem
            label="Home"
            href="/"
          />

          <NavigationItem
            label="Heritage Sites"
            href="/#heritage"
          />

          <NavigationItem
            label="About"
            href="/#about"
          />
        </nav>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-gray-100 px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-4">
            <NavigationItem
              label="Home"
              href="/"
            />

            <NavigationItem
              label="Heritage Sites"
              href="/#heritage"
            />

            <NavigationItem
              label="About"
              href="/#about"
            />
          </div>
        </nav>
      )}
    </header>
  );
}