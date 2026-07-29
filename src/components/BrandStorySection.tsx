"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp } from "@/lib/animations";

export default function BrandStorySection() {
  return (
    <section
      id="story"
      className="py-20 md:py-32 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20"
    >
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Text */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-6 tracking-wide">
            山野之味
            <br />
            匠心传承
          </h2>
          <div className="w-12 h-[2px] bg-wood mb-6" />
          <p className="text-forest/70 leading-relaxed text-base md:text-lg">
            始于九亭街巷，专注安徽山里农家味，柴火气、土酱香，不做改良。
          </p>
          <p className="text-forest/50 leading-relaxed text-sm md:text-base mt-4">
            我们坚持从皖南山区甄选地道食材，以传统徽菜技法烹制。
            每一道菜都承载着山野的记忆与家的温度，
            让远离故土的食客在上海也能尝到记忆中的安徽味道。
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative aspect-[4/3] overflow-hidden border-2 border-wood rounded-sm"
        >
          <Image
            src="/images/3.png"
            alt="安徽老薛饭店门面"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
