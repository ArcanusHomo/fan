"use client";

import { motion } from "framer-motion";
import { contactInfo } from "@/data/restaurant";
import { fadeInUp } from "@/lib/animations";

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <div className="bg-forest py-20 px-4 text-center">
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <h1 className="font-serif text-4xl md:text-5xl text-cream tracking-wide mb-4">
            联系我们
          </h1>
          <div className="w-12 h-[2px] bg-sand/50 mx-auto mb-4" />
          <p className="text-sand/60 text-sm tracking-wider">
            欢迎莅临品尝地道安徽家常味
          </p>
        </motion.div>
      </div>

      {/* Contact info */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {/* Address */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-wood mb-5">
              <span className="text-wood text-xl">&#9906;</span>
            </div>
            <h3 className="text-sm text-forest/50 tracking-widest mb-3">
              门店地址
            </h3>
            <p className="text-forest/80 text-sm leading-relaxed mb-3">
              {contactInfo.address}
            </p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs text-moss hover:text-forest border-b border-moss/30 hover:border-forest transition-colors pb-0.5"
            >
              查看地图
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-wood mb-5">
              <span className="text-wood text-xl">&#9743;</span>
            </div>
            <h3 className="text-sm text-forest/50 tracking-widest mb-3">
              联系电话
            </h3>
            <a
              href={`tel:${contactInfo.phone}`}
              className="text-forest/80 text-lg tracking-wide hover:text-moss transition-colors"
            >
              {contactInfo.phone}
            </a>
          </motion.div>

          {/* Hours */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-wood mb-5">
              <span className="text-wood text-xl">&#9716;</span>
            </div>
            <h3 className="text-sm text-forest/50 tracking-widest mb-3">
              营业时间
            </h3>
            <p className="text-forest/80 text-lg tracking-wide">
              {contactInfo.hours}
            </p>
          </motion.div>
        </div>

        {/* Footer note */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16 text-forest/30 text-xs tracking-wider"
        >
          期待您的光临
        </motion.p>
      </div>
    </div>
  );
}
