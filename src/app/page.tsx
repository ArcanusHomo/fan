"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp } from "@/lib/animations";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-forest overflow-hidden flex items-center justify-center">
      {/* CSS-only mountain landscape layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Sky gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a3a2a] via-forest to-forest" />

        {/* Far mountains */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[55%]"
          style={{
            background:
              "linear-gradient(175deg, transparent 30%, #1a2e1a 30.5%, #1a2e1a 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-[50%]"
          style={{
            background:
              "linear-gradient(185deg, transparent 35%, #233a23 35.5%, #233a23 100%)",
          }}
        />

        {/* Mid mountains */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[42%]"
          style={{
            background:
              "linear-gradient(172deg, transparent 25%, #1a301a 25.5%, #1a301a 45%, transparent 45.5%, transparent 65%, #1a301a 65.5%, #1a301a 100%)",
          }}
        />

        {/* Near mountains */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[32%]"
          style={{
            background:
              "linear-gradient(178deg, transparent 20%, #162716 20.5%, #162716 100%)",
          }}
        />

        {/* Fog layer 1 */}
        <div className="absolute bottom-[30%] left-0 right-0 h-24 bg-gradient-to-t from-cream/8 via-cream/4 to-transparent blur-xl" />

        {/* Fog layer 2 */}
        <div className="absolute bottom-[20%] left-[10%] right-[10%] h-16 bg-gradient-to-t from-cream/5 via-cream/2 to-transparent blur-2xl" />

        {/* Misty overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-2xl mx-auto"
      >
        {/* Brand mark */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <div className="w-8 h-[1px] bg-sand/40" />
          <span className="text-sand/50 text-xs tracking-[0.3em]">徽 菜</span>
          <div className="w-8 h-[1px] bg-sand/40" />
        </div>

        {/* Main title */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-cream tracking-[0.15em] mb-6 leading-tight">
          安徽老薛饭店
        </h1>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-[1px] bg-sand/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-sand/50" />
          <div className="w-12 h-[1px] bg-sand/40" />
        </div>

        {/* Subtitle */}
        <p className="text-sand/60 text-base md:text-xl tracking-[0.25em] mb-10">
          山野本味 · 皖南家常
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/menu"
            className="px-8 py-3 bg-wood hover:bg-wood-light text-cream text-sm tracking-widest rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-forest/30"
          >
            探索菜单
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border border-sand/40 hover:border-sand text-sand/70 hover:text-sand text-sm tracking-widest rounded-sm transition-all duration-300"
          >
            联系我们
          </Link>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <span className="text-cream/30 text-xs tracking-[0.2em]">
          向下探索
        </span>
      </motion.div>
    </div>
  );
}
