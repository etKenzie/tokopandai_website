"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Dalam usaha peningkatan pelayanan terhadap konsumen haus, kami berusaha mendapatkan gambaran terhadap kualitas pelayanan yang diberikan oleh crew haus!. untuk itu kami pilih program Mystery Shopper dari Toko Pandai. Kami puas dengan pelayanan yang diberikan, tidak hanya dalam pengumpulan data, namun juga dalam pelaporan yang kami terima. Tentunya menjadi insight penting secara objektif atas penilaian pelayanan oleh crew kami. Terima Kasih Toko Pandai",
    author: "Fauzan Bermana",
    company: "Haus!",
  },
  {
    quote: "Pengiriman barang dan stock selalu tersedia dan tepat waktu. Sangat membantu pasokan bahan makanan restoran kami. Sip sekali",
    author: "Helmy Satriya Anugrah",
    company: "Puchasing of Locaahands Group",
  },
  {
    quote: "Pelayanan tim Tokopandai sangat fast respond. Kami dibantu untuk pemenuhan freezer dengan storage stock dari produk Juragan Beku. Dari segi harga juga lebih ok dibandingkan dengan supplier lainnya.",
    author: "Ainur Rofiq",
    company: "PT. Nawasaka Wisesa (The Southern Hotel)",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

