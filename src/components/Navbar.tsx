"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/restaurant";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-forest/85 backdrop-blur-md shadow-lg"
          : "bg-forest/40 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl tracking-wider text-cream hover:text-sand transition-colors"
          >
            安徽老薛饭店
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wider transition-colors hover:text-sand ${
                  pathname === link.href
                    ? "text-sand"
                    : "text-cream/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="切换菜单"
          >
            <span
              className={`block w-5 h-[1.5px] bg-cream transition-all ${
                menuOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-cream transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-cream transition-all ${
                menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-56 pb-4" : "max-h-0"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-2.5 text-sm tracking-wider transition-colors ${
                pathname === link.href
                  ? "text-sand"
                  : "text-cream/80 hover:text-sand"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
