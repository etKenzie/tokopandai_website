"use client";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Kami berkomitmen untuk menghubungkan pemangku kepentingan utama melalui platform digital Tokopandai, 
            menciptakan ekosistem yang inovatif dan terintegrasi untuk mendukung pertumbuhan dan meningkatkan 
            daya saing bisnis ritel di Indonesia.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

