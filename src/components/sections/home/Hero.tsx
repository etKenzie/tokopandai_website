"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Inovasi Digital Untuk Pertumbuhan Bisnis Tanpa Batas
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Platform digital terintegrasi yang menghubungkan pemangku kepentingan utama 
              untuk mendukung pertumbuhan dan meningkatkan daya saing bisnis ritel di Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-dark transition-colors"
              >
                Our Products
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-primary mb-2">100%</h3>
                <p className="text-sm text-gray-600">Business Growth</p>
                <div className="flex items-center gap-1 mt-1 justify-center lg:justify-start">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm text-gray-600">4.9 (1520 Reviews)</span>
                </div>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-primary mb-2">1,000,000+</h3>
                <p className="text-sm text-gray-600">Happy Clients</p>
                <div className="flex items-center gap-1 mt-1 justify-center lg:justify-start">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm text-gray-600">4.8 (1520 Reviews)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl flex items-center justify-center">
              <div className="text-6xl">🚀</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

