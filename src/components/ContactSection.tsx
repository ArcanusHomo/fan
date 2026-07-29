"use client";

import { motion } from "framer-motion";
import { ContactInfo } from "@/lib/types";
import { fadeInUp } from "@/lib/animations";

interface ContactSectionProps {
  info: ContactInfo;
}

export default function ContactSection({ info }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="py-20 md:py-32 px-4 sm:px-6 bg-cream-dark scroll-mt-20"
    >
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="font-serif text-3xl md:text-4xl text-forest text-center tracking-wide mb-14">
          联系我们
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Address */}
          <div className="text-center">
            <div className="text-wood text-2xl mb-3">&#9906;</div>
            <h3 className="text-sm text-forest/50 tracking-widest mb-3">
              门店地址
            </h3>
            <p className="text-forest/80 text-sm leading-relaxed">
              {info.address}
            </p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(info.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-xs text-moss hover:text-forest border-b border-moss/30 hover:border-forest transition-colors pb-0.5"
            >
              查看地图
            </a>
          </div>

          {/* Phone */}
          <div className="text-center">
            <div className="text-wood text-2xl mb-3">&#9743;</div>
            <h3 className="text-sm text-forest/50 tracking-widest mb-3">
              联系电话
            </h3>
            <a
              href={`tel:${info.phone}`}
              className="text-forest/80 text-lg tracking-wide hover:text-moss transition-colors"
            >
              {info.phone}
            </a>
          </div>

          {/* Hours */}
          <div className="text-center">
            <div className="text-wood text-2xl mb-3">&#9716;</div>
            <h3 className="text-sm text-forest/50 tracking-widest mb-3">
              营业时间
            </h3>
            <p className="text-forest/80 text-lg tracking-wide">
              {info.hours}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
