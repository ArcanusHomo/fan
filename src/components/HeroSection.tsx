"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/1.png"
        alt="安徽老薛饭店内景"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-forest/70" />

      {/* Content */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4"
      >
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-cream tracking-wider mb-4">
          安徽老薛饭店
        </h1>
        <div className="w-16 h-[2px] bg-sand/60 mx-auto mb-6" />
        <p className="text-lg md:text-2xl text-sand/80 tracking-[0.2em]">
          山野本味 · 皖南家常
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-sand/40 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 bg-sand/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
