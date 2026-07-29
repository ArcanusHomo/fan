"use client";

import { useState, useEffect } from "react";
import { sectionIds } from "@/data/restaurant";

const navLinks = [
  { label: "山野故事", href: `#${sectionIds.story}` },
  { label: "招牌徽菜", href: `#${sectionIds.menu}` },
  { label: "联系我们", href: `#${sectionIds.contact}` },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-forest/85 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href={`#${sectionIds.hero}`}
            onClick={(e) => handleNavClick(e, `#${sectionIds.hero}`)}
            className={`font-serif text-xl tracking-wider transition-colors ${
              scrolled ? "text-cream" : "text-cream drop-shadow-md"
            }`}
          >
            安徽老薛饭店
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm tracking-wider transition-colors hover:text-sand ${
                  scrolled ? "text-cream/80" : "text-cream/90 drop-shadow-sm"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="切换菜单"
          >
            <span
              className={`block w-5 h-[1.5px] transition-all ${
                scrolled ? "bg-cream" : "bg-cream"
              } ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`}
            />
            <span
              className={`block w-5 h-[1.5px] transition-all ${
                scrolled ? "bg-cream" : "bg-cream"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-[1.5px] transition-all ${
                scrolled ? "bg-cream" : "bg-cream"
              } ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}
            />
          </button>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-48 pb-4" : "max-h-0"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block py-2.5 text-sm text-cream/80 tracking-wider transition-colors hover:text-sand"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
