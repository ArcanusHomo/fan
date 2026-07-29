"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MenuItem } from "@/lib/types";
import { fadeInUp } from "@/lib/animations";

interface MenuCardProps {
  dish: MenuItem;
  index: number;
}

export default function MenuCard({ dish, index }: MenuCardProps) {
  const firstChar = dish.name.charAt(0);

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1 }}
      className="group relative border-2 border-wood rounded-sm overflow-hidden bg-cream hover:shadow-lg hover:shadow-forest/10 transition-shadow duration-300"
    >
      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-wood/20">
        <Image
          src="/images/2.png"
          alt={dish.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Fallback overlay with first character */}
        <div className="absolute inset-0 bg-forest/50 flex items-center justify-center opacity-0 transition-opacity duration-300">
          <span className="font-serif text-5xl text-cream/80">
            {firstChar}
          </span>
        </div>
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
      </div>

      {/* Text content */}
      <div className="p-4">
        <div className="flex items-end justify-between mb-1">
          <h3 className="font-serif text-lg text-forest tracking-wide">
            {dish.name}
          </h3>
          <span className="text-wood font-semibold text-lg whitespace-nowrap ml-2">
            ¥{dish.price}
          </span>
        </div>
        <p className="text-sm text-forest/50 leading-relaxed">
          {dish.description}
        </p>
      </div>
    </motion.div>
  );
}
