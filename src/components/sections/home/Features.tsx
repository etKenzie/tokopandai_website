"use client";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Shield, BarChart3 } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Peningkatan Penjualan",
    description: "Perluas jaringan distribusi Anda dengan menghubungkan toko-toko dalam ekosistem kami sehingga bisnis Anda menjadi lebih efektif. Sistem Pemesanan dan Pemenuhan yang mudah dan nyaman dengan fitur-fitur yang TokoPandai sediakan.",
  },
  {
    icon: DollarSign,
    title: "Arus Kas Lebih Baik",
    description: "Saldo dari Faktur Pembayaran langsung ditransfer ke Saldo Pandai distributor secara real-time, memastikan aliran kas yang cepat dan efisien.",
  },
  {
    icon: Shield,
    title: "Pembayaran Terjamin Aman",
    description: "Kurangi risiko penipuan pembayaran dan kehilangan uang selama pengiriman dengan sistem pembayaran yang aman dan terpercaya.",
  },
  {
    icon: BarChart3,
    title: "Informasi yang Akurat",
    description: "Principal dan distributor dapat memantau dan mengawasi sistem sehingga hasil yang didapatkan menjadi obyektif, transparan, dan akurat.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Features</h2>
          <p className="text-lg text-gray-600">Produk-produk digital unggulan Tokopandai</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

