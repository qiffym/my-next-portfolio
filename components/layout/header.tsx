"use client";

import { ListIcon, XIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";

import ThemeSwitcher from "@/components/theme/theme-switcher";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="container mx-auto flex min-h-14 max-w-6xl items-center justify-between gap-4 rounded-full border border-border/60 bg-card px-4 py-3 shadow-lg shadow-foreground/5 backdrop-blur-xl dark:bg-card sm:px-6">
        <Link href="/" className="font-heading font-bold text-lg">
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-12 md:flex" aria-label="Primary navigation">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground uppercase tracking-wider"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-background/70 text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <XIcon aria-hidden="true" size={18} />
            ) : (
              <ListIcon aria-hidden="true" size={18} />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="container mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl border border-border/60 bg-card p-2 shadow-lg backdrop-blur-xl dark:bg-card md:hidden"
          aria-label="Mobile navigation"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30 uppercase tracking-wider"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
