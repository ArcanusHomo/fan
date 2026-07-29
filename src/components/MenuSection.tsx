"use client";

import { motion } from "framer-motion";
import { MenuItem } from "@/lib/types";
import { fadeInUp } from "@/lib/animations";
import MenuCard from "./MenuCard";

interface MenuSectionProps {
  dishes: MenuItem[];
}

export default function MenuSection({ dishes }: MenuSectionProps) {
  return (
    <section
      id="menu"
      className="py-20 md:py-32 px-4 sm:px-6 bg-forest scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-cream tracking-wide mb-4">
            时令徽菜
          </h2>
          <div className="w-12 h-[2px] bg-sand/50 mx-auto mb-4" />
          <p className="text-sand/60 text-sm md:text-base tracking-wider">
            山野食材 · 传统手艺
          </p>
        </motion.div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {dishes.map((dish, index) => (
            <MenuCard key={dish.name} dish={dish} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
