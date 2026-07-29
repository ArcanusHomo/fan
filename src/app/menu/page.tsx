"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { menuItems } from "@/data/restaurant";
import { fadeInUp } from "@/lib/animations";

export default function MenuPage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <div className="bg-forest py-20 px-4 text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h1 className="font-serif text-4xl md:text-5xl text-cream tracking-wide mb-4">
            菜品展示
          </h1>
          <div className="w-12 h-[2px] bg-sand/50 mx-auto mb-4" />
          <p className="text-sand/60 text-sm tracking-wider">
            山野食材 · 传统手艺 · 徽菜本味
          </p>
        </motion.div>
      </div>

      {/* Menu grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {menuItems.map((dish, i) => (
            <motion.div
              key={dish.name}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1 }}
              className="group border-2 border-wood rounded-sm overflow-hidden bg-cream hover:shadow-lg hover:shadow-forest/10 transition-shadow duration-300"
            >
              {/* Dish image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-wood/20">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Dish info */}
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
          ))}
        </div>
      </div>
    </div>
  );
}
