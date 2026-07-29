"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp } from "@/lib/animations";

const galleryImages = [
  {
    src: "/images/3.png",
    alt: "外门面",
    title: "门面",
    description: "寅青路495号，街巷深处的安徽味道",
  },
  {
    src: "/images/1.png",
    alt: "店内环境",
    title: "内里",
    description: "朴实温暖的用餐空间，如归家般自在",
  },
  {
    src: "/images/2.png",
    alt: "厨房",
    title: "厨房",
    description: "明厨亮灶，柴火气与土酱香的源头",
  },
];

export default function GalleryPage() {
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
            店面展示
          </h1>
          <div className="w-12 h-[2px] bg-sand/50 mx-auto mb-4" />
          <p className="text-sand/60 text-sm tracking-wider">
            始于九亭街巷，专注安徽山里农家味
          </p>
        </motion.div>
      </div>

      {/* Gallery grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.alt}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="border-2 border-wood rounded-sm overflow-hidden bg-cream">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg text-forest tracking-wide mb-1">
                    {img.title}
                  </h3>
                  <p className="text-sm text-forest/50">{img.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-forest/40 text-sm tracking-wider">
            柴火气、土酱香，不做改良
          </p>
        </motion.div>
      </div>
    </div>
  );
}
